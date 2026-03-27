import React from 'react';
import PlayerCard from '../players/PlayerCard';

const Available = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto'>
            {
                players.map(player => <PlayerCard
                    setSelectedPlayers={setSelectedPlayers}
                    selectedPlayers={selectedPlayers}
                    setCoin={setCoin}
                    coin={coin}
                    player={player}
                    key={player.id}
                ></PlayerCard>)
            }
        </div>
    );
};

export default Available;
