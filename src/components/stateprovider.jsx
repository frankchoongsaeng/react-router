import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

export default function StateProvider({ children }) {
	const [appData, setAppData] = useState({
		isLoggedIn: false,
		userId: null,
		userEmail: null,
		posts: [],
	});

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(result => {
				console.log(result);
				setAppData(prevValue => {
					return {
						...prevValue,
						posts: result,
					};
				});
			});
	}, []);

	return (
		<AppContext.Provider value={{ state: appData, setState: setAppData }}>
			{children}
		</AppContext.Provider>
	);
}
