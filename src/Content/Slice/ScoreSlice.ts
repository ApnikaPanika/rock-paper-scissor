/* eslint-disable no-param-reassign */
// TODO apskatīt eslint problemu
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type payloadType = {
    firstPlayerScore: number,
    secondPlayerScore: number,
}

const initialState = {
  firstPlayerScore: 0,
  secondPlayerScore: 0,
};

export const ScoreData = createSlice({
  name: 'ScoreData',
  initialState,
  reducers: {
    addFirstPlayerScore: (state) => {
      state.firstPlayerScore += 1;
    },

    addSecondPlayerScore: (state) => {
      state.secondPlayerScore += 1;
    },

    setPlayersScoreToZero: (state) => {
      state.firstPlayerScore = 0;
      state.secondPlayerScore = 0;
    },
  },
});

export const { addFirstPlayerScore, addSecondPlayerScore, setPlayersScoreToZero } = ScoreData.actions;
export default ScoreData.reducer;
