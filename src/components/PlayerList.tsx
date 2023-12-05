import React from 'react';

interface PlayerListProps {
  title: string;
  players: string[];
  selectedPlayer: string;
  onPlayerSelect: (player: string) => void;
  className?: string;
}

const PlayerList: React.FC<PlayerListProps> = ({ title, players, selectedPlayer, onPlayerSelect, className }) => {
  return (
    <div className={`${className}`}>
      <h4>{title}</h4>
      <ul className='list-group'>
        {players.map((player) => (
          <li
            className={`player-item list-group-item ${selectedPlayer === player && 'player-selected'} `}
            key={player}
            onClick={() => onPlayerSelect(player)}
          >
            {player}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
