import React from 'react';
import Footer from '../Footer/Footer.js'
import PokemonList from '../PokemonList/PokemonList.js'

const Nav = () =>
<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">

      <span className="mdl-layout-title">React Starter Pack</span>
      <div class="mdl-layout-spacer"></div>
      <div className="mdl-layout-spacer"></div>

      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div>{DEVELOPMENT ? "Dev": "Prod"}</div>
    <h3> The Pokem something </h3>
    <PokemonList />
    <Footer />
  </main>
</div>


export default Nav;
