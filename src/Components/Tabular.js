import React, { Component } from 'react';
import { Menu,Container} from 'semantic-ui-react';
import SelectPokemon from './SelectPokemon.js';
import TrainerInfo from './TrainerInfo.js';
import TeamBuilder from './TeamBuilder.js';
import Template from './Template.js';
import './Tabular.css';

class Tabular extends Component {


    constructor(props) {
        super(props);

        // Save the popup state
        this.state = {
            //Data Settings
            name:'Username',
            friendcode: '',
            template : 0,

            //Slots pokemon1
            slot1 : true,
            slot2 : false,
            slot3 : false,
            slot4 : false,
            slot5 : false,
            slot6 : false,

            //Pokemon Choosen
            pokemon1 : 0,
            pokemon2 : 0,
            pokemon3 : 0,
            pokemon4 : 0,
            pokemon5 : 0,
            pokemon6 : 0,


            //Render Settings
            activeItem : 'Template',
            renderTrainer: false, // Initially set it
            renderPokemon: false,
            renderTemplate: true
        };

        //Function to Childs
        this.setData = this.setData.bind(this);
        this.setPokemon = this.setPokemon.bind(this);
        this.setTemplate = this.setTemplate.bind(this);

    }

    componentDidMount(){
        //Default Canvas
        this.updateCanvas();
    }

    state = {}

