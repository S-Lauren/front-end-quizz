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

const initialState: Quiz[] = [];

const quizSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    selectQuiz: (state, action: PayloadAction<Quiz>) => {
      state.push(action.payload);
    },
  },
});

export const { selectQuiz } = quizSlice.actions;

export default quizSlice.reducer;
