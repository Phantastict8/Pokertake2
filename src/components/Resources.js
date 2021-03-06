import React, {Component} from 'react';
// import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Resources extends Component {
    constructor(props){
        super(props)
        this.state= {
            games:  [
            {
                id: 0,
                name: "Texas Hold Emmmm",
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
                        <h6><a success href={game.rules}>See Game Rules</a></h6>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Policies</a>
                        {/* Need to figure out how to make this a hyper link to the game rules. I was reading somewhere that if u use a hyperlink in react it messes up and you have to refresh everything or something weird. maybe theres an alternative  */}
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
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-5">
                            {resources}
                        </div>
                        <div className="col-sm-5">
                            {pics}
                        </div>
                    </div>
                </div>
            </>
            );
    }
};

export default Resources; 