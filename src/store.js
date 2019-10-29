import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import categoryReducer from './reducers/categoryReducer'
import productReducer from './reducers/productReducer'
import subcategoryReducer from './reducers/subcategoryReducer'


const reducer = combineReducers ({
    currentUser,
    categoryReducer,
    productReducer,
    subcategoryReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store