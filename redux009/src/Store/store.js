import ProductReducers from "./ProductReducers";
import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import EmployeeReducers from "./EmployeeReducers";

const rootReducers = combineReducers({
    product:ProductReducers,
    employee : EmployeeReducers
});

const store =  createStore(rootReducers,applyMiddleware(thunk));
export default store;