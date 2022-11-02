import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://yu-gi-oh-app.onrender.com" || "http://localhost:3001";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    cardsFiltered: [],
    preview: [],
    details: [],
    types: [],
    raceMons: [],
    raceSpell: [],
    raceTrap: [],
    deck: [],
  },
  reducers: {
    setCardList: (state, { type, payload }) => {
      state.cards = payload;
      state.cardsFiltered = payload;
    },

    selectCardPrev: (state, { type, payload }) => {
      state.preview = payload;
    },
    cardDetail: (state, { type, payload }) => {
      state.details = payload;
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
      if (payload === "minDef") {
        state.cards = state.cards.sort((a, b) => a.def - b.def);
      } else {
        state.cards = state.cards.sort((a, b) => b.def - a.def);
      }

      state.cards = state.cards.filter((card) => {
        return card.def > 0;
      });
    },

    sortForAtk: (state, { type, payload }) => {
      if (payload === "minAtk") {
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
      if (payload === "minLevel") {
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
    addDeck: (state, { type, payload }) => {
      state.deck = [...state.deck, payload];
    },
    removeDeck: (state, { type, payload }) => {//remover el primer elemento que encuetre
      const find = state.deck.findIndex((card) => card.id === payload);
      state.deck.splice(find, 1);
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
    cardDetail,
    addDeck,
    removeDeck,
} = cardSlice.actions;

export default cardSlice.reducer;

export const fetchCard = () => (dispatch) => {
  axios
    .get("/card")
    .then((res) => {
      dispatch(setCardList(res.data));
    })
    .catch((err) => console.log(err));
};

export const selectCard = (id) =>  (dispatch) => {
  dispatch(selectCardPrev(id));
}

export const fetchDetail = (id) => (dispatch) => {
  axios
    .get(`/card/${id}`)
    .then((res) => {
      dispatch(cardDetail(res.data));
    })
    .catch((err) => console.log(err));
};


export const cleanState = () => (dispatch) => {
  dispatch(cardDetail([]));
  dispatch(selectCardPrev([]));
};

export const searchName = (name) => (dispatch) => {
  try {
    dispatch(nameCard(name));
  } catch (error) {
    console.log(error);
  }
};

export const typesCard = (id) => (dispatch) => {
  axios
    .get(`/types`)
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
    .get(`/races/monster`)
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
    .get(`/races/spell`)
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
    .get(`/races/trap`)
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

export const addDecks = (payload) => (dispatch) => {
  dispatch(addDeck(payload));
}

export const removeDecks = (payload) => (dispatch) => {
  dispatch(removeDeck(payload));
  console.log("payload", payload);
}