import HandleBtn from '@/components/HandleBtn/HandleBtn';
import Image from 'next/image';
import React from 'react';
import { BiSolidTrash } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import {  IoMdArchive, IoMdClock, } from 'react-icons/io';

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
                        <div className="card p-6 border border-gray-100 bg-[#16213E] rounded-3xl text-center space-y-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-green-300 group">

                            {/* right section */}
                            <div className='flex justify-center items-center h-28 w-28 rounded-full overflow-hidden border-4 border-green-400 shadow-lg mx-auto group'>
                                <Image
                                    src={picture}
                                    width={100}
                                    height={100}
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-125'
                                    alt={name} />
                            </div>
                            <h2 className='text-3xl font-extrabold text-[#D1FFD1]'>{name}</h2>


                            <div className='text-center'>
                                <div className={`${status === "overdue" ? 'badge-error' : 'badge-success'} badge uppercase text-[10px] font-bold px-4 py-1.5`}>
                                    {status}
                                </div>
                            </div>
                            <div className='flex gap-2 justify-center'>
                                {tags.map((tag, i) => <span key={i} className='badge badge-success bg-green-200 uppercase text-[10px] font-bold'>{tag}</span>)}
                            </div>
                            <p className='text-[#D1FFD1] text-sm'>{bio}</p>
                            <p className='text-xs text-gray-400'>Preferred: email</p>
                        </div>

                        <div className="card p-6 border border-gray-200 bg-[#16213E]  rounded-3xl space-y-3 shadow-sm">
                            <button className="btn btn-block btn-outline border-gray-100 flex text-[#D1FFD1] gap-2"><IoMdClock /> Snooze 2 Weeks</button>
                            <button className="btn btn-block btn-outline border-gray-100 flex gap-2 text-[#D1FFD1] "><IoMdArchive /> Archive</button>
                            <button className="btn btn-block btn-error btn-outline flex gap-2"><BiSolidTrash /> Delete</button>
                        </div>
                    </div>


                    <div className="col-span-1 md:col-span-2 space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card p-6 border border-gray-100 bg-[#16213E]  hover:border-green-200 rounded-2xl text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <h2 className="text-5xl font-bold text-[#D1FFD1]">{days_since_contact}</h2>
                                <p className="text-gray-100 text-sm">Days Since Contact</p>
                            </div>
                            <div className="card p-6 border border-gray-100 bg-[#16213E]  hover:border-green-200 rounded-2xl text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <h2 className="text-5xl font-bold text-[#D1FFD1]">{goal}</h2>
                                <p className="text-gray-100 text-sm">Goal (Days)</p>
                            </div>
                            <div className="card p-6 border border-gray-100 bg-[#16213E]  hover:border-green-200 rounded-2xl text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <h2 className="text-4xl font-bold text-[#D1FFD1]">{next_due_date}</h2>
                                <p className="text-gray-100 text-sm">Next Due</p>
                            </div>
                        </div>


                        <div className="space-y-8">
                            <div className="flex justify-between p-6 border border-gray-100 bg-[#16213E]  rounded-2xl space-y-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                                <div>
                                    <h3 className="text-[#D1FFD1] font-bold py-2">Relationship Goal</h3>
                                    <p className="text-sm text-gray-400">Connect every <span className='font-bold text-[#D1FFD1]'>30 days</span></p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className="btn btn-sm btn-ghost border-gray-100  gap-1"> <FiEdit /> Edit</button>
                                </div>
                            </div>

                            <div className="card p-6 border border-gray-100 bg-[#16213E]  rounded-2xl shadow-sm">
                                <h3 className="text-[#D1FFD1] font-bold mb-3">Quick Check-In</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <HandleBtn expectedFriend={expectedFriend} type="Call"/>
                                    <HandleBtn expectedFriend={expectedFriend}  type="Text"/>
                                    <HandleBtn  expectedFriend={expectedFriend} type="Video"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;