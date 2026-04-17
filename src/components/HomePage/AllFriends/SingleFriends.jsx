import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleFriends = ({ frd }) => {
    // console.log(frd);
     const {id, name, days_since_contact, picture, tags, status } = frd

    return (
        <Link
            href={`/${id}`}
            className='group border border-gray-50 rounded-2xl shadow-lg bg-white p-5 transition-all duration-300 hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 hover:scale-[1.02] ease-in-out'>

            <div className='flex justify-center items-center'>
                <div
                    className='flex justify-center items-center h-24 w-24 rounded-full overflow-hidden border-2 border-gray-100 mb-4 transition-transform duration-500 group-hover:border-green-400 ease-in-out'
                >

                    <Image
                     src={picture} 
                     width={100}
                     height={100}
                     className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-115' alt="" />
                </div>
            </div>
            <div className='text-center space-y-1.5'>
                <h3 className='text-[#1F2937] text-xl font-semibold'>{name}</h3>
                <p className='text-[14px] text-[#64748B]'>{days_since_contact}d ago</p>
                <div>
                    {tags.map((tag, ind) => <div key={ind} className="badge mx-1 bg-green-200 text-green-500 font-semibold badge-success">{tag}</div>)}
                </div>
                <div>
                    <p className={`${status === "overdue" ? "badge badge-error" : status === "almost due" ? "badge badge-warning" : "badge badge-success"}`}>{status}</p>
                </div>
            </div>
        </Link>
    );
};

export default SingleFriends;