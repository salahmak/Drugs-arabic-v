import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

const CarouselEl = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={false}
                interval={10000}
                className="fullWidth"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://thumbs.dreamstime.com/b/drug-addiction-concept-black-background-death-overdose-to-drugs-money-exit-handcuffs-top-view-flat-lay-121628297.jpg"
                                alt="First slide"
                            />

                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Lightk</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://www.addictioncampuses.com/wp-content/uploads/2015/10/death_overd1-1.jpg"
                                alt="Second slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://www.justthinktwice.gov/sites/justthinktwice.com/files/images/iStock_000020631102_Large.jpg"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselEl;