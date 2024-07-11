import React from 'react'
import { useSelector } from 'react-redux'

const Front = () => {
  const user=  useSelector((state)=> state.user.currentUser)  ;
  return (
    <div className='flex flex-col w-[450px] h-[450px]  text-xl font-semibold justify-center mr-12 h'>
         <h1> {`Welcome 👏  ${user.username}`}</h1>
         <h1 >Select User to Start Chatting </h1>
    </div>
  )
}

export default Front