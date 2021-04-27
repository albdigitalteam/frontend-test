import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'store';
import './index.css';

ReactDOM.render(  
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('root')
);

reportWebVitals();
