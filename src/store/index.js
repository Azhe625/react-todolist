import { createStore, applyMiddleware, compose } from 'redux'
//applyMiddleware 让人能使用这个中间件
import reducer from './reducer'
import thunk from 'redux-thunk'
import TodoSagas from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
    );

const store = createStore(
    reducer,
    enhancer
    )

sagaMiddleware.run(TodoSagas)
export default store;
 