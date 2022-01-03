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
					<span>email:</span>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>password:</span>
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
					don't have an account yet?, <Link to='/signup'>signup</Link>
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
	max-width: 400px;
	margin: 60px auto;
	padding: 20px;
	background: #f1f1f1;
	border-radius: 20px;

	label {
		display: block;
		margin: 30px auto;
	}

	span {
		display: block;
		margin-bottom: 6px;
	}

	input {
		padding: 8px 6px;
		font-size: 16px;
		color: #777;
		width: 100%;
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
		&:hover {
			background: #1f9751;
			color: #fff;
		}
	}
`;

export default Login;
