import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_RSSITEM = 'ADD_RSSITEM';
const SET_RSSITEM = 'SET_RSSITEM';

// creating actions
export const addRssItem = createAction(ADD_RSSITEM);
export const setRssItem = createAction(SET_RSSITEM);

export const getRssItems = () => async (dispatch, getState) => {
  let res = await axios.get(
    `http://localhost:3001/feeds?url=${payload.rssFeedUrl}`,
  );
  dispatch(setRssItem(res.data));
};

// create reducer
const rssItemReducer = createReducer(
  {
    list: [],
  },
  {
    [ADD_RSSITEM]: (state, action) => {
      // console.log('this worked', action.payload)

      return {
        list: [...state.list, action.payload],
      };
    },
    [SET_RSSITEM]: (state, action) => ({
      list: action.payload,
    }),
  },
);

export default rssItemReducer;
