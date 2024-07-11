import { useState } from "react";
import { privateRequest } from "../reqHandler";
import { useSelector ,useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addmessage } from "../redux/messagesSlice";

const useSendmessage = () => {
  const [load, setLoad] = useState(false);
  const curstate= useSelector((state)=>state.user.currentUser)  ;
  const dispatch= useDispatch() ;
  const sendmessage = async (data) => {
    try {
        setLoad(true) ;
      
      const res=  await privateRequest.post(`/messages/send/${data.id}`, {
        id: curstate._id  ,
        message: data.val,
      });

         dispatch(addmessage(res.data)) ;
    } catch (error) {
      console.log(error) ;
      toast.error("Error occured");
    } finally {
         setLoad(false) ;
    }
  };
  return {load,sendmessage} ;
};

export default useSendmessage 
