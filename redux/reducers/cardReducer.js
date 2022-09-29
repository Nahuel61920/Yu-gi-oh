import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    cardsFiltered: [],
    preview: [],
  },
  reducers: {
    setCardList: (state, { type, payload }) => {
      state.cards = payload;
      state.cardsFiltered = payload;
    },

    selectCardPrev: (state, { type, payload }) => {
      state.preview = payload;
      console.log(state.preview)
    }
  },
});


export const {
    setCardList,
    selectCardPrev
} = cardSlice.actions;

export default cardSlice.reducer;

export const fetchCard = () => (dispatch) => {
  axios
    .get("http://localhost:3001/card")
    .then((res) => {
      dispatch(setCardList(res.data));
    })
    .catch((err) => console.log(err));
};

export const selectCard = (id) =>  (dispatch) => {
  dispatch(selectCardPrev(id));
}


