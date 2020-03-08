import React, { Component } from 'react';
import ModalEl from './modal.jsx'

class Card extends Component {

    render() {
        return (
            <>
                <div className="card m-5" style={{ width: '18rem' }}>
                    <img src={this.props.img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div className="card-text">{this.props.desc}</div>
                        <ModalEl
                            title={this.props.title}
                            content={this.props.content}
                            def={this.props.def}
                            made={this.props.made}
                            effects={this.props.effects}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Card;