import { combineReducers } from 'redux';
import favReducer from "./favReducer";
import loaderReducer from './loaderReducer';


export default combineReducers({
    favorites: favReducer,
    loader:loaderReducer
})