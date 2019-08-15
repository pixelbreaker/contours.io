import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './state'

const sagaMiddleware = createSagaMiddleware()

// applyMiddleware(...[sagas])
const store = createStore(rootReducer, applyMiddleware(...[sagaMiddleware]))

// sagaMiddleware.run(rootSaga)

export { store }
