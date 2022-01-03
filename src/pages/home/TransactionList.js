import styled from 'styled-components';
import { useFirestore } from '../../hooks/useFirestore';

const TransactionList = ({ transactions }) => {
	const { deleteDocument } = useFirestore('transactions');
	return (
		<Transaction>
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className='name'>{transaction.name}</p>
					<p className='amount'> ₦{transaction.amount}</p>
					<button onClick={() => deleteDocument(transaction.id)}>x</button>
				</li>
			))}
		</Transaction>
	);
};

const Transaction = styled.ul`
	li {
		margin: 30px auto;
		border: 1px solid #f2f2f2;
		box-shadow: 3px 3px 5px rgba(50, 50, 50, 0.1);
		padding: 20px;
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		border-left: 4px solid #1f9751;
		@media (max-width: 560px) {
			justify-content: center;
			align-items: center;
			margin-left: 60px;
		}
	}
	.name {
		color: #777;
		font-size: 1.4em;
		@media (max-width: 560px) {
			font-size: 1em;
			margin-right: 60px;
		}
	}
	.amount {
		margin-left: auto;
		margin-right: 40px;
		color: #777;
		font-weight: bold;
		font-size: 1.6em;
		@media (max-width: 560px) {
			font-size: 1em;
		}
	}
	button {
		position: absolute;
		top: 0;
		right: 0;
		background: #ddd;
		color: #777;
		border: none;
		padding: 12px 8px;
		text-align: center;
		line-height: 0;
		font-size: 0.9em;
		cursor: pointer;
	}
`;

export default TransactionList;
