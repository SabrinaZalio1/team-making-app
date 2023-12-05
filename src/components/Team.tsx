import React from 'react';

interface TeamProps {
  title: string;
  players: string[];
  onPlayerSelect: (player: string) => void;
}

const Team: React.FC<TeamProps> = ({ title, players, onPlayerSelect }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {players.map((player) => (
          <li key={player} onClick={() => onPlayerSelect(player)}>
            {player}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
