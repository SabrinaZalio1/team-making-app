import React from 'react';

interface RemovedPlayerList {
  removedPlayers: string[];
  onRevivePlayer: any;
}

const RemovedPlayerList = ({ removedPlayers, onRevivePlayer }: RemovedPlayerList) => {
  return (
    <div className='section-container'>
      <h3>Removed Players</h3>
      <ul>
        {removedPlayers.map((player) => (
          <li key={player}>
            {player}
            <button className='btn btn-success ml-2' onClick={() => onRevivePlayer(player)}>Revive</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemovedPlayerList;
