import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from '@redux-saga/core'
import { hotelsSagaWatcher } from './sagas/hotelsSaga'

import authSlice from './slices/authSlice'
import hotelsSlice from './slices/hotelsSlice';


const saga = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		auth: authSlice,
		hotels: hotelsSlice
	},
	middleware: [saga]
})

saga.run(hotelsSagaWatcher)