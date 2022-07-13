import React, {useContext} from 'react';
import classes from './HeaderCardButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCardButton = props => {
	const cartContext = useContext(CartContext);

	const numberOfCartItems = cartContext.items.reduce((curNumber, item)=>{
		return curNumber + item.amount;
	},0);

	return (
		<button onClick={props.onShowCart} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCardButton;