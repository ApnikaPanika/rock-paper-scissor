import { configureStore } from '@reduxjs/toolkit';
import RpslsDatareducer from '../Slice/InfoSlice';
import ScoreDatareducer from '../Slice/ScoreSlice';

const store = configureStore({
  reducer: {
    RpslsData: RpslsDatareducer,
    ScoreData: ScoreDatareducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
