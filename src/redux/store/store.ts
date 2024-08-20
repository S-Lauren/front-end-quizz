import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "../reducer/quiz.reducer";
import answerReducer from "../reducer/answer.reducer";

const reducer = {
  reducer: {
    quizzes: quizReducer,
    answerReducer,
  },
};

export const store = configureStore(reducer);
export type TStore = ReturnType<typeof store.getState>;
export default store;
