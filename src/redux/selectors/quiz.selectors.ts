import { createSelector } from "@reduxjs/toolkit";
import { Quiz } from "../reducer/quiz.reducer";

export const selectQuizByTitle = (title?: string) =>
  createSelector([(state: { quizzes: Quiz[] }) => state.quizzes], (quizzes) =>
    quizzes.find((quiz: Quiz) => quiz.title === title)
  );
