import React from 'react';
import SelectedPlayers from './SelectedPlayers';
import NotSelected from './NotSelected';


const Selected = ({ setCoin, coin, setSelectedPlayers, selectedPlayers }) => {

    // manage deleted item
    const deletedItem = (player) => {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name !== player.name);
        setSelectedPlayers(filteredPlayers)

        // manage coin
        setCoin(coin + player.price);
    }

    return (
        <div className='mt-8 space-y-5 mx-auto'>
            {
                selectedPlayers.length === 0 ? <NotSelected></NotSelected>

                    : selectedPlayers.map(player => {
                        return <SelectedPlayers
                            player={player}
                            deletedItem={deletedItem}
                            key={player.id}
                        ></SelectedPlayers>

                    })
            }
        </div>
    );
};

export default Selected;