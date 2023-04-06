import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import ThemeProvider from '@context/ThemeProvider';
import store from './store/store';
import '@styles/index.scss';
import App from '@containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
		<ThemeProvider>
			<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
