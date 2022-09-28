import { configureStore } from "@reduxjs/toolkit";

import card from "./reducers/cardReducer";

export const store = configureStore({
    reducer: {
        card,
    }
});