import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import BaseReducer from '../reducers/BaseReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    BaseReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument()))
)