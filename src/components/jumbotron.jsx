import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur sapien non convallis congue. Ut risus orci.</p>
                <hr className="my-4" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur sapien non convallis congue. Ut risus orci, ultrices vitae augue nec, sagittis consequat libero. Integer nec arcu malesuada, ullamcorper leo vel, placerat nulla. Cras in.</p>
            </div>
        );
    }
}

export default Jumbotron;