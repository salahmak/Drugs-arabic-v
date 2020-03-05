import React, { Component } from 'react';
import Card2 from './Card2.jsx'
import Data2 from './Data2.jsx';


class CardsList2 extends Component {




    render() {




        return (
            <>

                <div className="card-columns d-flex justify-content-center flex-wrap">

                    {
                        Data2.map((e, i) => {
                            return (


                                <Card2 key={i}
                                    title={Data2[i].title}
                                    img={Data2[i].img}
                                    desk={Data2[i].desk}
                                    story={Data2[i].story}

                                />


                            )
                        })

                    }
                </div>
            </>
        );
    }
}

export default CardsList2;



