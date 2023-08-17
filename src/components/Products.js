import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
	const products = [
		{
			id: 1,
			name: 'Product 1',
			description: 'This is Product 1',
		},
		{
			id: 2,
			name: 'Product 2',
			description: 'This is Product 2',
		},
		{
			id: 3,
			name: 'Product 3',
			description: 'This is Product 3',
		},
		{
			id: 4,
			name: 'Product 4',
			description: 'This is Product 4',
		},
		{
			id: 5,
			name: 'Product 5',
			description: 'This is Product 5',
		},
		{
			id: 6,
			name: 'Product 6',
			description: 'This is Product 6',
		},
	];

	return (
		<div className="products">
			<h2>This is the Products Page</h2>

			{/* <Link to="/products/1">Product 1</Link>
			<Link to="/products/2">Product 2</Link>
			<Link to="/products/3">Product 3</Link>
			<Link to="/products/4">Product 4</Link>
			<Link to="/products/5">Product 5</Link> */}

			{products.map((product) => {
				return (
					<Link key={product.id} to={`/products/${product.id}`}>
						{product.name}
					</Link>
				);
			})}
		</div>
	);
};

export default Products;
