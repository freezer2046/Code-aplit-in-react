import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name:'Max',age:'28'},
      { name:'Maru',age:'26'},
      { name:'ZL',age:'25'}
    ],
    showPersons: false
  }

  deletePersonHandler= (personIndex) =>{
      const persons = this.state.persons;
      persons.splice(personIndex,1);
      this.setState({persons: persons});
  }




  nameChangeHanlder = (event) =>{
    this.setState({persons:[
      { name:'Max',age:'28'},
      { name: event.target.value, age:'26'},
      { name:'ZL',age:'27'}
  ]
}  )
  }

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow});
}



  render() {
    const style ={
      backgroundColor:'white',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px',
      cursor:'pointer'
    };


    let persons = null;


    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                  click={this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}/>
          })}
       <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
       <Person
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this,'MAX!')}
        changed={this.nameChangeHanlder}
        >My Hobbies: Racing.
        </Person>
       <Person
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
        </div> 
      
      
      );
    }

    return (
      <div className="App">
       <h1>Hi, I'm a React App!</h1>
       <p>this is really working</p>
       <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
       </div>
       
      
    );
    // return React.createElement('div',null,'h1','Hi, I\'m a R eact App!!!');
  }
}

export default App;
