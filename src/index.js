import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Playfair+Display');

	html, body, #root {
		width: 100%;
		height: 100%;
		margin: 0;
		font-family: 'Playfair Display', serif;
	}
`;

ReactDOM.render(<App />, document.getElementById('root'));
