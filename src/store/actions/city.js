import api from "../../utils/api";
import {
  FETCH_CITY_REJECTED,
  FETCH_CITY_RESOLVED,
  FETCH_CITY_STARTED,
  DELETE_CITY_FROM_RECENTS,
  LOAD_RECENTS,
} from "../reducers/city";

export const fetchCity = (name) => async (dispatch) => {
  dispatch({
    type: FETCH_CITY_STARTED,
  });
  try {
    const data = await api.city.fetch(name);
    dispatch({
      type: FETCH_CITY_RESOLVED,
      payload: data,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: FETCH_CITY_REJECTED,
    });
  }
};

export const deleteRecent = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CITY_FROM_RECENTS,
    payload: id,
  });
};

export const loadRecents = () => (dispatch) => {
  dispatch({
    type: LOAD_RECENTS,
  });
};
