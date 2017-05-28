import React, { Component } from 'react';
import { Button,Image } from 'semantic-ui-react' ;

class Template extends Component {

    constructor(props) {
        super(props);
        this.selectTemplate = this.selectTemplate.bind(this);
    }

    gallery(){
        var indents = [];
        for (var i=0 ; i < 11 ; i++)
        {
            var id = i;
            var img = "././Pictures/Backgrounds/" + id + ".png";
            indents.push(

                <Button key={id} id="circle" onClick={this.selectTemplate.bind(this, id)}>
                    <img src={img} alt=""  />

                </Button>

                );
        }

        return indents;
    }

    //Insert Pokemon in the TeamBuilder
    selectTemplate(id){
        //Calling to parent method
        this.props.selectTemplate(id);
    }

    render(){
        return(
            <Image.Group size='small'>
                <center>
                    {this.gallery()}
                </center>

            </Image.Group>
        )
    }
}

export default Template;
