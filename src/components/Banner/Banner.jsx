import React from 'react';
import bannerIcon from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div id='banner' className='max-w-330 h-136.25 bg-[#131313] mx-auto rounded-3xl'>
            <div className='max-w-242.5 mx-auto text-center py-16'>

                <img className='mx-auto mb-6 w-35 lg:w-62' src={bannerIcon} alt="" />
                <h2 className='text-[2.25rem] font-bold text-[#FFFFFF] mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-[1.5rem] font-medium text-[#FFFFFF]/70 mb-6'>Beyond Boundaries Beyond Limits</p>
                <button className='btn btn-primary bg-[#E7FE29] text-[#131313] font-bold border-8 border-[#ffffff]/5 rounded-2xl'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;