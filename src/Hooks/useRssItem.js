import { useDispatch, useSelector } from 'react-redux';
import { addRssItem } from '../store/rssItem';

export default function useRssItem() {
  let rssItemList = useSelector((state) => state.rssItem);
  let dispatch = useDispatch();

  let addToList = (rssItem) => {
    dispatch(addRssItem(rssItem));
  };

  return {
    rssItemList,
    addToList,
  };
}
