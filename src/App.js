import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Routes from './routes';
import LoginButton from './components/LoginButton';
import dragonIcon from './assets/dragon.png';
import Loading from './components/Loading';

const App = () => {
	const { isLoading, isAuthenticated } = useAuth0();

	if (isLoading)
		return (
			<div className='loader'>
				<Loading />
			</div>
		);

	if (!isAuthenticated)
		return (
			<>
				<div className='container'>
					<h1>Welcome</h1>
					<img src={dragonIcon} alt='Icon' height='150' width='150' />

					<div className='divButtons'>
						<h4>Log In to continue:</h4>
						<LoginButton />
					</div>
				</div>
			</>
		);

	return (
		<>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</>
	);
};

export default App;
