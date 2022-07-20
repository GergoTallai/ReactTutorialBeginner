import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';
import React, {Component} from 'react'; //class használat
//import React, {useState} from 'react'; //hook használat. UseState kezeli a függvényalapú komponenseket!
/*
Index.js-ben található a hivatkozás a renderelésre és az "APP"-ra.
*/

/* HOOK HASZNÁLAT
const App = props => {

  const [aktualisState, ujState] = useState({ //Mindig két értéket ad vissza a UseState
    //Speciális objektum a state, foglalt kulcsszó, ezzel adható meg értékek
    persons: [
      {name: "Balázs", age: "22"},
      {name: "János", age: "32"},
    ],
    masikState: 'másik state'
  });

  //Kattintás kezelés
  const nameChangeHander = ()=> {
    //NE HASZNÁLD!!! this.state.persons[0].name = "Jakab"
    ujState({
      persons: [
        {name: "Jakab", age: "99"},
        {name: "Karcsi", age: "85"},
      ]
    }); 
  }

 return( //Mindig kell return
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Party hard!</p>
          <button onClick={nameChangeHander}>Katt ide</button> 
          <Person name={aktualisState.persons[0].name} age={aktualisState.persons[0].age} />
          <Person name={aktualisState.persons[1].name} age={aktualisState.persons[1].age}>Hobbim az info!</Person>
        </header>
      </div>
      //Button Metódus neve utánra "()" raksz akkor betöltéskor lefut
  );
}


/*
Funkcióval is megoldható:
function App() {

  return ( //Minidg kell return
    <div>
    ...
    </div>
  );
}
*/

//OSZTÁLY ALAPÚ:
class App extends Component {

  state = { //Speciális objektum a state, foglalt kulcsszó, ezzel adható meg értékek
    persons: [
      {name: "Balázs", age: "22"},
      {name: "János", age: "32"},
    ],
    masikState: 'másik state',
    lathatosag: true
  }

  nameChangeHander = (ujNev)=> {
    //NE HASZNÁLD!!!-> this.state.persons[0].name = "Jakab"
    this.setState({
      persons: [
        {name: ujNev, age: "99"},
        {name: "Karcsi", age: "85"},
      ]
    });
    console.log(this.state);
  }

  nevValtozasKezelo = (event) =>{
    this.setState({
      persons: [
        {name: event.target.value, age: "99"},
        {name: event.target.value, age: "85"},
      ]
    });
  }

  kapcsolo = () => {
      const lathato = this.state.lathatosag;
      this.setState({lathatosag: !lathato});
  }

  render(){
    return( //Mindig kell return
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Party hard!</p>
          <button onClick={this.kapcsolo}>Kapcsoló!</button> 
          { this.state.lathatosag ?
            <div>
              <Person
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                click={this.nameChangeHander.bind(this, 'Lakkos Jocó')} //Hatákony megoldás
                change={this.nevValtozasKezelo}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={(event) => this.nameChangeHander('Sörös Gábor')} //Nem javasolt mert plusz munkát végez a react
                change={this.nevValtozasKezelo}
              />
            </div>
            : null
          }
        </header>
      </div>
      //Button Metódus neve utánra "()" raksz akkor betöltéskor lefut
    );
  }
}

export default App;
