import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { authSlice } from './slices/authSlice';
import { jobSlice } from './slices/jobSlice';
import { recruitingSlice } from './slices/recruitingSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        job: jobSlice.reducer,
        recruiting: recruitingSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
