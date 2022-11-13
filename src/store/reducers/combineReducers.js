import { combineReducers } from 'redux';
import favReducer from "./favReducer";
import loaderReducer from './loaderReducer';
import moviesReducer from './moviesReducer';


export default combineReducers({
    favorites: favReducer,
    loader:loaderReducer,
    movies:moviesReducer
})