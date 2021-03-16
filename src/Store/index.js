import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
const logger = store =>{
    return next => {
        return action => {
            // console.log('[MIDDLEWARE] DISPATHC: ', action)
            const result = next(action)
            // console.log('[MIDDLEWARE] next state: ', store.getState())
            return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)) )

export default store