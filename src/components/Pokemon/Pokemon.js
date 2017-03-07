//Setting up Pokemon as a functional stateless component
import React from 'react';

const Pokemon = ({id, pokemon}) =>
<div className="pokemon-card mdl-card mdl-shadow--4dp mdl-cell mdl-cell--4-col-phone mdl-cell--2-col-tablet">
  <div className="mdl-card__media">
    <img src={require(`../../images/sprites/${id}.png`)} alt={pokemon.name}/>
  </div>
  <div style="font-weight:bold;font-size:20px;" className="mdl-card__supporting-text">
    {pokemon.name}
  </div>
  <div className="mdl-card__supporting-text">
  Here is some more information about {pokemon.name} product that is only revealed once clicked on.
  </div>
</div>


export default Pokemon;
