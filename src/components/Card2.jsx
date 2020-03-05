import React, { Component } from 'react';
import ModalEl2 from './modal2.jsx'

class Card2 extends Component {

    render() {
        return (
            <>
                <div className="card m-5" style={{ width: '22rem' }}>
                    <img src={this.props.img} style={{ height: '250px' }} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desk}</p>
                        <ModalEl2
                            name={this.props.title}
                            story={this.props.story}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Card2;