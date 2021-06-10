import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../components/stateprovider';

export default function Login() {
	const { setState } = useContext(AppContext);
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const login = ({ email, password }) => {
		// get the users data
		const user = localStorage.getItem(email);

		if (!user) {
			return alert('An account for this email was not found');
		}

		const userdata = JSON.parse(user);
		console.log(userdata);

		if (password !== userdata.password) {
			return alert('email or password was incorrect');
		}

		alert('login successfull');
		setState(prevstate => {
			return {
				...prevstate,
				isLoggedIn: true,
				userId: userdata.userId,
				userEmail: userdata.email,
			};
		});
		history.push('/home');
	};

	return (
		<>
			<form onSubmit={handleSubmit(login)}>
				<div>
					<input
						type='text'
						placeholder='email'
						required
						{...register('email')}
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='password'
						required
						{...register('password')}
					/>
				</div>
				<input type='submit' value='Login' />
			</form>
		</>
	);
}
