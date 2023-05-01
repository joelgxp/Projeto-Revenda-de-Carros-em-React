import { createStore, applyMiddleware } from 'redux'
import { ReduxThunk } from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

let middlewaare = [ReduxThunk];

export const store = createStore(rootReducer, applyMiddleware(middlewaare));