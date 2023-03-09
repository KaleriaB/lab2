import React from 'react';
import './App.css';
import MyName from "./components/MyName/MyName";
import Counter from "./components/counter/counter";
import ToDoList from "./components/ToDoList/ToDoList";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      {/*<Counter></Counter>*/}
          {/* <ToDoList></ToDoList>*/}
          <TextField id="standard-basic" label="Name" variant="standard" />
          <Button variant="contained">click1</Button>
          <TextField id="standard-basic" label="Lastname" variant="standard" />
          <Button variant="contained">click</Button>

      </div>

  );
}

export default App;
