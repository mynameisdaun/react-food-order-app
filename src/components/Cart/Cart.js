import React, {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
	const cartContext = useContext(CartContext);

	const cartItemRemoveHandler = (id) => {};
	const cartItemAddHandler = (item) => {};

	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
	const hasItems = cartContext.items.length > 0;

	const cartItems = <ul className={classes['cartItems']}>
		{
			cartContext.items.map(item=> (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler(null, item)}
				/>
			))
		}</ul>;
	return (
		<Modal onHideCart={props.onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button onClick={props.onHideCart} className={classes.buttonAlt}>Close</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>);
};

export default Cart;