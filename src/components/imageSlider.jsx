import React, { Component } from 'react'
import ReactCompareImage from 'react-compare-image';

import imgbefore from './before.jpg'
import imgafter from './after.jpg'

class Slider extends Component {
    state = {
        before: imgbefore,
        after: imgafter,
        color: '#ffffff'
    }
    render() {
        return (
            <ReactCompareImage leftImage={this.state.before} rightImage={this.state.after} slideLineColor={this.state.color} />
        )
    }
}

export default Slider;