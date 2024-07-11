import { useState } from "react"
import { BsSend } from "react-icons/bs";
import useSendmessage from "../../hooks/useSendmessage.js";
import { useParams } from "react-router-dom";
const Messageinput = () => {
    const [val,setVal]=useState("") ;
    const {id}= useParams() 
    const {load,sendmessage}= useSendmessage()
    const handlesubmit= async()=>{
       sendmessage({val,id})  ;
       setVal("") ;
    }

  return (
        <div className='w-full relative'>
         <input
           value={val}
           onChange={(e)=>setVal(e.target.value)}
           placeholder='Send a message'
           className='border text-sm rounded-lg block w-full p-2 mb-1  bg-gray-700 border-gray-600 text-white'
         />
         <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' onClick={handlesubmit}>
					 <BsSend />
				</button>
        </div>

  )
}

export default Messageinput