import React from 'react';

const NotSelected = () => {
    return (
        <div className='h-30 flex flex-col gap-4 items-center justify-center border rounded-2xl'>
            <h2 className='text-[1.5rem] font-semibold'>No Players Selected Yet</h2>
            <p className='text-[1rem]'>Go to available tab to select player</p>
        </div>
    );
};

export default NotSelected;