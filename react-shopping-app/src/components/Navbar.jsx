import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillMoonFill } from 'react-icons/bs'

import "../assets/styles/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function Navbar({ getCategories, handleDarkMode }) {
    const [show, setShow] = useState(false);


    function handleClose() {
        setShow(false)
    }
    function handleShow() {
        setShow(true)
    }


    return (
        <nav>
            <img src="logo.png" alt="" width="120px" />
            <div>
                <a onClick={(e) => getCategories(e, "men's clothing")} href="">Men</a>
                <a onClick={(e) => getCategories(e, "women's clothing")} href="">Women</a>
                <a onClick={(e) => getCategories(e, "electronics")} href="">Electronics</a>
                <a onClick={(e) => getCategories(e, "jewelery")} href="">Jewelry</a>
            </div>
            <div>
                <i onClick={handleShow}>
                    <AiOutlineShoppingCart />
                </i>
                <i onClick={handleDarkMode}>
                    <BsFillMoonFill />
                </i>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </nav>
    )
}
