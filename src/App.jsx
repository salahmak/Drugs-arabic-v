import React, { Component } from "react";
import Tab from './components/tab.jsx';
import FooterEl from './components/footer.jsx'
import Particles from 'react-particles-js';
import params from './components/particles/params.js';


const particlesParams = params;


class App extends Component {





  render() {



    return (
      <>
        <div className="content-page-w">
          <Particles className='particles' params={particlesParams} />
          <Tab />
        </div>

        <FooterEl />



      </>

    );
  }
}

export default App;