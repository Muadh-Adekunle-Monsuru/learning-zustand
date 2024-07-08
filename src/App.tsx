import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useNameStore } from './store';

function App() {
	const name = useNameStore((state) => state.name);
	const newCount = useNameStore((state) => state.count);
	const increment = useNameStore((state) => state.increment);
	const decrement = useNameStore((state) => state.decrement);
	const setName = useNameStore((state) => state.setName);
	const list = useNameStore((state) => state.list);
	const updateList = useNameStore((state) => state.updateList);
	return (
		<>
			<h1>Vite + React + Zustand</h1>
			<div className='card'>
				<p className='read-the-docs'>Current count is {newCount}</p>
				<button onClick={increment}>increment</button>
				<button onClick={decrement}>decrement</button>
			</div>
			<p className='read-the-docs'>Current Name is {name}</p>
			<p>All names are: {list.join(', ')}</p>
			<input
				placeholder='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => updateList(name)}>Add To List</button>
		</>
	);
}

export default App;
