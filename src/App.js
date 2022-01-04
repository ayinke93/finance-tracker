import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import './App.css';

// pages
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

function App() {
	const { authIsReady, user } = useAuthContext();

	return (
		<div className='App'>
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={user ? <Home /> : <Navigate to='/login' />}
						/>
						<Route
							path='/login'
							element={!user ? <Login /> : <Navigate to='/' />}
						/>
						<Route
							path='/signup'
							element={!user ? <Signup /> : <Navigate to='/' />}
						/>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
