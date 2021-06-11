import { createContext, useEffect, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
	posts: [],
};

function reducer(state, action) {
	if (action.type === 'ADD_POST') {
		return {
			...state,
			posts: [action.payload, ...state.posts],
		};
	}
	if (action.type === 'SET_POSTS') {
		return {
			...state,
			posts: action.payload,
		};
	}
	if (action.type === 'LOGIN') {
		return {
			...state,
			isLoggedIn: true,
			...action.payload,
		};
	}
	if (action.type === 'LOGOUT') {
		return {
			...state,
			isLoggedIn: false,
			userEmail: null,
			userId: null,
		};
	}

	return state;
}

export default function StateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(result => {
				return dispatch({
					type: 'SET_POSTS',
					payload: result,
				});
			});
	}, []);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
}
