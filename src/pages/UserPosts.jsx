import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../components/card';


const UserPosts = () => {
	const [userposts, setUserposts] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userid}`)
			.then((response) => response.json())
			.then((result) => {
				setUserposts(result);
			});
	}, [params]);

	return (
		<div>
			{userposts.map(({ title, id, userId, body }) => (
				<Card key={id} title={title} body={body} userId={userId} />
			))}
		</div>
	);
};

export default UserPosts;
