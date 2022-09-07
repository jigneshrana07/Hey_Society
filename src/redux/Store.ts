import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import logger from 'redux-logger';
import SocialAdsSlice from './slices/SocialAdsSlice';

export const store = configureStore({
    reducer: {
        authReducer: AuthSlice,
        socialAdsReducer: SocialAdsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>;