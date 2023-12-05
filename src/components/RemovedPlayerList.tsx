import React from 'react';

interface RemovedPlayerList {
  removedPlayers: string[];
}

const RemovedPlayerList = ({ removedPlayers }: RemovedPlayerList) => {
  return (
    <div>
      <h4>Removed Players</h4>
      <ul className='list-group'>
        {removedPlayers.map((player) => (
          <li
            className={`player-item list-group-item`}
          >
            {player}
          </li>
        ))}
      </ul>
      <button className='btn btn-success btn-lg m-2'>
        Revive
      </button>
    </div>
  );
};

export default RemovedPlayerList;
