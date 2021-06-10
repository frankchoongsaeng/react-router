import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { AppContext } from '../components/stateprovider';

export default function AddPost() {
	const { register, handleSubmit } = useForm();
	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();

	const createPost = ({ title, body }) => {
		const data = {
			title: title,
			body: body,
			userId: state.userId,
		};

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(result => {
				dispatch({ type: 'ADD_POST', payload: result });
				history.push('/home');
			});
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit(createPost)}>
				<div className='formgroup'>
					<label htmlFor='title'>Title</label>
					<input
						id='title'
						type='text'
						placeholder='Cool Title'
						{...register('title')}
					/>
				</div>
				<br />
				<div className='formgroup'>
					<label htmlFor='body'>Post Content</label>
					<textarea
						rows='10'
						id='body'
						placeholder='Cool Content'
						{...register('body')}
					/>
				</div>
				<br />
				<div>
					<button className='btn-primary' type='submit'>
						Create Post
					</button>
				</div>
			</form>
		</div>
	);
}
