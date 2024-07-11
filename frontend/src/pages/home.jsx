import { useState } from "react"
import { BsSend } from "react-icons/bs";
import MessageDisplay from "../components/messages/MessageDisplay";
import Messageinput from "../components/messages/Messageinput";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectedUserSlice";
const Home = () => {
  const {id}= useParams() ;
  const dispatch= useDispatch()  ;
  const all= useSelector((state)=> (state.allUsers.currentUser))  ;
  const user= all.find((it)=>(it._id)===id) ;
    dispatch( selectUser(user)) ;
  return (
       <div>

       <div className='bg-slate-500 ml-1 py-2 mb-2 rounded-lg w-[450px]'>
       <span className='label-text'>To:</span>{" "}
       <span className='text-gray-900 font-bold'>{user && user.username}</span>
     </div>
           <MessageDisplay/>
           <Messageinput/>
       </div>
  )
}

export default Home