import React, {Component} from 'react';
// import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Resources extends Component {
    constructor(props){
        super(props)
        this.state= {
            games:  [
            {
                id: 0,
                name: "Texas Hold Em",
                rules: "https://www.instructables.com/Learn-To-Play-Poker---Texas-Hold-Em-aka-Texas-Ho/"
            },
            {
                id: 0,
                name:"Pot Limit Omaha",
                rules: "https://www.pokernews.com/poker-rules/omaha-poker.htm"
            },
            {
                id: 0,
                name: "Seven Card Stud",
                rules: "https://bicyclecards.com/how-to-play/seven-card-stud-poker/"
            },
            ],
            photos:   [
            {
                id:0,
                image: "assets/images/anonymous.jpeg",
                info: "phone number for anyone fighting gambling addiction"
            },
            ],
        };
    }
    render()  {
        const resources= this.state.games.map(game=> {
            return(
                <div id="rules" className="container">
                    <div>
                        <h2>{game.name}</h2>
                        <br/>
                        <h6><a className="text-success" target="_blank" href={game.rules}>See Game Rules</a></h6>
                    </div>
                </div>
            );
        });
        const pics= this.state.photos.map(pic=> {
            return(
                <div>
                    <img height="200px" src={pic.image} alt={pic.info}/>
                </div>
            );
        });
        return (
            <>   
               {/* <div className="container-fluid"> */}
                    <div className="row middle">
                        <div className="col-sm-4">
                            {resources}
                        </div>
                        <div className="col-sm-4">
                            {pics}
                        </div>
                    </div>
                {/* </div> */}
            </>
            );
    }
};

export default Resources; 