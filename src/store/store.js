import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from './reducers/combineReducers';

const appStore = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)));

export default appStore;