import React from 'react';
import { Modal, Button } from 'react-bootstrap';




function ModalEl(props) {
    const [show, setShow] = React.useState(false);
    return (
        <>
            <div>
                <Button variant="primary" onClick={() => setShow(true)}>
                    تابع القراءة
            </Button>
            </div>



            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div className="rightoleftsh">
                    <Modal.Header closeButton>

                        <Modal.Title id="example-custom-modal-styling-title">
                            {props.title}
                        </Modal.Title>


                    </Modal.Header>
                </div>
                <Modal.Body>
                    <div className="rightoleftsh">
                        <div>
                            <h3>ماهو {props.title} ؟</h3>
                            <div>{props.def}</div>
                        </div>
                        <div>
                            <h3>كيف تتم صناعته ؟</h3>
                            <div>{props.made}</div>
                        </div>
                        <div>
                            <h3>ماهي آثاره ؟</h3>
                            <div>{props.effects}</div>
                        </div>
                    </div>


                    {/* {props.content} */}


                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalEl;