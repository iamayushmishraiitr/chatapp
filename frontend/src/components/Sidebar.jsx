import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import useListenMessage from '../hooks/useListenMessage';
const logout= ()=>{
  if(confirm("Do you want to signout")) 
    {
  localStorage.removeItem("persist:root") ;
  window.location.reload() ;
    }
}
const Sidebar = () => {
  const userId = useSelector((state) => state.user.currentUser?._id);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers.currentUser);
  const onlineUsers = useSelector((state) => state.socket.onlineUsers);
  console.log("nasscOnline Usefs" ,onlineUsers)
  const { id } = useParams();
  const navigate = useNavigate();
  useListenMessage() ;
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='w-[700px] h-[550px] mr-20 mb-15 p-2 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <div className='flex flex-row h-full'>
         <div className='h-full w-full flex flex-col'>
          <div className='flex flex-col h-full w-[220px] border-r-2 mr-1 overflow-auto'>

            {users && users.length > 0 ? (
              users.map((user, index) => (
                <div
                  key={index}
                  className={`flex flex-row items-center ${user._id === id ? 'bg-blue-600' : ''} hover:bg-blue-200 text-white mb-6 h-[40px] w-full rounded-lg`}
                  onClick={() => navigate(`/${user._id}`)}
                >
                <div className="relative">
  <FaCircleUser className="h-[28px] w-[28px] ml-1" />
  <div className= {`${onlineUsers.includes(user._id) ?"absolute top-5 left-6 transform  h-[10px] w-[10px] bg-green-400 rounded-full" :"h-[0px] w-[0px]"}`} ></div>
</div>
                  <div className='ml-8 text-xl font-bold'>{user.username}</div>
                </div>
              ))
            ) : (
              <p>No users available</p>
            )}
            
          </div>
  
         <button className="shad-button_ghost mb-4 flex flex-row hover:bg-white w-[160px] text-black rounded-lg" onClick={()=> logout()}>
         <img src="../../src/assets/logout.svg"  className='ml-4 mr-1'/>
         <p >Logout</p>
         </button>
          </div>
          <Outlet />
        </div>
      </div>
    
    </div>
  );
};

export default Sidebar;
