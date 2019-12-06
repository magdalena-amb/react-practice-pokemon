import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.scss';

export default class Pokedex extends Component {

    render() {
        
        const {pokemons, exp, isWinner} = this.props;
        const pokedex = pokemons.map((p)=> (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ));
        let title;   
        if (isWinner) {
            title = <h1 className="Pokedex-winner">Winner!</h1>
        } else {
            title = <h1 className="Pokedex-looser">You loose!</h1>
        }

        return (
            <div className="Pokedex">
                { title }
                <h4>Total Experience: {exp} </h4>
                <div className='Pokedex-cards'>
                    {pokedex}
                </div>
               
            </div>
        );
    }
}