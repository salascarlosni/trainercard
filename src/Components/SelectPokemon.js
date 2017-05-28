import React, { Component } from 'react';
import { Container ,Button,Input } from 'semantic-ui-react' ;
import './SelectPokemon.css' ;
import Pokemon from './Pokemon.json';


//List of Pokémon

class SelectPokemon extends Component {

    constructor(props) {
        super(props);
        this.insertPokemon = this.insertPokemon.bind(this);

        this.state = {
            //Id Data Setting
            id: 0,
            searchfield: ''
        };
    }



    //Insert Pokemon in the TeamBuilder
    insertPokemon = (id) => {
        //Calling to parent method
        this.props.setPokemon(id);
    }


    //Show the list of Pokémon
    pokemon()
    {
        var string = this.state.searchfield.toLowerCase();

        //Search in the pokemon
        var results = Pokemon.filter(function(pokemon) {
            return pokemon.name.indexOf(string) > -1;
        });

        var indents = [];
        for (var i=0 ; i < results.length ; i++)
        {
            var id = i;
            var pokeid = results[id].id;
            var pokename = results[id].name;
            var pokeclass = "menu-sprite pokemon" + pokeid;

            indents.push(

                <Button key={id} id="circle" title={pokename} onClick={this.insertPokemon.bind(this, pokeid)}>
                    <div className={pokeclass} id={id}  />
                </Button>

                );
        }

        return indents;
    }

    //Update the field search
    search = (e) => {

        this.setState ({
            searchfield : e.target.value
        });

    }

    render()
    {
        return(


                <Container >
                <center>
                    <Input placeholder='Search...' onChange={this.search.bind(this)} />
                    <br/>

                    {this.pokemon()}

                </center>
                </Container>


        )
    }
}

export default SelectPokemon;
