import { useContext } from 'react';
import { AppContext } from './stateprovider';
import { Link, useHistory } from 'react-router-dom';

// import styles
import styles from '../styles/navbar.module.css';

const Navbar = () => {
	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		history.push('/home');
	};

	return (
		<nav className={styles.navbar}>
			<Link className={styles.navlink} to='/home'>
				Home
			</Link>

			<Link className={styles.navlink} to='/posts'>
				Posts
			</Link>

			{!state.isLoggedIn ? (
				<>
					<Link className={styles.navlink} to='/register'>
						Register
					</Link>
					<Link className={styles.navlink} to='/login'>
						Login
					</Link>
				</>
			) : (
				<>
					<Link className={styles.navlink} to='/addpost'>
						Add Post
					</Link>
					<span onClick={logout} className={styles.navlink}>
						Logout
					</span>
				</>
			)}
		</nav>
	);
};

export default Navbar;
