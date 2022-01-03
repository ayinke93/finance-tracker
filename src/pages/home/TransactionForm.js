import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useFirestore } from '../../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const { addDocument, response } = useFirestore('transactions');

	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({
			uid,
			name,
			amount,
		});
	};

	// reset form fields
	useEffect(() => {
		if (response.success) {
			setName('');
			setAmount('');
		}
	}, [response.success]);

	return (
		<Sidebar>
			<h3>Add a Transaction</h3>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Transaction name:</span>
					<input
						type='text'
						required
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
				<label>
					<span>Amount(₦):</span>
					<input
						type='number'
						required
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
					/>
				</label>
				<button>Add Transaction</button>
			</form>
		</Sidebar>
	);
};

const Sidebar = styled.div`
	padding-left: 30px;

	@media (max-width: 560px) {
		padding-left: 10px;
	}

	form {
		padding: 20px;
		background: #1f9751;
		border-radius: 10px;
	}
	input {
		display: block;
		width: 100%;
		padding: 10px;
		margin-top: 8px;
		box-sizing: border-box;
		border: 0;
		border-radius: 4px;
		color: #555;
		font-size: 16px;
		/* @media (max-width: 560px) {
			max-width: 100%;
		} */
	}
	label {
		margin: 0 auto 20px;
		display: block;
		color: #fff;
	}
	button {
		color: #fff;
		border: 2px solid #fff;
		padding: 6px 12px;
		background-color: transparent;
		font-size: 16px;
		border-radius: 4px;
		cursor: pointer;
		display: block;
		width: 100%;
	}
	h3 {
		color: #1f9751;
		margin-bottom: 20px;
		@media (max-width: 560px) {
			margin-left: 0px;
		}
	}
	aside {
		margin-top: 40px;
		color: #555;
	}

	aside li {
		margin: 10px;
	}
`;

export default TransactionForm;
