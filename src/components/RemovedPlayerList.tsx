import React from 'react';

interface RemovedPlayerListProps {
  removedPlayers: string[];
  onReviveAllPlayers: () => void;
}

const RemovedPlayerList: React.FC<RemovedPlayerListProps> = ({ removedPlayers, onReviveAllPlayers }) => {
  return (
    <div className='section-container'>
      <h3>Removed Players</h3>
      <ul className='list-group'>
        {removedPlayers.map((player) => (
          <li className='list-group-item' key={player}>{player}</li>
        ))}
      </ul>
      <button className='btn btn-success mt-2' onClick={onReviveAllPlayers}>
        Revive All Players
      </button>
    </div>
  );
};

export default RemovedPlayerList;
