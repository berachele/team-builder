import React, {useState} from 'react';
import './App.css';
import {v4 as uuid} from 'uuid';
import Form from "./childFolder/Form"

//set up inital team for testing
const initialTeam = [
  {id: uuid(), first: 'Austin', last: 'Lynes', role: 'Team Lead', email: 'austinlynes@lambdaschool.com'},
]

function App() {
  //set up a state property for your team members list
  const [teams, setTeams] = useState(initialTeam)

  //Give the state variable you just declared a default value. 
  //You will need to keep track of a list of team members and each 
  //team member will have several key/value pairs associated with them.
  const [formValues, setFormValues] = useState({
    first: '',
    last: '',
    role: '',
    email: '',
  })

  const makeChange = event => {
    const changedInput = event.target.name
    const newValue = event.target.value

    setFormValues({
      ...formValues, 
      [changedInput]: newValue,
    })
  }

  const submitForm = event => {
    event.preventDefault()

    const newTeam = {
      id: uuid(),
      first: formValues.first,
      last: formValues.last,
      role: formValues.role,
      email: formValues.email
    }
    setTeams([ ...teams, newTeam ])
  }
  // Render your Form component in App and pass a setter method 
  //(the set_____ method from your team members state in App) 
  //down to it so you can add team members to your state.


  return (
    <div className="App">
      <h1>Team Austin</h1>
      <h3>Meet your team:</h3>
      {teams.map(team =>
        <div key={team.id}><b>{team.first} {team.last}:</b> <br /> Role: {team.role} <br /> Email: {team.email}</div>)
      }
      <br/><br/>
      <h4>Add a New Member:</h4>
      <Form
        makeChange={makeChange}
        formValues={formValues}
        submitForm={submitForm}
      />
    </div>
  );
}

export default App;
