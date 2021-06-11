import { useContext } from 'react';
import { AppContext } from '../components/stateprovider';
import Card from '../components/card';

const Home = () => {
	const { state } = useContext(AppContext);

	return (
		<div className='grid-4-layout'>
			{state.posts.map(({ id, title, body, userId }) => (
				<Card
					key={id}
					title={title}
					body={body}
					userId={userId}
				/>
			))}
		</div>
	);
};

export default Home;
