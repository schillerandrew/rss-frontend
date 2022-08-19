import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_RSSITEM = 'ADD_RSSITEM';
const SET_RSSITEM = 'SET_RSSITEM';

// creating actions
export const addRssItem = createAction(ADD_RSSITEM);
export const setRssItem = createAction(SET_RSSITEM);

// let payload = {};

export const getRssItems = (rssFeedUrl) => async (dispatch, getState) => {
  if (rssFeedUrl) {
    console.log('event.rssFeedUrl', rssFeedUrl);
    let res = await axios.get(
      `http://localhost:3001/feeds?url=${rssFeedUrl}`,
    );
    if (res.data) {
      console.log('RES.DATA', res.data);
      dispatch(setRssItem(res.data));
    }
  }
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
      list: [...state.list, ...action.payload],
    }),
  },
);

export default rssItemReducer;
