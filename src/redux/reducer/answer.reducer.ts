import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Answer = {
  answer: string;
  count: number;
};

const initialState: Answer = { answer: "", count: 0 };

const answerSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    addGoodAnswer: (state, action: PayloadAction<Pick<Answer, "count">>) => {
      state.count = action.payload.count + 1;
    },
  },
});

export const { addGoodAnswer } = answerSlice.actions;

export default answerSlice.reducer;
