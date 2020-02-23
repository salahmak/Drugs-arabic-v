import React, { Component } from 'react';
import Card from './card.jsx'
import Data from './data.js';
import SearchBar from './searchBar.jsx'


class CardsList extends Component {
    state = {
        content: Data,
        searchField: ''
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }


    render() {

        const filteredCards = Data.filter(card => {
            return card.type.toLowerCase().includes(this.state.searchField.toLowerCase())
        })


        return (
            <>
                <SearchBar key={12569} searchChange={this.onSearchChange} />
                <div className="card-list d-flex justify-content-center flex-wrap">

                    {
                        filteredCards.map((e, i) => {
                            return (


                                <Card key={i}
                                    title={filteredCards[i].type}
                                    content={filteredCards[i].text}
                                    desc={filteredCards[i].desc}
                                    img={filteredCards[i].img}
                                    def={filteredCards[i].text.def}
                                    made={filteredCards[i].text.howMade}
                                    effects={filteredCards[i].text.effects}
                                />


                            )
                        })

                    }
                </div>
            </>
        );
    }
}

export default CardsList;



/* title={this.props.content[i].type}
content={this.props.content[i].text}
desc={this.props.content[i].desc}
img={this.props.content[i].img}
def={this.props.content[i].text.def}
made={this.props.content[i].text.howMade}
effects={this.props.content[i].text.effects} */