    //Menu Option Select
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })

        //Render the options
        if (name === 'Template') {
            this.setState ({
                renderTrainer : false,
                renderPokemon : false,
                renderTemplate : true
            })
        }
        else if (name === 'Trainer') {
            this.setState ({
                renderPokemon : false,
                renderTemplate : false,
                renderTrainer : true
            })
        }
        else if (name === 'Pokemon') {
            this.setState ({
                renderTemplate : false,
                renderTrainer : false,
                renderPokemon : true
            })

        }
        //Pokemon Picks
        else if (name === 'PKMN 1' ) {
            this.setState ({
                slot1 : true,
                slot2 : false,
                slot3 : false,
                slot4 : false,
                slot5 : false,
                slot6 : false
            })
        }

        else if (name === 'PKMN 2' ) {
            this.setState ({
                slot2 : true,
                slot1 : false,
                slot3 : false,
                slot4 : false,
                slot5 : false,
                slot6 : false
            })
        }

        else if (name === 'PKMN 3' ) {
            this.setState ({
                slot3 : true,
                slot2 : false,
                slot1 : false,
                slot4 : false,
                slot5 : false,
                slot6 : false
            })
        }

        else if (name === 'PKMN 4' ) {
            this.setState ({
                slot4 : true,
                slot2 : false,
                slot3 : false,
                slot1 : false,
                slot5 : false,
                slot6 : false
            })
        }

        else if (name === 'PKMN 5' ) {
            this.setState ({
                slot5 : true,
                slot2 : false,
                slot3 : false,
                slot4 : false,
                slot1 : false,
                slot6 : false
            })
        }

        else if (name === 'PKMN 6' ) {
            this.setState ({
                slot6 : true,
                slot2 : false,
                slot3 : false,
                slot4 : false,
                slot5 : false,
                slot1 : false
            })
        }
    }

    //Menu bar from Pokemon 1-6
    Pokemon() {
        const { activeItem } = this.state

        return(
            <div>
                <Menu inverted widths={6}>
                    <Menu.Item name='PKMN 1' active={activeItem === 'PKMN 1'} onClick={this.handleItemClick} />
                    <Menu.Item name='PKMN 2' active={activeItem === 'PKMN 2'} onClick={this.handleItemClick} />
                    <Menu.Item name='PKMN 3' active={activeItem === 'PKMN 3'} onClick={this.handleItemClick} />
                    <Menu.Item name='PKMN 4' active={activeItem === 'PKMN 4'} onClick={this.handleItemClick} />
                    <Menu.Item name='PKMN 5' active={activeItem === 'PKMN 5'} onClick={this.handleItemClick} />
                    <Menu.Item name='PKMN 6' active={activeItem === 'PKMN 6'} onClick={this.handleItemClick} />
                </Menu>

                <SelectPokemon setPokemon={this.setPokemon}/>
            </div>
        )
    }

    //The Trainer Information
    Trainer() {
        return(
            <div>
                <TrainerInfo parentMethod={this.setData} />

            </div>
        )
    }

    //The Template Gallery
    Template() {
        return(
            <div>
                <Template selectTemplate={this.setTemplate} />
            </div>
        )
    }


    /*
        Functions to
        Update canvas
        Pictures and
        Data
    */

    //Update the canvas when the state change
    updateCanvas() {
        //Call Child Canvas from TeamBuilder.js
        const ctx = this.childCanvas.canvas.getContext('2d');
        ctx.clearRect(0,0, 700, 400);

        var images = [4];


        var imagesLoaded = 0;

        for(var i=0; i < 3; i++){
            /*jshint loopfunc: true */
            images[i] = new Image();

            // eslint-disable-next-line
            images[i].onload = () =>{
                imagesLoaded++;
                if(imagesLoaded > 2){

                    //Array of states

                    var pokemonList = [6];
                    pokemonList[0] = this.state.pokemon1;
                    pokemonList[1] = this.state.pokemon2;
                    pokemonList[2] = this.state.pokemon3;
                    pokemonList[3] = this.state.pokemon4;
                    pokemonList[4] = this.state.pokemon5;
                    pokemonList[5] = this.state.pokemon6;


                    //Searching pkmn in the Spritesheet
                    var imgX = [6];
                    var imgY = [6];

                    //Pokemon Coordinates in the canvas
                    var CordX = [6];
                    var CordY = [6];

                    CordX[0] = 300;
                    CordY[0] = 88;

                    CordX[1] = 436;
                    CordY[1] = 88;

                    CordX[2] = 582;
                    CordY[2] = 88;

                    CordX[3] = 300;
                    CordY[3] = 218;

                    CordX[4] = 436;
                    CordY[4] = 218;

                    CordX[5] = 582;
                    CordY[5] = 218;

                    //Coordinates

                    for (var i = 0 ; i<6 ; i++)
                    {
                        if (pokemonList[i] < 30) {
                            imgX[i] = (100 * (pokemonList[i]) ) ;
                            imgY[i] = 0;
                        }
                        else if (pokemonList[i] >=30 && pokemonList[i] <60 ) {
                            imgX[i] = (100 * (pokemonList[i] - 30) ) ;
                            imgY[i] = 100;
                        }
                        else if (pokemonList[i] >=60 && pokemonList[i] <90 ) {
                            imgX[i] = (100 * (pokemonList[i] - 60) ) ;
                            imgY[i] = 200;
                        }
                        else if (pokemonList[i] >=90 && pokemonList[i] <120 ) {
                            imgX[i] = (100 * (pokemonList[i] - 90) ) ;
                            imgY[i] = 300;
                        }
                        else if (pokemonList[i] >=120 && pokemonList[i] <150 ) {
                            imgX[i] = (100 * (pokemonList[i] - 120) ) ;
                            imgY[i] = 400;
                        }
                        else if (pokemonList[i] >=150 && pokemonList[i] <180 ) {
                            imgX[i] = (100 * (pokemonList[i] - 150) ) ;
                            imgY[i] = 500;
                        }
                        else if (pokemonList[i] >=180 && pokemonList[i] <210 ) {
                            imgX[i] = (100 * (pokemonList[i] -180) ) ;
                            imgY[i] = 600;
                        }
                        else if (pokemonList[i] >=210 && pokemonList[i] <240 ) {
                            imgX[i] = (100 * (pokemonList[i] - 210) ) ;
                            imgY[i] = 700;
                        }
                        else if (pokemonList[i] >=240 && pokemonList[i] <270 ) {
                            imgX[i] = (100 * (pokemonList[i] - 240) ) ;
                            imgY[i] = 800;
                        }
                        else if (pokemonList[i] >=270 && pokemonList[i] <300 ) {
                            imgX[i] = (100 * (pokemonList[i] - 270) ) ;
                            imgY[i] = 900;
                        }
                        else if (pokemonList[i] >=270 && pokemonList[i] <300 ) {
                            imgX[i] = (100 * (pokemonList[i] - 270) ) ;
                            imgY[i] = 900;
                        }
                        else if (pokemonList[i] >=300 && pokemonList[i] <330 ) {
                            imgX[i] = (100 * (pokemonList[i] - 300) ) ;
                            imgY[i] = 1000;
                        }
                        else if (pokemonList[i] >=330 && pokemonList[i] <360 ) {
                            imgX[i] = (100 * (pokemonList[i] -330) ) ;
                            imgY[i] = 1100;
                        }
                        else if (pokemonList[i] >=360 && pokemonList[i] <390 ) {
                            imgX[i] = (100 * (pokemonList[i] - 360) ) ;
                            imgY[i] = 1200;
                        }
                        else if (pokemonList[i] >=390 && pokemonList[i] <420 ) {
                            imgX[i] = (100 * (pokemonList[i] - 390) ) ;
                            imgY[i] = 1300;
                        }
                        else if (pokemonList[i] >=420 && pokemonList[i] <450 ) {
                            imgX[i] = (100 * (pokemonList[i] - 420) ) ;
                            imgY[i] = 1400;
                        }
                        else if (pokemonList[i] >=450 && pokemonList[i] <480 ) {
                            imgX[i] = (100 * (pokemonList[i] - 450) ) ;
                            imgY[i] = 1500;
                        }
                        else if (pokemonList[i] >=480 && pokemonList[i] <510 ) {
                            imgX[i] = (100 * (pokemonList[i] - 480) ) ;
                            imgY[i] = 1600;
                        }
                        else if (pokemonList[i] >=510 && pokemonList[i] <540 ) {
                            imgX[i]= (100 * (pokemonList[i] - 510) ) ;
                            imgY[i] = 1700;
                        }
                        else if (pokemonList[i] >=540 && pokemonList[i] <570 ) {
                            imgX[i] = (100 * (pokemonList[i] - 540) ) ;
                            imgY[i] = 1800;
                        }
                        else if (pokemonList[i] >=570 && pokemonList[i] <600 ) {
                            imgX[i] = (100 * (pokemonList[i] - 570) ) ;
                            imgY[i] = 1900;
                        }
                        else if (pokemonList[i] >=600 && pokemonList[i] <630 ) {
                            imgX[i] = (100 * (pokemonList[i] - 600) ) ;
                            imgY[i] = 2000;
                        }
                        else if (pokemonList[i] >=630 && pokemonList[i] <660 ) {
                            imgX[i] = (100 * (pokemonList[i] - 630) ) ;
                            imgY[i] = 2100;
                        }
                        else if (pokemonList[i] >=660 && pokemonList[i] <690 ) {
                            imgX[i] = (100 * (pokemonList[i] - 660) ) ;
                            imgY[i] = 2200;
                        }
                        else if (pokemonList[i] >=690 && pokemonList[i] <720 ) {
                            imgX[i] = (100 * (pokemonList[i] - 690) ) ;
                            imgY[i] = 2300;
                        }
                        else if (pokemonList[i] >=720 && pokemonList[i] <750 ) {
                            imgX[i] = (100 * (pokemonList[i] - 720) ) ;
                            imgY[i] = 2400;
                        }
                        else if (pokemonList[i] >=750 && pokemonList[i] <780 ) {
                            imgX[i] = (100 * (pokemonList[i] - 750) ) ;
                            imgY[i] = 2500;
                        }
                        else if (pokemonList[i] >=780 && pokemonList[i] <810 ) {
                            imgX[i] = (100 * (pokemonList[i] - 780) ) ;
                            imgY[i] = 2600;
                        }
                        else if (pokemonList[i] >=810 && pokemonList[i] <840 ) {
                            imgX[i] = (100 * (pokemonList[i] - 810) ) ;
                            imgY[i] = 2700;
                        }
                        else if (pokemonList[i] >=840 && pokemonList[i] <870 ) {
                            imgX[i] = (100 * (pokemonList[i] - 840) ) ;
                            imgY[i] = 2800;
                        }
                        else if (pokemonList[i] >=870 && pokemonList[i] <900 ) {
                            imgX[i] = (100 * (pokemonList[i] - 870) ) ;
                            imgY[i] = 2900;
                        }
                        else {
                            imgX[i] = (100 * (pokemonList[i] - 900) ) ;
                            imgY[i] = 3000;
                        }
                    }


                    //Draw Canvas
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowColor = "black";
                    ctx.drawImage(images[1], 0, 0, 700, 400);
                    ctx.drawImage(images[0],0,0,700,400);


                    for (i=0; i<6 ; i++)
                    {
                        ctx.shadowOffsetX = 3;
                        ctx.shadowOffsetY = 3;
                        ctx.shadowColor = "black";
                        ctx.drawImage(images[2],imgX[i],imgY[i] ,100,100,CordX[i],CordY[i],110,110);

                    }
                    ctx.fillStyle = 'white';
                    ctx.font = '38px Comfortaa';
                    ctx.textBaseline = 'hanging';
                    ctx.textAlign="center";
                    ctx.fillText(this.state.name, 343, 15);
                    ctx.font = '30px Comfortaa';
                    ctx.fillText(this.state.friendcode, 343, 364);

                }
            }
        }

        var bkid = this.state.template;
        var backUrl = "././Pictures/Backgrounds/" + bkid + ".png";

        images[0].src = ('././Pictures/TrainerCard/Marcos.png');
        images[1].src = (backUrl)  ;
        images[2].src = ('././Pictures/Games/artwork.png');


    }

    //Set Trainer Name and FriendCode
    setData(name,fc) {

        this.setState({name: name, friendcode: fc});
        this.updateCanvas();
    }


    //Set The Pokemon Choosen in Canvas
    setPokemon(id) {
        //Render the pokemon from the slot choosen
        if (this.state.slot1 === true) {
            this.setState({pokemon1 : id }, this.updateCanvas())
        }

        if (this.state.slot2 === true) {
            this.setState({pokemon2 : id },this.updateCanvas())
        }

        if (this.state.slot3 === true) {
            this.setState({pokemon3 : id },this.updateCanvas())
        }

        if (this.state.slot4 === true) {
            this.setState({pokemon4 : id },this.updateCanvas())
        }

        if (this.state.slot5 === true) {
            this.setState({pokemon5 : id },this.updateCanvas())
        }

        if (this.state.slot6 === true) {
            this.setState({pokemon6 : id },this.updateCanvas())
        }

    }
    setTemplate(id){
        //this.setState({template : id },this.updateCanvas())
        this.setState({template: id}, () => {
            this.updateCanvas();
        });
    }

    download() {
        const ctx = this.childCanvas.canvas;

        var img = ctx.toDataURL("image/png");

        var d = document.getElementById("download");
        d.href = img;
    }


    render(){
        const { activeItem } = this.state

        return (
        <div>

            <TeamBuilder ref={(ip) => this.childCanvas = ip}/>


            <Container>
            <center>
                <a id="download" content='Download' href=""  download="TrainerCard.png" onClick={this.download.bind(this)} > Download </a>
            </center>


            <Menu color='blue' fluid widths={3}>
                <Menu.Item name='Template' active={activeItem === 'Template'} onClick={this.handleItemClick} />
                <Menu.Item name='Trainer' active={activeItem === 'Trainer'} onClick={this.handleItemClick} />
                <Menu.Item name='Pokemon' active={activeItem === 'Pokemon'} onClick={this.handleItemClick} />

            </Menu>

        { this.state.renderPokemon ? this.Pokemon() : null }
        { this.state.renderTrainer ? this.Trainer() : null }
        { this.state.renderTemplate ? this.Template() : null }

        </Container>
        </div>
        )
    }
}

export default Tabular;
