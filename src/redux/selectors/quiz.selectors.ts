import { createSelector } from "@reduxjs/toolkit";
import { Quiz, QuizState } from "../reducer/quiz.reducer";

type Selector<S> = (state: QuizState) => S;

export const currentQuiz = (title?: string): Selector<Quiz | undefined> =>
  createSelector([(state: QuizState) => state.quizzes], ({ quizzes }: any) =>
    quizzes.find((q: Quiz) => q.title === title)
  );
