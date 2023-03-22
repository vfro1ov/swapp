import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { routerConfig } from '@routes/routerConfig';
import Navbar from '@components/Navbar';
import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
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
