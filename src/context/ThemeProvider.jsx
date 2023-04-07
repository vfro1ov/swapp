import React, { useContext, useState } from 'react';
import {changeCssVariables} from '@services/changeCssVariables'

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
	const [theme, setTheme] = useState(null);

	const change = (name) => {
		setTheme(name);
		changeCssVariables(name)
	};
	return (
		<ThemeContext.Provider
			value={{
				theme,
				change,
			}}
			{...props}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
