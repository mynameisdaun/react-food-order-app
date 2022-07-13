import React from 'react';
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
	return (
		<>
			<header className={classes.header}>
				<h1>Jeong Meals</h1>
				<HeaderCardButton onShowCart={props.onShowCart}/>
			</header>
			<div>
				<img className={classes.mainImage} src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="meal"/>
			</div>
		</>
	);
}

export default Header;
