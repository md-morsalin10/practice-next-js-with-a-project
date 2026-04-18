import React from 'react';
import { FiPhoneCall, FiVideo } from 'react-icons/fi';
import { IoMdText } from 'react-icons/io';

const TimelineCard = ({ frd }) => {
    // console.log(frd);

    const {actionType} = frd
    
    const icon = actionType === 'Text' ? <IoMdText  className='h-8 w-8 text-yellow-500'/> :
     actionType === 'Video' ? <FiVideo className='h-8 w-8 text-blue-500' /> 
     : <FiPhoneCall className='h-8 w-8 text-green-500'/>;

     const label = actionType === 'Text' ? 'Text' : actionType === 'Video' ? 'Video' : 'Call';
    
    return (
        <div className='container mx-auto'>
            <div
                className='group flex items-center gap-4 border my-6 p-5 rounded-2xl border-gray-300 bg-base-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg'>
                <div
                    className='transition-transform duration-300 group-hover:scale-125'
                >{icon} </div>
                <div>
                    <h2 className='text-[#244D3F] font-semibold'>
                        {label} <span className='text-[#64748B] font-medium text-[14px]'>With {frd.name}</span>
                    </h2>
                    <p className='text-[#64748B]'>{new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;