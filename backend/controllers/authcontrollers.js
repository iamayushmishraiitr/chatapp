import generateToke from "../JWT/generateToken.js";
import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { username, password, email} = req.body;
    if (!username || !password || !email )
      return res.status(404).json({ message: "Send full credentials" });
    const res1 = await User.findOne({ email });
    const res2 = await User.findOne({ username });
    if (res1 || res2) {
      return res.status(404).json({ message: "Email or Username already reggistered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashpassword,
      email,
    });
    const newuser = await newUser.save();
    if (newuser) {
      return res.status(201).send(newuser);
    } else
      return res.status(400).json({ message: "user could not be registerd" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
//===============================================================LOGIN ============================================
export const signin = async (req, res) => {
  try {
  const {username ,email ,password} =req.query
    if(!username || !email || !password) 
      {
         return res.status(404).json("Send Full credentials") ;
      }
    const arr = await User.find();

    const res1 = arr.find(
      (it) => it.username === username && it.email === email
    );

    const newarr= arr.filter((it)=> (it.username != username))
  
    const compare = await bcrypt.compare(password, res1.password);
    if (!res1 || !compare)
      return res.status(400).json({ message: "Invalid Credentials" });
    const token = generateToke(email, username);
    res.status(201).json({ token, allUsers: newarr, curUser: res1 });
  } 
  catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
