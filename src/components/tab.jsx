import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import CardsList from "./CardsList";
//import CarouselPage from './carousel.jsx'
import Slider from './imageSlider.jsx'
import Pictures from './picData.js'
import Jumbotron from './jumbotron.jsx'

function Tab() {
    const [key, setKey] = React.useState('home');

    return (
        <div className="tab-rtl">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="home" title="الرئيسية">
                    <Jumbotron />

                </Tab>
                <Tab eventKey="cards" title="المخدرات الأكثر شيوعا">
                    <div className="tab-wrapper">
                        <CardsList />
                    </div>

                </Tab>
                <Tab eventKey="contact" title="أحصل على المساعدة">
                    d
                </Tab>
                <Tab eventKey="bfraftr" title="قبل / بعد الادمان">
                    <div className="tab-wrapper1 tab-ltr" >
                        {Pictures.map((e, i) => {
                            return (
                                <Slider
                                    before={Pictures[i].image.before}
                                    after={Pictures[i].image.after}
                                    key={i}
                                />
                            )
                        })}
                    </div>
                </Tab>
            </Tabs>
        </div>

    );
}

export default Tab;