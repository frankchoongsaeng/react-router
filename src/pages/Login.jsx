import { useForm } from 'react-hook-form';


export default function Login() {
	const { register, handleSubmit } = useForm();

	const login = ({ email, password }) => {
		// get the users data
		const user = localStorage.getItem(email);

		

		if (!user) {
			return alert('An account for this email was not found');
		}

		const userdata = JSON.parse(user);
		console.log(userdata);

		if (password !== userdata.password) {
			alert('email or password was incorrect');
		}

		alert('login successfull');
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
