import spaceDataReducer from './spaceDataReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    spaceData : spaceDataReducer,
});

export default rootReducer