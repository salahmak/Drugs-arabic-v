import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <div className="center-form">
                <form className="form-inline">
                    <input onChange={this.props.searchChange} className="form-control mr-sm-2" type="search" placeholder="البحث" aria-label="Search" />
                </form>
            </div>

        );
    }
}

export default SearchBar;

