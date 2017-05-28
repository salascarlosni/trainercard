import React, { Component } from 'react';
import { Input,Button,Label,Grid,Column,Segment } from 'semantic-ui-react' ;
import './Tabular.css';

class TrainerInfo extends Component {

    constructor(props) {
        super(props);
        this.setData = this.setData.bind(this);

        this.state = {
            //Warning Settings
            nameWarning : false,
            fcWarning : false,

            //Data Settings
            name:'Username',
            friendcode: ''
        };
    }

    //Set Data to the parent Tabular.js for draw in the Canvas Trainer Info
    setData() {
        this.props.parentMethod(this.state.name,this.state.friendcode);
    }

    nameChange = (e) => {
        var nameLetters = e.target.value.length;

        //Validate max length of 8 letters
        if (nameLetters < 12)
            this.setState({ nameWarning : false , name: e.target.value });
        else
            this.setState({ nameWarning: true });
    }

    codeChange = (e) => {
        var codeLetters = e.target.value.length;

        //Validate if are 12 numbers of 3DS friendcode or 0 = Not 3DS Console
        if (codeLetters === 0)
            this.setState ({ fcWarning : false, friendcode : e.target.value});

        else if (codeLetters === 12) {
            var fcGet = e.target.value;
            var fc = fcGet.substr(0,4) + '-' + fcGet.substr (4,4) + '-' + fcGet.substr(8,4) ;
            this.setState ({ fcWarning : false , friendcode : fc});
        }

        else {
            this.setState ({fcWarning : true});
        }

    }

    nameAlert() {
        return (
            <h1>
                <Label basic color='red' poin ting>The username max length is of 12 letters.</Label>
            </h1>
        )
    }

    fcAlert(){
        return (
            <Label basic color='red' poin ting>Please enter 12 Number of your 3DS Friendcode, or leave Empty.</Label>
        )
    }

    render(){
        return(
            <Grid stackable columns='equal'>
                <Grid.Column>
                    <Segment id="segment">
                        <h3>Trainer Name </h3>
                        <Input onChange={this.nameChange} size='large' icon='user' placeholder='Insert your username' />
                        <br/> <br/> { this.state.nameWarning ? this.nameAlert() : null } <br/><br/>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment id="segment">
                        <h3> Friend Code </h3>
                        <Input onChange={this.codeChange} ref="fc" size='large' icon='barcode' placeholder='FC Code' />
                        <br/> <br/> { this.state.fcWarning ? this.fcAlert() : null } <br/><br/>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment id="segment">
                        <h3> Submit </h3>
                        <Button id="insert" onClick={this.setData}  secondary>Insert</Button>
                        <br/><br/>
                    </Segment>
                </Grid.Column>
            </Grid>

        )
    }
}

export default TrainerInfo;
