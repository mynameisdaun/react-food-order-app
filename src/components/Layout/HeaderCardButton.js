import React, {useContext, useEffect, useState} from 'react';
import classes from './HeaderCardButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCardButton = props => {
	const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
	const cartContext = useContext(CartContext);

	const {items} = cartContext;

	const numberOfCartItems = items.reduce((curNumber, item)=>{
		return curNumber + item.amount;
	},0);

	const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

	useEffect(() => {
		if(items.length ===0) {
			return;
		}
		setBtnIsHighLighted(true);
		const timer = setTimeout(()=>{
			setBtnIsHighLighted(false);
		},300);
		return () => clearTimeout(timer);
	}, [items]);

	return (
		<button onClick={props.onShowCart} className={btnClasses}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCardButton;