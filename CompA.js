import React, { Component } from 'react';
import CompB from './CompB';


class CompA extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.Random = this.Random.bind(this)
    }
    Random() {
        let random = +Math.random();
        this.setState({
            random: random,
            result: random * 1000
        })
    }

    render() {
        return (
            <div>
                <h1>CompA</h1>
                <CompB {...this.state} Random={this.Random} />
            </div>);
    }
}

export default CompA;