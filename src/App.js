import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 20},
      {name: 'Sam', age: 15},
      {name: 'Jill', age: 50},
      {name: 'Phillip', age: 30},
      {name: 'SpongeBob', age: 10},
      {name: 'Sandy', age: 5}
    ]
  }

  changeNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DO NOT DO THIS: this.state.persons[0].name = 'Johnathan';
    this.setState({persons: [
      {name: 'Johnanthan', age: 15},
      {name: 'Sam', age: 15},
      {name: 'Jill', age: 50},
      {name: 'Phillip', age: 30},
      {name: 'SpongeBob', age: 20},
      {name: newName, age: 5}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Johnanthan', age: 100},
      {name: 'Sam', age: 15},
      {name: event.target.value, age: 50},
      {name: 'Phillip', age: 45},
      {name: 'SpongeBob', age: 20},
      {name: 'Sandy', age: 5}
    ]})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm new</h1>
        <button
        style = {style}
        onClick={this.changeNameHandler.bind(this, 'Chandler')}>Change Name</button>
        {/*NOT RECOMMENDED BUT CAN BE USED: <button onClick={() => this.changeNameHandler('WTF')}>Change Name</button> */}
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            
            >
              Spirit Animal: Wolf 
            </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.changeNameHandler.bind(this, 'Squidward')}
          >
            Spirit Animal: Tiger 
          </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        changed={this.nameChangedHandler}
        >
          Spirit Animal: Ant 
        </Person>
        <Person 
            name={this.state.persons[3].name} 
            age={this.state.persons[3].age}
            >
              Spirit Animal: Tabby 
            </Person>
        <Person 
            name={this.state.persons[4].name} 
            age={this.state.persons[4].age}
        >
          Spirit Animal: Owl 
        </Person>
        <Person 
            name={this.state.persons[5].name} 
            age={this.state.persons[5].age}
        >
          Spirit Animal: Snake 
        </Person>
       
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m New'));
  }
}

export default App;
