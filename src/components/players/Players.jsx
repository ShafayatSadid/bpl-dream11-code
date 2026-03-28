import React, { use, useState } from 'react';
import Available from '../available/Available';
import Selected from '../selected/Selected';


const Players = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise);

    const [selected, setSelected] = useState("available");

    // selected players state
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='max-w-330 mx-auto my-21.75'>

            {/* Players Header */}
            <div className='flex justify-between items-center'>
                {
                    selected === "available" ? <h3 className='text-2xl font-bold'>Available Players</h3> : <h3 className='text-2xl font-bold'>Selected Players ({selectedPlayers.length}/{players.length})</h3>
                }

                <div className='flex gap-1.5'>
                    <button onClick={() => setSelected("available")} className={selected === "available" ? 'btn btn-primary' : 'btn'}>Available</button>

                    <button onClick={() => setSelected("selected")} className={selected === "selected" ? 'btn btn-primary' : 'btn'}>Selected ({selectedPlayers.length})</button>
                </div>

            </div>

            {/* player cards */}


            {
                selected === "available" ? <Available
                    setSelectedPlayers={setSelectedPlayers}
                    selectedPlayers={selectedPlayers}
                    setCoin={setCoin}
                    coin={coin}
                    players={players}
                ></Available>

                    : <Selected players={players}
                        setSelectedPlayers={setSelectedPlayers}
                        selectedPlayers={selectedPlayers}
                        setCoin={setCoin}
                        coin={coin}
                    ></Selected>
            }



        </div>
    );
};

export default Players;