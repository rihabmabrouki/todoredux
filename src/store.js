import {createStore ,combineReducers} from 'redux'
import input from './reducers/input'
import main from './reducers/main'
const store= createStore(combineReducers({
 inputreduce : input,
 mainreduce : main
    
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store