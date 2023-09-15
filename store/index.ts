import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'

const reducer = {
  cart: cartReducer,
  user: userReducer
}

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

let store = configureStore({ 
  reducer,
});

const makeStore = ({ isServer }: { isServer: Boolean }) => {
  if (isServer) {
    return store = configureStore({ 
      reducer,
    });
  } else {
    const persistConfig = {
      key: "shoppingcart",
      whitelist: ["cart", "user"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    store = configureStore({ 
      reducer: persistedReducer,
    });

    // @ts-ignore:next-line
    store.__persistor = persistStore(store);
    return store;
  }
};

// @ts-ignore:next-line
export const wrapper = createWrapper(makeStore, {debug: true});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch