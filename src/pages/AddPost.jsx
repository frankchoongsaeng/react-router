import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddPost() {
	const { register, handleSubmit } = useForm();

	const createPost = ({ title, body, userId }) => {
		// send the newly created post
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit(createPost)}>
				<div className='formgroup'>
					<label htmlFor='title'>Title</label>
					<input id='title' type='text' placeholder='Cool Title' />
				</div>
				<br />
				<div className='formgroup'>
					<label htmlFor='body'>Post Content</label>
					<textarea rows='10' id='body' placeholder='Cool Content' />
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
