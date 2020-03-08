import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import CardsList from "./CardsList";
import CardsList2 from "./CardsList2";
import Slider from './imageSlider.jsx'
import Pictures from './picData.js'
import Jumbotron from './jumbotron.jsx';
import CarouselEl from './carousel.jsx'

function Tab() {
    const [key, setKey] = React.useState('home');

    return (
        <div className="tab-rtl">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="home" title="الرئيسية">
                    <div className="p-2">
                        <Jumbotron className="jumbotron-op" />

                        <div className="tab-ltr">
                            <CarouselEl />
                        </div>

                    </div>


                </Tab>
                <Tab eventKey="stories" title="قصص إدمان">
                    <div className="tab-wrapper">
                        <CardsList2 />
                    </div>
                </Tab>
                <Tab eventKey="bfraftr" title="قبل / بعد الادمان">
                    <div className="tab-wrapper1 tab-ltr" >

                        <div className="sliders-wrapper">
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

                    </div>
                </Tab>
                <Tab eventKey="cards" title="المخدرات الأكثر شيوعا">
                    <div className="tab-wrapper">
                        <CardsList />
                    </div>

                </Tab>
                <Tab className="tab-height" eventKey="contact" title="أحصل على المساعدة">
                    <div className="tab-wrapper"></div>

                </Tab>


            </Tabs>
        </div>

    );
}

export default Tab;