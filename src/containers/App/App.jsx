import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import PeoplePage from '../PeoplePage';
import SpeciesPage from '../SpeciesPage';
import Navbar from '../../components/Navbar';
import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/people" element={<PeoplePage />} />
					<Route path="/species" element={<SpeciesPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
