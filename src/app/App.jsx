// src/app/App.jsx
import { Outlet } from 'react-router-dom';
import { navLinks } from './navLinks';

// import { AnimatePresence } from 'framer-motion';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import './App.css';

const App = () => {
	return (
		<>
			<Navbar navLinks={ navLinks } />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
