import { createSlice, configureStore } from "@reduxjs/toolkit";
import getApiData from "../Fetch/ApiFetch";

const filmsState = { films: [], loadingStatus: "" };

const filmsSlice = createSlice({
  name: "films",
  initialState: filmsState,
  reducers: {
    filmsUpdate(state, value) {
      console.log(value, "value here");
      if (value.payload) {
        state.films = value.payload;
      } else {
        console.log(value, "skip");
        state.films = [];
      }
    },

    statusUpdate(state, value) {
      state.loadingStatus = value.payload;
    },
  },
});

const store = configureStore({
  reducer: { films: filmsSlice.reducer },
});

export const sentCartData = (query) => {
  return async (dispatch) => {
    dispatch(statusUpdate("loading"));

    const response = await getApiData(query);
    const result = await response.json();

    if (result.Response === "False") {
      dispatch(statusUpdate("fail"));
    } else {
      dispatch(statusUpdate(""));
    }
    dispatch(filmsUpdate(result.Search));
  };
};

export const { filmsUpdate, statusUpdate } = filmsSlice.actions;

export default store;
