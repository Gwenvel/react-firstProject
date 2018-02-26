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