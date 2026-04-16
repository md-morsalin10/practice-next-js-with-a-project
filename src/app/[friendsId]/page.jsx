import Image from 'next/image';
import React from 'react';
import { BiSolidTrash } from 'react-icons/bi';
import { FiEdit, FiPhoneCall } from 'react-icons/fi';
import { IoIosVideocam, IoMdArchive, IoMdClock, IoMdText } from 'react-icons/io';

const FriendsDetails = async ({ params }) => {
    // console.log(params, "details");
    const { friendsId } = await params;
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    // console.log(friendsId);
    // console.log(data, "data");

    const expectedFriend = data.find((frd) => frd.id == friendsId);
    // console.log(expectedFriend);
    const { name, tags, bio, picture, status, days_since_contact, next_due_date, goal } = expectedFriend


    return (
        <div className='bg-base-300'>
            <div className="container mx-auto p-10 rounded-3xl pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* right section */}
                    <div className="space-y-6 text-center">
                        <div className="card p-6 border border-gray-100 bg-white rounded-3xl text-center space-y-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-green-300 group">

                            {/* right section */}
                            <div className='flex justify-center items-center h-28 w-28 rounded-full overflow-hidden border-4 border-green-400 shadow-lg mx-auto group'>
                                <Image
                                    src={picture}
                                    width={100}
                                    height={100}
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-125'
                                    alt={name} />
                            </div>
                            <h2 className='text-3xl font-extrabold text-gray-900'>{name}</h2>


                            <div className='text-center'>
                                <div className={`${status === "overdue" ? 'badge-error' : 'badge-success'} badge uppercase text-[10px] font-bold px-4 py-1.5`}>
                                    {status}
                                </div>
                            </div>
                            <div className='flex gap-2 justify-center'>
                                {tags.map((tag, i) => <span key={i} className='badge badge-success bg-green-200 uppercase text-[10px] font-bold'>{tag}</span>)}
                            </div>
                            <p className='text-[#64748B] text-sm'>{bio}</p>
                            <p className='text-xs text-gray-400'>Preferred: email</p>
                        </div>

                        <div className="card p-6 border border-gray-200 bg-white rounded-3xl space-y-3 shadow-sm">
                            <button className="btn btn-block btn-outline border-gray-100 flex text-[#1F2937] gap-2"><IoMdClock /> Snooze 2 Weeks</button>
                            <button className="btn btn-block btn-outline border-gray-100 flex gap-2 text-[#1F2937] "><IoMdArchive /> Archive</button>
                            <button className="btn btn-block btn-error btn-outline flex gap-2"><BiSolidTrash /> Delete</button>
                        </div>
                    </div>


                    <div className="col-span-1 md:col-span-2 space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card p-6 border border-gray-100 bg-white hover:border-green-200 rounded-2xl text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <h2 className="text-5xl font-bold text-[#244D3F]">{days_since_contact}</h2>
                                <p className="text-gray-500 text-sm">Days Since Contact</p>
                            </div>
                            <div className="card p-6 border border-gray-100 bg-white hover:border-green-200 rounded-2xl text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <h2 className="text-5xl font-bold text-[#244D3F]">{goal}</h2>
                                <p className="text-gray-500 text-sm">Goal (Days)</p>
                            </div>
                            <div className="card p-6 border border-gray-100 bg-white hover:border-green-200 rounded-2xl text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <h2 className="text-4xl font-bold text-[#244D3F]">{next_due_date}</h2>
                                <p className="text-gray-500 text-sm">Next Due</p>
                            </div>
                        </div>


                        <div className="space-y-8">
                            <div className="flex justify-between p-6 border border-gray-100 bg-white rounded-2xl space-y-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                                <div>
                                    <h3 className="text-[#244D3F] font-bold py-2">Relationship Goal</h3>
                                    <p className="text-sm text-gray-600">Connect every <span className='font-bold text-gray-900'>30 days</span></p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className="btn btn-sm btn-ghost border-gray-100  gap-1"> <FiEdit /> Edit</button>
                                </div>
                            </div>

                            <div className="card p-6 border border-gray-100 bg-white rounded-2xl shadow-sm">
                                <h3 className="text-[#244D3F] font-bold mb-3">Quick Check-In</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                    <div
                                        // onClick={() => handleCall(expectedFriends)}
                                        className='flex flex-col justify-center items-center py-4 btn h-full transition-all duration-300 hover:bg-green-50 hover:border-green-300 hover:scale-105 active:scale-95'>

                                        <FiPhoneCall className='h-5 w-5 text-green-600' />
                                        <button className=" btn-outline border-gray-100  text-[#244D3F]">Call</button>
                                    </div>

                                    <div
                                        // onClick={() => handleText(expectedFriends)}
                                        className='flex flex-col justify-center items-center py-4 btn h-full transition-all duration-300 hover:bg-yellow-50 hover:border-yellow-300 hover:scale-105 active:scale-95'>
                                        <IoMdText className='h-5 w-5 text-yellow-600' />
                                        <button className="border-gray-100 text-[#244D3F]">Text</button>
                                    </div>

                                    <div
                                        // onClick={() => handleVideo(expectedFriends)}
                                        className='flex flex-col justify-center items-center py-4 btn h-full transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105 active:scale-95'>
                                        <IoIosVideocam className='text-blue-600 h-5 w-5' />
                                        <button className="border-gray-100 text-[#244D3F]">Video</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="card p-6 border border-gray-100 bg-white rounded-2xl space-y-4 shadow-sm">

                            <div className="card p-6 border border-gray-100 bg-white rounded-2xl space-y-4 shadow-sm">
                                <div className='flex justify-between items-center p-2'>
                                <h3 className="text-[#244D3F] font-bold">Recent Interactions</h3>
                                   <p className='text-[12px] btn font-medium '><MdHistory /> Recent History</p>
                                </div>

                                 <div className="space-y-3">
                                    {recentInteractions.length > 0 ? (
                                        recentInteractions.map((item, index) =>
                                        (<div
                                            key={index}
                                            className="flex justify-between items-center text-sm p-4 bg-gray-50 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-1  border border-transparent hover:border-gray-200">

                                            <div className='flex gap-2  items-center'>
                                                <div>
                                                    {item.type === 'call'
                                                        ? <FiPhoneCall className='h-6 w-6 text-green-500' />
                                                        : item.type === "text"
                                                            ? <IoMdText className='h-6 w-6 text-yellow-500' />
                                                            : <IoIosVideocam className='h-6 w-6 text-blue-500' />}
                                                </div>

                                                <div>
                                                    <p className='font-medium text-[18px] text-gray-700'
                                                    >{item.type === "call" ? "Call"
                                                        : item.type === 'text' ? 'Text'
                                                            : "video"}</p>
                                                    <p className='text-[14px] text-gray-400'>I Asked {item.name} for career advice</p>
                                                </div>


                                            </div>
                                            <p className='text-gray-400'>{new Date().toLocaleDateString()}</p>
                                        </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-400 py-4">No recent interactions found.</p>
                                    )}
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;