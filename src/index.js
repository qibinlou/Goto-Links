import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChromeActions from './actions/ChromeActions';
import GotoLinkService, { LocalKVDB } from './core/GotoLinkService';
import registerServiceWorker from './registerServiceWorker';

const service = new GotoLinkService(new LocalKVDB());
const chrome = window.chrome;
const MaterializedApp = (props) => (
    <MuiThemeProvider>
        <App {...props} />
    </MuiThemeProvider>
);

chrome.omnibox && chrome.omnibox.onInputEntered.addListener((text, disposition) => {
    const url = service.get('go/' + text);
    chrome.tabs.create({ url }, () => { });
});

ChromeActions.getCurrentUrl(url => {
    const defaultState = {
        url,
        service,
    };
    ReactDOM.render(<MaterializedApp {...defaultState} />, document.getElementById('root'));
    registerServiceWorker();
});



