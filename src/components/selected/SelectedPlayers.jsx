import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({player, deletedItem}) => {
    return (
        <div className='flex justify-between items-center gap-5 h-28 border rounded-2xl p-3 px-3'>
            <div className='flex gap-5 items-center'>
                <img className='h-22' src={player.photo} alt={player.alt_text} />
                <div>
                    <h2 className='text-[1.5rem] font-semibold'>{player.name}</h2>
                    <p className='text-[1rem]'>{player.role}</p>
                </div>
            </div>
            <div onClick={() => deletedItem(player)} className='text-2xl text-red-500'><MdDelete></MdDelete></div>
        </div>
    );
};

export default SelectedPlayers;