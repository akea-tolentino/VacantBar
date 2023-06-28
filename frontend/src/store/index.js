import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import barsReducer from './bars';
import sessionReducer from './session';
import reviewsReducer from './reviews';
import reservationsReducer from './reservations';

const rootReducer = combineReducers({
    session: sessionReducer,
    bars: barsReducer,
    reviews: reviewsReducer,
    reservations: reservationsReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return legacy_createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore