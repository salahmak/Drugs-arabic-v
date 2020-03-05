import React from 'react';
import { Modal, Button } from 'react-bootstrap';




function ModalEl2(props) {
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
                            {props.name}
                        </Modal.Title>


                    </Modal.Header>
                </div>
                <Modal.Body>
                    <div className="rightoleftsh">
                        <div style={{ fontSize: '17px' }}>
                            {props.story}
                        </div>
                    </div>


                    {/* {props.content} */}


                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalEl2;