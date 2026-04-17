"use client"
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosVideocam, IoMdText } from 'react-icons/io';
import { FriendsContext } from '../context/FriendsContext';


const HandleBtn = ({type, expectedFriend}) => {
    // console.log(type,"type");
    const {handleBtn} = useContext(FriendsContext);
    
 
    return (
        <div
            onClick={() => handleBtn(expectedFriend)}
            className='flex flex-col justify-center items-center py-4 btn h-full transition-all duration-300 hover:bg-green-50 hover:border-green-300 hover:scale-105 active:scale-95'>

            {type==="Call" ? <FiPhoneCall className='h-5 w-5 text-green-600' /> 
            : type === "Text" ?  <IoMdText className='h-5 w-5 text-yellow-600' />
            : <IoIosVideocam className='text-blue-600 h-5 w-5' />}
            <button className=" btn-outline border-gray-100  text-[#244D3F]">{type}</button>
        </div>
    );
};

export default HandleBtn;