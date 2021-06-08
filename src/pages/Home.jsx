import { useEffect, useState } from 'react';
import Card from '../components/card';

const Home = () => {
	let [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				setPosts(result);
			});
	}, []);

	return (
		<div className='App'>
			{posts.map(({ id, title, body, userId }) => (
				<Card key={id} title={title} body={body} userId={userId} />
			))}
		</div>
	);
};

export default Home;
