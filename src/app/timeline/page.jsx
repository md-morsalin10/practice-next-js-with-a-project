"use client"
import { FriendsContext } from '@/components/context/FriendsContext';
import TimelineCard from '@/components/TimelineCard/TimelineCard';
import React, { useContext } from 'react';

const TimelinePage = () => {
    const { details } = useContext(FriendsContext);


    return (
        <div className='container mx-auto py-20'>
            {details.length === 0 && <div>
                <div className='flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2  border-gray-200'>

                    <h3 className='text-xl font-semibold text-gray-500'
                    >No Data Found</h3>

                    <p className='text-gray-400'>There are nothing to show in your timeline right now.</p>
                </div>
            </div>}

            <div>
                {
                    details.map((frd, ind) => <TimelineCard frd={frd} key={ind}></TimelineCard>)
                }
            </div>
        </div>
    );
};

export default TimelinePage;