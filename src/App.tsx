import React, { useEffect, useState } from 'react';
import PlayerList from './components/PlayerList';
import RemovedPlayerList from './components/RemovedPlayerList';
import FutbolPlayers from './data/futbol.json';
import Formula1Players from './data/formula1.json';
import MlbPlayers from './data/mlb.json';

type SportData = {
  [key: string]: { name: string }[];
};

const sportData: SportData = {
  futbol: FutbolPlayers,
  formula1: Formula1Players,
  mlb: MlbPlayers,
};

const App = () => {
  const [sport, setSport] = useState('futbol');
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [teamOnePlayers, setTeamOnePlayers] = useState<string[]>([]);
  const [teamTwoPlayers, setTeamTwoPlayers] = useState<string[]>([]);
  const [removedPlayers, setRemovedPlayers] = useState<string[]>([]);

  useEffect(() => {
    const initializePlayers = () => {
      const players = sportData[sport]?.map((player: any) => player.name) || [];
      setTeamOnePlayers(players);
      setTeamTwoPlayers([]);
    };

    initializePlayers();
  }, [sport]);

  const handleSportChange = (value: string) => {
    setSport(value);
  };

  const handlePlayerSelect = (player: string) => {
    setSelectedPlayer(player);
  };

  const handleTransferToOne = () => {
    if (selectedPlayer) {
      setTeamOnePlayers([...teamOnePlayers, selectedPlayer]);
      setTeamTwoPlayers(teamTwoPlayers.filter((player) => player !== selectedPlayer));
      setSelectedPlayer('');
    }
  };

  const handleTransferToTwo = () => {
    if (selectedPlayer) {
      setTeamTwoPlayers([...teamTwoPlayers, selectedPlayer]);
      setTeamOnePlayers(teamOnePlayers.filter((player) => player !== selectedPlayer));
      setSelectedPlayer('');
    }
  };

  const handleRemoveSelectedPlayers = () => {
    if (selectedPlayer) {
      setRemovedPlayers([...removedPlayers, selectedPlayer]);
      setSelectedPlayer('');
    }
  };

  return (
    <>
      <div className='p-3'>
        <div>
          <h2>VIEW 1</h2>

          <div>
            <label>
              Seleccione un deporte:
              <select className='ml-2' value={sport} onChange={(e) => handleSportChange(e.target.value)}>
                {Object.keys(sportData).map((sportOption) => (
                  <option key={sportOption} value={sportOption}>
                    {sportOption}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className='d-flex justify-content-around my-5'>
            <PlayerList title="Team One" players={teamOnePlayers} selectedPlayer={selectedPlayer} onPlayerSelect={handlePlayerSelect} className='section-container' />
            <div className='section-container d-flex flex-column justify-content-center'>
              <button onClick={handleTransferToOne} className='btn btn-secondary btn-lg m-2'>
                Al equipo 1
              </button>
              <button onClick={handleTransferToTwo} className='btn btn-secondary btn-lg m-2'>
                Al equipo 2
              </button>
              <button onClick={handleRemoveSelectedPlayers} className='btn btn-danger w-75 mx-auto my-4'>
                Remove Selected Players
              </button>
            </div>
            <PlayerList title="Team Two" players={teamTwoPlayers} selectedPlayer={selectedPlayer} onPlayerSelect={handlePlayerSelect} className='section-container' />
          </div>
        </div>

        <hr />

        <div>
          <h2>VIEW 2</h2>
          <RemovedPlayerList removedPlayers={removedPlayers} />
        </div>
      </div>
    </>
  );
};

export default App;