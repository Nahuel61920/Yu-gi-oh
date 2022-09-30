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
    },
    nameCard: (state, { type, payload }) => {
      let searchCard =
        payload === ""
          ? state.cardsFiltered
          : state.cards.filter((cardsFiltered) => {
              return cardsFiltered.name
                .toLowerCase()
                .includes(payload.toLowerCase());
            });
      state.cards = searchCard;
    }
  },
});


export const {
    setCardList,
    selectCardPrev,
    nameCard
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

export const searchName = (name) => (dispatch) => {
  try {
    dispatch(nameCard(name));
  } catch (error) {
    console.log(error);
  }
};


