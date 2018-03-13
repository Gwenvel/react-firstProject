import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import Radium, {StyleRoot} from 'radium';
import ErrorBoundary from './ErrorBoundaries/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'John', age: 20 },
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


    this.setState({ persons: persons });
  }

  deletePersonsHandler = (ind) => {

    const persons = [...this.state.persons];
    persons.splice(ind, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {


    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );


      btnClass = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' ');

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      // classes.push('red');
      assignedClasses.push(classes.Red);
    }

    if (this.state.persons.length >= 1) {
      // classes.push('bold');
      assignedClasses.push(classes.Bold);
    }

    return (
      // <StyleRoot>
      // <div className="App">
      <div className={classes.App}>
        <h1>Hi, I'm new</h1>
        <p className={assignedClasses.join(' ')}> What!!!!!!!!!!!!!!</p>
        <button
          className={btnClass}
          // style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
