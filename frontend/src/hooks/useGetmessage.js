import { useEffect, useState } from "react";
import { publicRequest } from "../reqHandler";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {  setmessage } from "../redux/messagesSlice";

const useGetMessage = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const senderId = useSelector((state) => state.user.currentUser?._id);
  const token = useSelector((state)=>state?.token?.token) ;
  const getmessages = async ({ receiverId }) => {
    try {
      console.log(receiverId ,"   Here is receiver id")
      setLoad(true);
      const res = await publicRequest.get("/messages/get", {
        params: {
          receiverid: receiverId,  
           senderid: senderId
        } ,
        headers :{
          token :token ,
        }
      });
      const { message } = res.data;
      dispatch(setmessage(message));
    } catch (error) {
      const errorMessage = error.response?.data || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoad(false);
    }
  };

  return { getmessages, load };
};

export default useGetMessage;
