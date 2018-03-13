    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m New'));

        {/*NOT RECOMMENDED BUT CAN BE USED: <button onClick={() => this.changeNameHandler('WTF')}>Change Name</button> */}
{this.state.showPersona ? <div></div> : null}


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

    ---------------------------------------------------

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
  -----------------------------------------------------
      // const persons = this.state.persons.slice();
      ----------------------------------------------

    
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // };
    -------------------------------------------
          // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // }
      ----------------------------------
          // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    // return <p>I'm a person and I am {Math.floor(Math.random()*30)} years old</p>