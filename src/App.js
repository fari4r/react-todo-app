import React from 'react' ; 
import Todolist from './components/Todolist' ; 
import './App.css' ; 


export default class App extends React.Component { 
  render() { 
    return(
      <div>
         <Todolist />
      </div>
    )
  }
}