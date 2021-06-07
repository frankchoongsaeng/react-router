import { useState } from 'react';

const App = () => {
	// create a state to hold the currently active/focused input element
	const [currentlyFocusedInput, setCurrentlyFocusedInput] = useState(null);

	const buttonHandler = (e) => {
		setCurrentlyFocusedInput((currFoc) => {
			let val = currFoc.value + e.target.value;
			currFoc.value = val;
			return currFoc;
		});
		currentlyFocusedInput.focus();
	};

	return (
		<div className='App'>
			<div className='login-form'>
				<h2>Login</h2>
				<input
					type='text'
					placeholder='enter username'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
				<input
					type='text'
					placeholder='enter password'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
			</div>

			<div className='keyboard-container'>
				<div className='key-row'>
					<button value='1' onClick={buttonHandler}>
						1
					</button>
					<button value='2' onClick={buttonHandler}>
						2
					</button>
					<button>3</button>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button>0</button>
				</div>
				<div className='key-row'>
					<button>Q</button>
					<button>W</button>
					<button>E</button>
					<button>R</button>
					<button>T</button>
					<button>Y</button>
					<button>U</button>
					<button>I</button>
					<button>O</button>
					<button>P</button>
				</div>
				<div className='key-row'>
					<button>A</button>
					<button>S</button>
					<button>D</button>
					<button>F</button>
					<button>G</button>
					<button>H</button>
					<button>J</button>
					<button>K</button>
					<button>L</button>
				</div>
				<div className='key-row'>
					<button>Shift</button>
					<button>Z</button>
					<button>X</button>
					<button>C</button>
					<button>V</button>
					<button>B</button>
					<button>N</button>
					<button>M</button>
					<button className='btn-large'>Backspace</button>
				</div>
				<div className='key-row'>
					<button className='btn-full'></button>
				</div>
			</div>
		</div>
	);
};

export default App;
