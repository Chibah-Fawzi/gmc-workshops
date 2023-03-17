import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";

const store = configureStore({ reducer: movieReducer });

export default store;
