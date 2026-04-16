"use client"
import useFriends from '@/components/hooks/useFriends';
import React from 'react';
import SingleFriends from './SingleFriends';

const AllFriends = () => {
    const {friends, loader} = useFriends();
    console.log(friends);
    
    return (
        <div className='container mx-auto p-5 py-15'>
            {loader ? (<div>
                <p>Loading......</p>
            </div>):
            (
                <div className='grid grid-cols-4 gap-8'>
                    {friends.map(frd=> <SingleFriends key={frd.id} frd={frd}></SingleFriends>)}
                </div>
            )}
        </div>
    );
};

export default AllFriends;