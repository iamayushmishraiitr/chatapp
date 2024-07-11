import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addmessage } from '../redux/messagesSlice'
import io from "socket.io-client";
import { setOnlineUsers } from '../redux/socketSlice';
const useListenMessage = () => {
   
   const dispatch= useDispatch() ;
   const userId= useSelector((state)=>state.user.currentUser._id)
   const messages= useSelector((state)=> state.messages.messages)
   useEffect(()=>{
      if(userId)
        {
       const socket= io("http://localhost:3000" ,{
        query:{
          userId: userId
        }
       })  ;
          socket.on("getOnlineUsers"  , (users)=>{
            console.log("HERE ARE USERS <" ,users)
             dispatch(setOnlineUsers(users)) ;
          }) ;
          socket?.on("newMessage" ,(newmessage)=>{
            dispatch(addmessage(newmessage))  ;
       })
          return () => socket.close();
      }
      else{
            if(socket)
              {
                socket.close() ;
                dispatch(setSocket(null)) ;
              }
      }
   
    },[userId])
  
}

export default useListenMessage
