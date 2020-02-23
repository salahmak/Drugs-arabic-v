import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Tab from './components/tab.jsx'


class App extends Component {





  render() {



    return (
      <React.Fragment>
        <Header searchChange={this.onSearchChange} />
        <Tab />
      </React.Fragment>

    );
  }
}

export default App;