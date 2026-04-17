"use client"
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosVideocam, IoMdText } from 'react-icons/io';

const HandleBtn = ({type}) => {
    // console.log(type,"type");
    
    const handleBtn =()=>{
        console.log("clicked")
    }
    return (
        <div
            onClick={() => handleBtn()}
            className='flex flex-col justify-center items-center py-4 btn h-full transition-all duration-300 hover:bg-green-50 hover:border-green-300 hover:scale-105 active:scale-95'>

            {type==="Call" ? <FiPhoneCall className='h-5 w-5 text-green-600' /> 
            : type === "Text" ?  <IoMdText className='h-5 w-5 text-yellow-600' />
            : <IoIosVideocam className='text-blue-600 h-5 w-5' />}
            <button className=" btn-outline border-gray-100  text-[#244D3F]">{type}</button>
        </div>
    );
};

export default HandleBtn;