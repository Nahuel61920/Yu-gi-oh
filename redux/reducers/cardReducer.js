import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    cardsFiltered: [],
  },
  reducers: {
    setCardList: (state, { type, payload }) => {
      state.cards = payload;
      state.cardsFiltered = payload;
    }
  },
});



export const {
    setCardList,
} = cardSlice.actions;

export default cardSlice.reducer;

export const fetchCard = () => (dispatch) => {
  axios
    .get("http://localhost:3001/card")
    .then((res) => {
      dispatch(setCardList(res.data));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};


