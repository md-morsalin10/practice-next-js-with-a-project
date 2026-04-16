import React from 'react';

const CardSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto py-5 p-8 '>
            <div
                className='bg-[#16213E] flex flex-col justify-center items-center border border-primary py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#D1FFD1] text-3xl font-bold'>20</h2>
                <p className='text-[#E5E5E5]'>Total Friends</p>
            </div>
            <div
                className='bg-[#16213E] flex flex-col justify-center items-center border border-primary py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#D1FFD1] text-3xl font-bold'>3</h2>
                <p className='text-[#E5E5E5]'>On Track</p>
            </div>
            <div
                className='bg-[#16213E] flex flex-col justify-center items-center border border-primary py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#D1FFD1] text-3xl font-bold'>6</h2>
                <p className='text-[#E5E5E5]'>Need Attention</p>
            </div>
            <div
                className='bg-[#16213E] flex flex-col justify-center items-center border border-primary py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#D1FFD1] text-3xl font-bold'>12</h2>
                <p className='text-[#E5E5E5]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default CardSection;