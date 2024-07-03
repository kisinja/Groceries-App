import { combineReducers } from 'redux';
import darkModeReducer from './slices/darkModeSlice';

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
});

export default rootReducer;