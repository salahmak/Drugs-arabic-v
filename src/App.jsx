import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Tab from './components/tab.jsx';
import FooterEl from './components/footer.jsx'


class App extends Component {





  render() {



    return (
      <div className="d-flex flex-column align-content-between">
        <div>
          <Header searchChange={this.onSearchChange} />
          <Tab />
        </div>

        <FooterEl />
      </div>

    );
  }
}

export default App;