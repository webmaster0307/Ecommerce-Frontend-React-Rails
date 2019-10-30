import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import categoryReducer from './reducers/categoryReducer'
import subcategoryReducer from './reducers/subcategoryReducer'
import productReducer from './reducers/productReducer'


const reducer = combineReducers ({
    currentUser,
    categoryReducer,
    subcategoryReducer,
    productReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store