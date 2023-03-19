import { call, select, takeEvery, put } from 'redux-saga/effects'
import { hotelsAPI } from '../../api/hotelsAPI'
import { getHotelsFulfilled, getHotelsRejected } from '../slices/hotelsSlice'

function* getHotelsWorker() {
	try {
		const { location, checkIn, checkOut } = yield select(state => state.hotels.reservationData)
		const response = yield call(hotelsAPI.getHotels, location, checkIn, checkOut)
		if (response.status === 200) {
			yield put(getHotelsFulfilled(response.data))
		}
	} catch (error) {
		yield put(getHotelsRejected(error))
	}
}

export function* hotelsSagaWatcher() {
	yield takeEvery('hotels/getHotelsPending', getHotelsWorker)
}
