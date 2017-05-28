import React, { Component } from 'react';
import { Container } from 'semantic-ui-react' ;

class TeamBuilder extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : 'Josue'
        }

        this.canvas = null;
    }


    render (){

        return(
        <div>

            <Container>
                <center>
                    <br/>
                    <div ></div>
                    <canvas
                        id="canvas" width={700} height={400} ref={canvasRef => this.canvas = canvasRef}>
                    </canvas>

                </center>

            </Container>

        </div>
        )

    }
}


export default TeamBuilder;
