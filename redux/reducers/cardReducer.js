import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    cardsFiltered: [],
    preview: [],
    types: [],
    raceMons: [],
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
    },
    allCardTypes: (state, { type, payload }) => {
      state.types = payload;
    },
    filterTypes: (state, { type, payload }) => {
      let typesCard =
        payload === "All"
          ? state.cardsFiltered
          : state.cardsFiltered.filter((cardsFiltered) => {
              return cardsFiltered.type.includes(
                payload
              );
            });
      state.cards = typesCard;
    },
    allCardRacesMonster: (state, { type, payload }) => {
      state.raceMons = payload;
    },
    filterRacesMonster: (state, { type, payload }) => {
      let raceCard =
        payload === "All"
          ? state.cardsFiltered
          : state.cardsFiltered.filter((cardsFiltered) => {
              return cardsFiltered.race.includes(
                payload
              );
            });
      state.cards = raceCard;
    }
  },
});


export const {
    setCardList,
    selectCardPrev,
    nameCard,
    allCardTypes,
    filterTypes,
    allCardRacesMonster,
    filterRacesMonster,
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

export const typesCard = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/types`)
    .then((res) => {
      dispatch(allCardTypes(res.data));
    })
    .catch((err) => console.log(err));
};

export const typesFilter = (payload) => (dispatch) => {
  dispatch(filterTypes(payload));
};

export const racesMonsterCard = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/races/monster`)
    .then((res) => {
      dispatch(allCardRacesMonster(res.data));
    })
    .catch((err) => console.log(err));
};

export const racesMonsterFilter = (payload) => (dispatch) => {
  dispatch(filterRacesMonster(payload));
};
