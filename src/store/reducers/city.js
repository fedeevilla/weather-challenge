import * as R from "ramda";

export const FETCH_CITY_STARTED = "FETCH_CITY_STARTED";
export const FETCH_CITY_RESOLVED = "FETCH_CITY_RESOLVED";
export const FETCH_CITY_REJECTED = "FETCH_CITY_REJECTED";
export const DELETE_CITY_FROM_RECENTS = "DELETE_CITY_FROM_RECENTS";
export const LOAD_RECENTS = "LOAD_RECENTS";

const initialState = {
  recents: [],
  selected: null,
  loading: false,
};

export const city = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case LOAD_RECENTS:
      return {
        ...state,
        recents: JSON.parse(localStorage.getItem("recents")) || [],
      };
    case FETCH_CITY_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CITY_RESOLVED:
      const exists = R.find(R.propEq("id", payload.id), state.recents);
      const recents = R.take(
        5,
        exists ? state.recents : [payload, ...state.recents]
      );
      localStorage.setItem("recents", JSON.stringify(recents));

      return {
        ...state,
        selected: payload,
        loading: false,
        recents,
      };
    case FETCH_CITY_REJECTED:
      return {
        ...state,
        selected: null,
        loading: false,
      };
    case DELETE_CITY_FROM_RECENTS:
      const recent = state.recents.filter((recent) => recent.id !== payload);
      localStorage.setItem("recents", JSON.stringify(recent));
      return {
        ...state,
        recents: recent,
      };
    default:
      return state;
  }
};
