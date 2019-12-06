import React, { Component } from 'react';
import './Pokecard.scss';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

class Pokecard extends Component {
    render() {
        const { name, id, type, exp } = this.props;
        let imgSrc = `${POKE_API}${padToThree(id)}.png`;
        return (
        <div className="Pokecard">
            <h1 className="Pokecard-title">{name}</h1>
            <div className='Pokecard-img'><img src={imgSrc} alt=''/></div>
            <div className="Pokecard-data" >Type: {type}</div>
            <div className="Pokecard-data" >exp: {exp}</div>
        </div>
        );
    }
}

export default Pokecard;