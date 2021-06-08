import { Link } from 'react-router-dom';

const Card = ({ userId, title, body }) => {
	return (
		<div className='card'>
			<h2 className='title'>{title}</h2>
			<p>{body}</p>
			<Link to={`/userposts/${userId}`}>post by: user {userId}</Link>
		</div>
	);
};

export default Card;
