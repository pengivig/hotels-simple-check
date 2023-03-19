import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import img1 from '../../media/carouselImg1.jpg'
import img2 from '../../media/carouselImg2.jpg'
import img3 from '../../media/carouselImg3.jpg'

export const hotelsSlice = createSlice({
	name: 'hotels',
	initialState: {
		hotels: [],
		favs: [],
		reservationData: {
			location: 'Москва',
			checkIn: null,
			checkOut: null,
			period: null,
		},
		images: [img1, img2, img3, img1, img2, img3],
		isLoading: false,
		error: null,
	},
	reducers: {
		setReservationData: (state, action) => {
			state.reservationData.location = action.payload.location
			state.reservationData.checkIn = action.payload.checkIn
			state.reservationData.checkOut = action.payload.checkOut
			state.reservationData.period = action.payload.period
		},
		getHotelsPending: state => {
			state.isLoading = true
			state.error = null
		},
		getHotelsFulfilled: (state, action) => {
			state.hotels = action.payload.map(hotel => ({ ...hotel, isFav: false }))
			state.isLoading = false
			state.error = null
		},
		getHotelsRejected: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		setFavourites: (state, action) => {
			const index = state.hotels.findIndex(hotel => hotel.hotelId === action.payload.hotelId)
			state.hotels[index] = { ...state.hotels[index], isFav: true }
			state.favs = [...state.favs, state.hotels[index]]
		},
		removeFavourites: (state, action) => {
			const index = state.hotels.findIndex(hotel => hotel.hotelId === action.payload.hotelId)
			state.hotels[index] = { ...state.hotels[index], isFav: false }
			state.favs = state.favs.filter(fav => fav.hotelId !== action.payload.hotelId)
		},
		sortByPriceInAscendingOrder: state => {
			state.favs = state.favs.sort(function (a, b) {
				return parseFloat(a.priceAvg) - parseFloat(b.priceAvg)
			})
		},
		sortByPriceInDescendingOrder: state => {
			state.favs = state.favs.sort(function (a, b) {
				return parseFloat(b.priceAvg) - parseFloat(a.priceAvg)
			})
		},
		sortRatingAsc: state => {
			state.favs = state.favs.sort(function (a, b) {
				return parseFloat(a.priceAvg) - parseFloat(b.priceAvg)
			})
		},
		sortRatingDesc: state => {
			state.favs = state.favs.sort(function (a, b) {
				return parseFloat(b.priceAvg) - parseFloat(a.priceAvg)
			})
		},
	},
})

export const location = state => state.location
export const checkIn = state => state.checkIn
export const checkOut = state => state.checkOut

export const {
	setReservationData,
	getHotelsPending,
	getHotelsFulfilled,
	getHotelsRejected,
	setFavourites,
	removeFavourites,
	sortByPriceInAscendingOrder,
	sortByPriceInDescendingOrder,
	sortRatingAsc,
	sortRatingDesc
} = hotelsSlice.actions
export default hotelsSlice.reducer
