import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "../reducer/quiz.reducer";

const reducer = {
  reducer: {
    quizzes: quizReducer,
  },
};

export const store = configureStore(reducer);
export type TStore = ReturnType<typeof store.getState>;
export default store;
