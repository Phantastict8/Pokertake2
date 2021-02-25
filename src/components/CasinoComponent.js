import React, {Component} from 'react';

    class Casino extends Component {
        constructor(props) {
            super(props);
            this.state= {
                casino: [
                {
                    id: 0,
                    name: 'Bellagio',
                    image: 'assets/images/bellagio.jpg',
                },
                {
                  id: 1,
                  name: 'Aria',
                  image: 'assets/images/aria.jpg',
                },
                {
                    id: 2,
                    name: 'Wynn',
                    image: 'assets/images/wynn.jpg',
                }
            ],
        };  
        }
        render () {
            
                const casino = this.state.casino.map(casino => {
                    return (
                        <div id="casinoBody" className="col">
                            <img height="200px" src={casino.image} alt={casino.name} />
                            <h2>{casino.name}</h2>
                            <select>
                                <option>Game</option>
                                <option>Texas Hold Em</option>
                                <option>Pot Limit Omaha</option>
                                <option>Seven Card Stud</option>
                            </select>
                            <select>
                                <option>Stakes</option>
                                <option>1/2</option>
                                <option>2/5</option>
                                <option>5/10</option>
                            </select>
                            <input type="date"></input>
                            <br />
                            <input type="time"></input><input type="time"></input>
                            <br />
                            <select>
                                <option>Win</option>
                                <option>Loss</option>
                            </select>
                            <input type="number" id="winloss" name="winloss" min="5" max="1000000"></input>
                        </div>
                    );
                });

                return (
                    <div className="container">
                        <div className="row">
                            {casino}
                        </div>
                    </div>
                );
           
        }
    }

export default Casino;