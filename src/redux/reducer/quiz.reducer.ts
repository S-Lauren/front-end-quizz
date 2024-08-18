import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type 4 One Quiz
export type Quiz = {
  title: string;
  icon: string;
  questions: Array<{
    question: string;
    options: Array<string>;
    answer: string;
  }>;
};
// type QuizGlobalState will take an array of Quiz
export type QuizState = {
  quizzes: Quiz[];
};

const initialState = { quizzes: [] } as QuizState;

const quizSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    initializeQuizzes: (state, action: PayloadAction<{ quizzes: Quiz[] }>) => {
      console.log;
      state.quizzes = action.payload.quizzes;
    },
    selectQuiz: (state, action: PayloadAction<Quiz>) => {
      console.log("action", state.quizzes);
      state.quizzes.push(action.payload);
    },
  },
});

// this is for dispatch
export const { selectQuiz, initializeQuizzes } = quizSlice.actions;

// this is for configureStore
export default quizSlice.reducer;
