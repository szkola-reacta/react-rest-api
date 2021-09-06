import { useEffect, useState } from 'react';
import './App.css';

import { fetchTeams } from './services/fetchTeams';

function App() {
  const [teams, setTeams] = useState([]);

  const fetchData = async () => {
    const data = await fetchTeams();
    // STEP 5: set state
    setTeams(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        {teams && teams.map((team) =>
          <div key={team.id}>
            <h2>{team.name} - {team.airport_city}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
