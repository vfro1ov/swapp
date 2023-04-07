import { useTheme } from '@context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_SPACE } from '@constants/theme';
import './ChangeTheme.css';

const ChangeTheme = () => {
	const isTheme = useTheme();
	return (
		<div>
			{isTheme.theme}
			<button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
			<button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
			<button onClick={() => isTheme.change(THEME_SPACE)}>SPACE</button>
		</div>
	);
};

export default ChangeTheme;
