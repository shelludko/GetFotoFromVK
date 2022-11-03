import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="app">
                <App />
            </div>
        </Provider>
    </React.StrictMode>
);

registerServiceWorker();