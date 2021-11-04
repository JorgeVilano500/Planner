import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./components/task.js";
import Task from './components/task.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      tasks: [
       {name: "morning dump", description: ""},
       {name: "morning breakfest", description: ""}
      ],
      complete: [
        {name: 'Afternoon Wank', description: ''},
        {name: 'shitted', description: ''}
      ]
    };
    this.changeUncomplete = this.changeUncomplete.bind(this);
  }

  changeUncomplete(val, type) {
    console.log('hello')
    if(type==='uncomplete') {
      this.state.complete.push(val)
      this.state.tasks.pop();
    }
  

  }
  dic(){
    
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        <h1>Welcome</h1>
        <div className='taskContainer'>
  
  
        <div className='box'>
        <h3>Uncompleted Tasks</h3>
        <div className='individualItems'>
        {this.state.tasks.map((task, index) => {
          
          return <li onClick={() => {this.changeUncomplete(task, 'uncomplete')}}>< Task 
          name={this.state.tasks[index].name} 
          description={this.state.tasks[index].description}
          />
          </li>
          
          })}
    
        <br></br></div>
  
        </div>
  
  
        <div className='box'> 
        <h3>Completed Tasks</h3>
        <div className='individualItems'>
        {this.state.tasks.map((task, index) => {
          return <li>{this.state.complete[index].name}</li>
          /*
            return <Task name=
          */
          })}
    
        <br></br></div>
  
  
        </div>
        </div>
  
        </header>
      </div>
    );
  
  }
  }

export default App;
