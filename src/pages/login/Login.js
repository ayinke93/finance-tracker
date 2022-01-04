import { useState } from 'react';
import styled from 'styled-components';
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isPending } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<Container>
			<LoginForm onSubmit={handleSubmit}>
				<h2>Login</h2>
				<label>
					<span>Email:</span>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				{!isPending && <button>Login</button>}
				{isPending && <button disabled>loading</button>}
				{error && <p>{error}</p>}
				<div>
					don't have an account yet? <Link to='/signup'>signup</Link>
				</div>
			</LoginForm>
		</Container>
	);
};

const Container = styled.div`
	background-image: radial-gradient(
		circle farthest-corner at 10% 20%,
		rgba(14, 174, 87, 1) 0%,
		rgba(12, 116, 117, 1) 90%
	);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginForm = styled.form`
	max-width: 300px;
	margin: 60px auto;
	padding: 20px;
	background: #f1f1f1;
	border-radius: 20px;
	h2 {
		margin-bottom: 20px;
		text-align: center;
	}
	label {
		margin: 30px 0;
	}

	span {
		&:before {
			top: -20%;
			color: #adadad;
			text-decoration: none;
			color: #333;
			margin-top: 50px;
		}
	}

	input {
		padding: 0px 5px;
		font-size: 16px;
		border: none;
		width: 100%;
		outline: none;
		background: none;
		height: 40px;
		border-bottom: 2px solid #adadad;
	}

	button {
		background: none;
		border: 2px solid #1f9751;
		padding: 6px 12px;
		border-radius: 4px;
		color: #1f9751;
		font-weight: bold;
		cursor: pointer;
		font-size: #fff;
		margin-bottom: 10px;
		margin-top: 20px;
		&:hover {
			background: #1f9751;
			color: #fff;
		}
	}
	a {
		text-decoration: none;
		font-weight: bold;
		cursor: pointer;
		color: #1f9751;
	}
`;

export default Login;
