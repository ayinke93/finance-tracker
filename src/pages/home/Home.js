import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import { useCollection } from '../../hooks/useCollection';

const Home = () => {
	const { user } = useAuthContext();
	const { document, error } = useCollection(
		'transactions',
		['uid', '==', user.uid],
		['createdAt', 'desc']
	);

	return (
		<Container>
			<Content>
				{error && <p>{error}</p>}
				{document && <TransactionList transactions={document} />}
			</Content>
			<TransactionForm uid={user.uid} />
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	max-width: 960px;
	margin: 60px auto;
	@media (max-width: 560px) {
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		max-width: 100vw;
		overflow-x: hidden;
		margin: 60px auto;
	}
`;

const Content = styled.div`
	padding-right: 30px;
	@media (max-width: 560px) {
		padding-right: 50px;
	}
`;

export default Home;
