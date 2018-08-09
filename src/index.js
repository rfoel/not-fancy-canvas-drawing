import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

injectGlobal`
    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
