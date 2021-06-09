import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FourOhFour from './pages/404';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Register from './pages/Register';
import Login from './pages/Login';
import UserPosts from './pages/UserPosts';

// import the navbar component
import Navbar from './components/navbar';

const App = () => {
	return (
		<Router>

			<Navbar />

			<Switch>
				{/* render Register Component when we hit /register */}
				<Route exact path='/register'>
					<Register />
				</Route>

				{/* render Login Component when we hit /login */}
				<Route exact path='/login'>
					<Login />
				</Route>

				{/* render Home Component when we hit /home */}
				<Route exact path='/home'>
					<Home />
				</Route>
				{/* render Post Component when we hit /post */}
				<Route exact path='/post'>
					<Posts />
				</Route>
				{/* render UserPost Component when we hit /userpost */}
				<Route exact path='/userposts/:userid'>
					<UserPosts />
				</Route>

				{/* fallback to a 404 if a route is not matched */}
				<Route>
					<FourOhFour />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
