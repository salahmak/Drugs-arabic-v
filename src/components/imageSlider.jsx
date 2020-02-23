import React, { Component } from 'react'
import ReactCompareImage from 'react-compare-image';


class Slider extends Component {

    render() {
        return (
            <div className="slider-style">
                <ReactCompareImage leftImage={this.props.before} rightImage={this.props.after} />
            </div>

        )
    }
}

export default Slider;