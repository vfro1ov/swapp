import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { routerConfig } from '@routes/routerConfig';
import Navbar from '@components/Navbar';
import { REPO_NAME } from '@constants/repo';

import './App.css';

function App() {
	return (
		<>
			<BrowserRouter browsername={`//${REPO_NAME}`}>
				<Navbar />
				<Routes>
					{routerConfig.map((route, index) => (
						<Route key={index} path={route.path} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
