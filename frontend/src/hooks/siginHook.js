import toast from "react-hot-toast";
import { publicRequest } from "../reqHandler.js";
import { useDispatch } from "react-redux";
import { alluserList } from "../redux/alluserSlice.js";
import { login } from "../redux/userSlice.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../redux/tokenSlice.js";

const errorHandler = (e) => {
  const { email, username, password } = e;
  if (!email || !username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
};

const signinHook = () => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
const navigate= useNavigate() ;
  const signin = async (formData) => {
    const { email, username, password } = formData;
    const isValid = errorHandler({ email, username, password });
    if (!isValid) return;

    try {
      setLoad(true); 
      const res = await publicRequest.get("/auth/signin", {
        params: {
          username,
          email,
          password
        }
      });

      const { token, curUser, allUsers } = res.data; // Assuming response structure
      
      dispatch(getToken(token))
      dispatch(login(curUser));
      dispatch(alluserList(allUsers));
      toast.success("Login successful");

    } catch (error) {
      toast.error("Failed to Login");
      console.error("Login Error ", error);
    } finally {
      setLoad(false); // Reset loading state after request completes
    }
  };

  return { load, signin };
};

export default signinHook;
