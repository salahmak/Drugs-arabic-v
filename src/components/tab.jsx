import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import CardsList from "./CardsList";
//import CarouselPage from './carousel.jsx'
import Slider from './imageSlider.jsx'


function Tab() {
    const [key, setKey] = React.useState('home');

    return (
        <div className="tab-rtl">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="home" title="الرئيسية">
                    <div className="tab-wrapper tab-ltr">
                        <Slider />
                    </div>

                </Tab>
                <Tab eventKey="cards" title="المخدرات الأكثر شيوعا">
                    <div className="tab-wrapper">
                        <CardsList />
                    </div>

                </Tab>
                <Tab eventKey="contact" title="أحصل على المساعدة">
                    d
            </Tab>
            </Tabs>
        </div>

    );
}

export default Tab;