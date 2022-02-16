import './myModal.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from "react";
import { Link } from 'react-router-dom';

const MyModal = ({ addClick }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button id='addtoBag-btn' variant="success" onClick={handleShow}>Add to Bag</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                dialogClassName="modal-90w"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>SUCCESSFULLY ADDED TO BAG!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Nice Choice. This product includes free delivery. Estimated shipping time is 3 days.</p>
                    <Link className="modal-btns mb-1" to="/">
                        <Button className="modal-btns" variant="info" onClick={handleClose} onClick={addClick}>
                            Continue Shopping
                        </Button>
                    </Link>
                    <Link className="modal-btns" to="/shopping-cart">
                    <Button className="modal-btns" variant="dark" onClick={addClick}>Go To Your Cart</Button>
                    </Link>
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default MyModal;