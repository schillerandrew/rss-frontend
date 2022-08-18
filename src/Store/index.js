import { configureStore } from '@reduxjs/toolkit';
import rssItemReducer from './rssItem';

export default function createStore() {
  return configureStore({
    reducer: {
      rssItems: rssItemReducer,
    },
  });
}
