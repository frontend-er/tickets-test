import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import history from 'utils/history';
import reducers from './reducers';



const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

function configureStore() {
  let composeEnhancers = compose;

    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware,
    promiseMiddleware,
  ];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, {}, composeEnhancers(...enhancers));
  const persistor = persistStore(store);

  return { store, persistor };
}

const { store, persistor } = configureStore();

export type RootState = ReturnType<typeof rootReducer>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = typeof store.dispatch | any;

export { persistor, store };
