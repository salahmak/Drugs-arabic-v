import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Tab from './components/tab.jsx';
import FooterEl from './components/footer.jsx'


class App extends Component {





  render() {



    return (
      <>

        <Header searchChange={this.onSearchChange} />
        <Tab />


        <FooterEl />
      </>

    );
  }
}

export default App;