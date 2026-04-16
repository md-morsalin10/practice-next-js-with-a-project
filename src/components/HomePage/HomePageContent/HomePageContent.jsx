import React from 'react';
import { GoPlus } from 'react-icons/go';

const HomePageContent = () => {
    return (
        <div>
            <div className='container py-16 mx-auto flex flex-col justify-center items-center text-center'>
                <div className='space-y-3'>
                    <h2 className='text-4xl p-2 md:text-5xl font-bold text-[#D1FFD1]'>Friends to keep close in your life</h2>
                    <p className='text-[#D1FFD1]'>Your personal shelf of meaningful connections. Browse, tend, and <br /> nurture the  relationships that matter most.</p>
                </div>
                <div className='pt-4'>
                    <button className='btn btn-primary  text-white'><GoPlus />Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default HomePageContent;