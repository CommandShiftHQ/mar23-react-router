import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ProductDetail from './components/ProductDetail';

const App = () => {
	return (
		<Router>
			<div className="App">
				<h1>React Router</h1>
				<nav className="navbar">
					<ul>
						<NavLink className="navbar-link" to="/">
							Home
						</NavLink>
						<NavLink className="navbar-link" to="products">
							Products
						</NavLink>
						<NavLink className="navbar-link" to="about">
							About
						</NavLink>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<ProductDetail />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<h2>Error! Page not found</h2>} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
