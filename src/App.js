import React from 'react';
import './App.css';
import Carte from './components/Carte.js';
import 'bootstrap/dist/css/bootstrap.min.css';


let utils = [
  {
    nbr: 70,
    nom: "Aissam",
    filiere: "Isil"
  },
  {
    nbr: 80,
    nom: "Saif",
    filiere: "Isil"
  },
  {
    nbr: 100,
    nom: "Bahae",
    filiere: "Isil"
  },
  {
    nbr: 180,
    nom: "Mouaad",
    filiere: "Isil"
  }
];




class App extends React.Component {


  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);

    this.state = {
      text: "",
    }
  }
  

  onSearch(e) {
    this.setState({ text: e.target.value,  });

  }

  render(){
    

    return (
      <div class="container">

      <div> <label for="search">Search :</label>
        <input onChange={ this.onSearch } type="text" class="form-control" placeholder="Enter your name ..."></input> </div>
        <br/>

        <div class="row">
          <div class="col-sm-6 ">
            <ul class="list-group">
              <li class="list-group-item"> { utils[0].nom.toLowerCase().includes(this.state.text.toLowerCase(), 0) ? <Carte nbr = {utils[0].nbr} nom = {utils[0].nom} filiere = {utils[0].filiere}></Carte> : null } </li>
              <li class="list-group-item"> { utils[1].nom.toLowerCase().includes(this.state.text.toLowerCase(), 0)  ? <Carte nbr = {utils[1].nbr} nom = {utils[1].nom} filiere = {utils[1].filiere}></Carte> : null }  </li>
            </ul>

          </div>
          <div class="col-sm-6">
          <ul class="list-group">
              <li class="list-group-item"> { utils[2].nom.toLowerCase().includes(this.state.text.toLowerCase(), 0)  ? <Carte nbr = {utils[2].nbr} nom = {utils[2].nom} filiere = {utils[2].filiere}></Carte> : null } </li>
              <li class="list-group-item"> { utils[3].nom.toLowerCase().includes(this.state.text.toLowerCase(), 0) ? <Carte nbr = {utils[3].nbr} nom = {utils[3].nom} filiere = {utils[3].filiere}></Carte> : null } </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


