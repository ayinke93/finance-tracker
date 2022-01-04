import styled from 'styled-components';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, SetdisplayName] = useState('');
	const { signup, ispending, error } = useSignup();

	const Navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		signup(email, password, displayName);
		Navigate('/');
	};

	return (
		<Container>
			<Body>
				<div className='title'>
					<h1>Sign up With MyFinance Tracker To Track Your Spending Today!</h1>
				</div>
				<SignupForm onSubmit={handleClick}>
					<h1>Sign up</h1>

					<label>
						<span>Email</span>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</label>

					<label>
						<span>Password</span>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</label>

					<label>
						<span>Display Name</span>
						<input
							type='text'
							onChange={(e) => SetdisplayName(e.target.value)}
							value={displayName}
						/>
					</label>

					{!ispending && <button>Sign up</button>}
					{ispending && <button disabled> loading</button>}
					{error && <p>{error}</p>}
					<div>
						have an account? <Link to='/login'>login</Link>
					</div>
				</SignupForm>
			</Body>
		</Container>
	);
};

const Container = styled.div`
	background-image: radial-gradient(
		circle farthest-corner at 10% 20%,
		rgba(14, 174, 87, 1) 0%,
		rgba(12, 116, 117, 1) 90%
	);

	background-size: cover;
	background-position: fixed;
	max-width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SignupForm = styled.form`
	max-width: 360px;
	background: #f1f1f1;
	height: 480px;
	border-radius: 10px;
	padding: 40px 40px;
	@media (max-width: 560px) {
		padding: 30px 30px;
	}

	h1 {
		text-align: center;
		margin-bottom: 40px;
		@media (max-width: 560px) {
			font-size: 10px;
		}
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
		margin-top: 20px;
		margin-bottom: 10px;
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

const Body = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 600px;
	background: #f1f1f1;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 20px;
	@media (max-width: 560px) {
		flex-direction: column;
		max-width: 360px;
		height: 90vh;
		padding: 20px;
	}
	h1 {
		text-align: center;
		@media (max-width: 560px) {
			font-size: 16px;
		}
	}
`;

export default Signup;
