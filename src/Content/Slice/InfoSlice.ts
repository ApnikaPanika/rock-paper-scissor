import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { infoToStartGame } from '../../Components/StartingForm/StartingForm';

const initialState = {
  firstPlayerName: '',
  secondPlayerName: '',
  victories: 0,
};

export const RpslsData = createSlice({
  name: 'RpslsData',
  initialState,
  reducers: {
    infoToStart: (state, action:PayloadAction<infoToStartGame>) => (
      action.payload
    ),
  },
});

export const { infoToStart } = RpslsData.actions;
export default RpslsData.reducer;
