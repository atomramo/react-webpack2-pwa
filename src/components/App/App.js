import React, {Component} from 'react';
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js'
import PokemonList from '../PokemonList/PokemonList.js'

const App = () => (
  <div>
    <Nav />
    <div>{DEVELOPMENT ? "Dev": "Prod"}</div>
    <h3> The Pokem something </h3>
    <PokemonList />
    <Footer />
  </div>
)

export default App;
