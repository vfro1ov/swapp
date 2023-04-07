import { NavLink } from 'react-router-dom';
import { useTheme } from '@context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_SPACE } from '@constants/theme';
import FavoritesNav from '@components/Favorites/FavoritesNav';
import Falcon from './img/falcon.png';
import Saber from './img/saber.png';
import RedSaber from './img/redSaber.png';
import './Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const isTheme = useTheme();
	const [logo, setLogo] = useState();
	useEffect(() => {
		switch (isTheme.theme) {
			case THEME_LIGHT:
				setLogo(Saber);
				break;
			case THEME_DARK:
				setLogo(RedSaber);
				break;
			case THEME_SPACE:
				setLogo(Falcon);
				break;
			default:
				setLogo(Falcon);
		}
	}, [isTheme]);
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/">
						STARWARS FUN
						<div className="logo">
							<img src={logo} alt="logo" />
							{/* <img src="https://cdn-icons-png.flaticon.com/512/86/86572.png" alt="logo" /> */}
						</div>
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item" type="button">
								<NavLink className="nav-link " aria-current="page" to="/people/?page=1">
									People
								</NavLink>
							</li>
							<li className="nav-item active" type="button">
								<NavLink className="nav-link" to="/species/?page=1">
									Species
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/films">
									Films
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/search">
									Search
								</NavLink>
							</li>
						</ul>
						<FavoritesNav />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
