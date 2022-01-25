import ReactDOM from 'react-dom';
import Routes from './routes';
import { StrictMode } from "react";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/rootReducer';
const store = createStore(rootReducer)
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
   <Provider store={store}>
    <Routes/>
    </Provider>
  </StrictMode>,
  rootElement
);
