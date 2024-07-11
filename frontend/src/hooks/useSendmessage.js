import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addmessage } from "../redux/messagesSlice";
import { publicRequest } from "../reqHandler";

const useSendmessage = () => {
  const [load, setLoad] = useState(false);
  const curstate = useSelector((state) => state.user.currentUser);
  const token = useSelector((state)=>state?.token?.token) ;
  const dispatch = useDispatch();
  const sendmessage = async (data) => {
    try {
      setLoad(true);

      const res = await publicRequest.post(
        `/messages/send/${data.id}`,
        {
          id: curstate._id,
          message: data.val,
        },
        {
          headers: {
            token: token,
          },
        }
      );

      dispatch(addmessage(res.data));
    } catch (error) {
      console.log(error);
      toast.error("Error occured");
    } finally {
      setLoad(false);
    }
  };
  return { load, sendmessage };
};

export default useSendmessage;
