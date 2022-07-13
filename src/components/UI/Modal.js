import React from 'react';
import classes from './Modal.module.css';
import * as ReactDOM from "react-dom";

const Backdrop = (props) => {
	return <div onClick={props.onHideCart} className={classes.backdrop}></div>
};

const ModalOverLay = (props) => {
	return(
		<div>
			<div className={classes.modal}>{props.children}</div>
		</div>
	)
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
			{ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
		</>
	);
}

export default Modal;