import { useSelector } from "react-redux"
import { extractTime } from "../FormatTime";
import { FaCircleUser } from "react-icons/fa6";
const Message = ({message}) => {
    const curUser= useSelector((state)=>state.user.currentUser)  ;
    const receiverUser=  useSelector((state)=> state.selectedUser.selectedUser) ;
   const flag= (message.senderid===curUser._id)  ;
   const formattedTime = extractTime(message.createdAt);
   const chatClassName = flag ? "chat-end" : "chat-start";

   const bubbleBgColor = flag ? "bg-blue-500" : "";
  return (
    <div>
		<div className={`chat ${chatClassName} text-white`}>
			<div className='chat-image avatar text-white'>
				<div className='rounded-full'>
        <FaCircleUser className="h-[28px] w-[28px] mb-2"/>
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
    </div>
  )
}

export default Message