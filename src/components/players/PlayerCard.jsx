import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoFlagSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    const { name, country, role, batting_style, bowling_style, price, ranking, photo, alt_text } = player;

    // use state for chose player btn
    const [isSelected, setIsSelected] = useState(false);

    // handle coin and chose player btn
    const handleCoin = () => {
        const newCoin = coin - player.price;
        if (newCoin >= 0) {
            setIsSelected(true)
            setCoin(newCoin)
            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(`Now ${player.name} in your Dream11.`)
        }
        else{
            toast.warn(`You have not enough money for buying ${player.name}.`)
        }

    }
    return (
        <div>
            <div className="card bg-base-100 w-80 shadow-sm">
                <figure>
                    <img className='h-60'
                        src={photo}
                        alt={alt_text} />
                </figure>
                <div className="card-body">
                    {/* card header */}
                    <h2 className="card-title text-[1.25rem] font-semibold"><FaUser></FaUser>{name} </h2>
                    {/* flag and country */}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <IoFlagSharp></IoFlagSharp>
                            <p>{country} </p>
                        </div>
                        <button className='btn'>{role} </button>
                    </div>
                    {/* Divider */}
                    <div className="divider"></div>

                    {/* Ranking */}
                    <div className='flex justify-between'>
                        <h4>Ranking</h4>
                        <div>No: {ranking}</div>
                    </div>

                    {/* Batting style */}
                    <div className='flex justify-between text-[0.785rem]'>
                        <div>{batting_style} </div>
                        <div>{bowling_style} </div>
                    </div>

                    <div className="flex justify-between items-center text-[0.785rem]">
                        <div className=''>Price: {price}</div>
                        <button onClick={handleCoin} className="btn text-[0.785rem]" disabled={isSelected}>{isSelected ? 'Selected' : 'Chose Player'} </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;