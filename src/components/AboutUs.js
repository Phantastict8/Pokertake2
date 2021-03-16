import React, { Component } from 'react';

// class Aboutus extends Component {
//     render() {
//         return (
//             <p>Leggo</p>
//         );
//     };
// }

function Aboutus() {
    return (
        <div className="containter" mt-auto>
            <div className="row">
                <div className="col-sm-4">
                    <h1>About Us</h1>
                    <img
                        src="https://previews.123rf.com/images/zdeneksasek/zdeneksasek1909/zdeneksasek190900054/130364596-vector-cartoon-stick-figure-drawing-conceptual-illustration-of-successful-winner-man-or-businessman-.jpg"
                        alt="stick poker dude"
                        height="300px"
                    />
                </div>
                <div className="col-sm-7">
                    <p className="para">
                        If you play poker, whether at these locations or
                        elsewhere, this app is made just for you. If you call
                        yourself a a pro or a rookie it makes no difference; all
                        that matters at the end of the day is profits.
                        <br />
                        <br />
                        <strong> PhantasticPoker</strong> allows you to keep an
                        on going total for wins and losses. It's simple: sign
                        in, log your experience for the day, rinse and repeat.
                        <br />
                        <br /> Just learning the game check out the resources
                        tab for a how to guide on a few different poker games.
                        <br />
                        <br /> Best of luck to all!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
