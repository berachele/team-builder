import React, {useState} from 'react';
import './App.css';
import {v4 as uuid} from 'uuid';
import Form from "./childFolder/Form"

//set up inital team for testing
const initialTeam = [
  {id: uuid(), first: 'Austin', last: 'Lynes'},
]

function App() {
  //set up a state property for your team members list
  const [teams, setTeams] = useState(initialTeam)


  return (
    <div className="App">
     <h1>Team Austin</h1>
     <h3>Meet your team:</h3>
     {
     teams.map(team =>
       <div key={team.id}>{team.first} {team.last}</div>)
     }
    </div>
  );
}

export default App;
