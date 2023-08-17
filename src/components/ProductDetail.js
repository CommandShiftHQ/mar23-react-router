import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
	const location = useLocation();
	const { id } = useParams();
	const navigate = useNavigate();

	const clickHandler = () => {
		console.log('before navigating');
		navigate('/products', { replace: true });
	};

	return (
		<div>
			<p>Your location is {location.pathname}</p>
			<p>Product id is {id}</p>
			<button onClick={clickHandler}>Go Back To Products</button>
			<Link to="/products">Back To Products</Link>
		</div>
	);
};

export default ProductDetail;
