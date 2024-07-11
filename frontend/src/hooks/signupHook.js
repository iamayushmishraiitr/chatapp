import toast from "react-hot-toast";
import { publicRequest } from "../reqHandler";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const errorHandler = (e) => {
  const { email, username, password, confirmPassword } = e;
  if (!email || !username || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
};

const signupHook = () => {
  const [load, setLoad] = useState(false);
  const navigate= useNavigate() ;
  const signup = async (formData) => {
    const { email, username, password, confirmPassword } = formData;
  console.log(formData)
    const isValid = errorHandler({ email, username, password, confirmPassword });
    if (!isValid) return;

    if (password !== confirmPassword) {
      toast.error("Password and confirm-password should be the same");
      return;
    }

    try {
      setLoad(true);

      const res = await publicRequest.post("/auth/signup", {
        email:email ,
        username:username,
        password :password  
      });
      
      toast.success("User registered successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Signup Error ");
    } finally {
      setLoad(false);
    }
  };

  return { signup, load };
};

export default signupHook;
