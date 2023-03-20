import axios from 'axios'

const instance = axios.create({})

export const hotelsAPI = {
	async getHotels(location, checkIn, checkOut) {
		if (location && checkIn && checkOut) {
			const response = await instance.get(
				`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
			)
			return response
		}
	},
} 	
