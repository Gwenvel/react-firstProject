import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1,name: 'John', age: 20 },
      { id: 2, name: 'Sam', age: 15 },
      { id: 3, name: 'Jill', age: 50 },
      { id: 4, name: 'Phillip', age: 30 },
      { id: 5, name: 'SpongeBob', age: 10 },
      { id: 6, name: 'Sandy', age: 5 }
    ]
  }

  changeNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DO NOT DO THIS: this.state.persons[0].name = 'Johnathan';
    this.setState({
      persons: [
        { name: 'Johnanthan', age: 15 },
        { name: 'Sam', age: 15 },
        { name: 'Jill', age: 50 },
        { name: 'Phillip', age: 30 },
        { name: 'SpongeBob', age: 20 },
        { name: newName, age: 5 }
      ],
      showPersons: false            
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

  //   this.setState({
  //     persons: [
  //       { name: 'Johnanthan', age: 100 },
  //       { name: 'Sam', age: 15 },
  //       { name: event.target.value, age: 50 },
  //       { name: 'Phillip', age: 45 },
  //       { name: 'SpongeBob', age: 20 },
  //       { name: 'Sandy', age: 5 }
  //     ]
  //   })

    this.setState({persons: persons});
  }

 deletePersonsHandler = (ind) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(ind, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

 

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonsHandler(index)}
                      name={person.name} 
                      age={person.age} 
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

    }
    return (
      <div className="App">
        <h1>Hi, I'm new</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
