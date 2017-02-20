//Setting up Pokemon as a functional stateless component
import React from 'react';

const Pokemon = ({id, pokemon}) =>
<div className="col s12 m4 l6">
  <div className="card z-depth-2 hoverable">
    <div className="card-image waves-effect waves-light">
      <img className="activator" src={require(`../../images/sprites/${id}.png`)}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{pokemon.name}<i className="tiny material-icons right">more_vert</i></span>
      <p><a href="#">Link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{pokemon.name}<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
</div>


export default Pokemon;
