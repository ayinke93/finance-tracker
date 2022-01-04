import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import Logo from '../assets/Logo.png';
import Menu from '../assets/MenuImage.svg';
import { useState, useEffect } from 'react';

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const [showMenu, setShowMenu] = useState(false);
	const [isDesktop, setDesktop] = useState(window.innerWidth > 560);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 560);
	};
	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<>
			<ImageStyle>
				<img src={Logo} alt='logo' />
				{<p>hello, {user.displayName}</p>}
			</ImageStyle>

			<Menubutton
				className='mobile-nav-toggle'
				onClick={() => setShowMenu(!showMenu)}
			>
				<img src={Menu} alt='menu' />
			</Menubutton>

			{showMenu && (
				<Nav>
					<ul>
						{!user && (
							<>
								<li>
									<Link to='/login'>Login</Link>
								</li>
								<li>
									<Link to='/signup'>Signup</Link>
								</li>
							</>
						)}

						{user && (
							<>
								<li className='hello'>hello, {user.displayName}</li>

								<li className='ready'>ready to go? {user.displayName} </li>

								<li>
									<button onClick={logout}>Logout</button>
								</li>
							</>
						)}
					</ul>
				</Nav>
			)}
			{isDesktop && (
				<Nav>
					<ul>
						{!user && (
							<>
								<li>
									<Link to='/login'>Login</Link>
								</li>
								<li>
									<Link to='/signup'>Signup</Link>
								</li>
							</>
						)}

						{user && (
							<>
								<li className='hello'>hello, {user.displayName}</li>
								<li>
									<button onClick={logout}>Logout</button>
								</li>
							</>
						)}
					</ul>
				</Nav>
			)}
		</>
	);
};

const Nav = styled.div`
	width: 100%;
	background: #effaf0;
	padding: 20px 80px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	@media (max-width: 560px) {
		padding: 0;
		margin: 0;
		background: none;
	}

	ul {
		@media (max-width: 560px) {
			position: fixed;
			inset: 0 0 0 30%;
			flex-direction: column;
			padding: min(4vh, 30px) 20px;
			gap: 32px;
			height: 100vh;
			z-index: 1000;
		}
		display: flex;
		max-width: 960px;
		background: hsl(0 0% 100% /0.5);
		position: absolute;
		right: 30px;

		@supports (backdrop-filter: blur(16px)) {
			background: hsl(0 0% 100% /0.1);
			backdrop-filter: blur(16px);
		}
	}

	li {
		list-style-type: none;
		margin-left: 20px;
		@media (max-width: 560px) {
			margin-left: 0px;
		}
	}

	.title {
		margin-right: auto;
		font-weight: bold;
		letter-spacing: 1px;
		font-size: 1.2em;
		@media (max-width: 560px) {
			margin-right: 0;
		}
	}

	button a {
		margin-left: 16px;
		@media (max-width: 560px) {
			margin-left: 0;
		}
	}

	a {
		color: #333;
		text-decoration: none;
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
		margin-left: 20px;

		&:hover {
			background: #1f9751;
			color: #fff;
		}
	}
	.ready {
		display: none;
		@media (max-width: 560px) {
			display: block;
			font-size: 14px;
		}
	}
	.hello {
		margin-top: 3px;
		@media (max-width: 560px) {
			display: none;
		}
	}
	.show {
		transform: translateX(100%);
	}

	.hide {
		transform: translateX(0%);
	}
`;
const ImageStyle = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 3%;
		position: absolute;
		top: 20px;
		margin-left: 30px;
		@media (max-width: 560px) {
			width: 10%;
			margin-top: 10px;
			margin-left: 30px;
		}
	}
	p {
		@media (max-width: 560px) {
			display: inline;
			margin-left: 200px;
			margin-top: 25px;
		}
		display: none;
	}
`;
const Menubutton = styled.button`
	display: none;
	@media (max-width: 560px) {
		display: block;
		position: absolute;
		background: url('../assets/MenuImage.svg');
		width: 16px;
		top: 22px;
		right: 8px;
		z-index: 9999;
		border: 0;
		margin-right: 10px;
	}
`;

export default Navbar;
