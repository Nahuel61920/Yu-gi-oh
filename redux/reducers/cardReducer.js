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
    raceSpell: [],
    raceTrap: [],
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
          : state.cards.filter((cardsFiltered) => {
              return cardsFiltered.race.includes(
                payload
              );
            });
      state.cards = raceCard;
    },
    allCardRacesSpell: (state, { type, payload }) => {
      state.raceSpell = payload;
    },
    filterRacesSpell: (state, { type, payload }) => {
      let raceCard =
        payload === "All"
          ? state.cardsFiltered
          : state.cardsFiltered.filter((cardsFiltered) => {
              return cardsFiltered.race.includes(
                payload
              );
            });
      state.cards = raceCard;
    },
    allCardRacesTrap: (state, { type, payload }) => {
      state.raceTrap = payload;
    },
    filterRacesTrap: (state, { type, payload }) => {
      let raceCard =
        payload === "All"
          ? state.cardsFiltered
          : state.cardsFiltered.filter((cardsFiltered) => {
              return cardsFiltered.race.includes(
                payload
              );
            });
      state.cards = raceCard;
    },
    sortForDef: (state, { type, payload }) => {
      if (payload === "min") {
        state.cards = state.cards.sort((a, b) => a.def - b.def);
      } else {
        state.cards = state.cards.sort((a, b) => b.def - a.def);
      }

      state.cards = state.cards.filter((card) => {
        return card.def > 0;
      });
    },

    sortForAtk: (state, { type, payload }) => {
      if (payload === "min") {
        state.cards = state.cards.sort(
          (a, b) => a.atk - b.atk
        );
      } else {
        state.cards = state.cards.sort(
          (a, b) => b.atk - a.atk
        );
      }

      state.cards = state.cards.filter((card) => {
        return card.atk > 0;
      });
    },

    sortForLevel: (state, { type, payload }) => {
      if (payload === "min") {
        state.cards = state.cards.sort(
          (a, b) => a.level - b.level
        );
      } else {
        state.cards = state.cards.sort(
          (a, b) => b.level - a.level
        );
      }

      state.cards = state.cards.filter((card) => {
        return card.level > 0;
      });
    },
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
    allCardRacesSpell,
    filterRacesSpell,
    allCardRacesTrap,
    filterRacesTrap,
    sortForDef,
    sortForAtk,
    sortForLevel,
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

export const racesSpellCard = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/races/spell`)
    .then((res) => {
      dispatch(allCardRacesSpell(res.data));
    })
    .catch((err) => console.log(err));
};

export const racesSpellFilter = (payload) => (dispatch) => {
  dispatch(filterRacesSpell(payload));
};

export const racesTrapCard = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/races/trap`)
    .then((res) => {
      dispatch(allCardRacesTrap(res.data));
    })
    .catch((err) => console.log(err));
};

export const racesTrapFilter = (payload) => (dispatch) => {
  dispatch(filterRacesTrap(payload));
};

export const sortDef = (payload) => (dispatch) => {
  dispatch(sortForDef(payload));
};

export const sortAtk = (payload) => (dispatch) => {
  dispatch(sortForAtk(payload));
};

export const sortLevel = (payload) => (dispatch) => {
  dispatch(sortForLevel(payload));
};