import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialRootState = {cake:{}, users:{}}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store