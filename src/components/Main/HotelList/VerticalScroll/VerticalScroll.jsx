import { useSelector } from 'react-redux'
import HotelItem from '../../../common/HotelItem/HotelItem'
import s from './VerticalScroll.module.css'

const VerticalScroll = () => {
	const hotels = useSelector(state => state.hotels.hotels)
	const { checkIn, period } = useSelector(state => state.hotels.reservationData)
	const isLoading = useSelector(state => state.hotels.isLoading)
	const error = useSelector(state => state.hotels.error)

	return (
		<div className={s.scrollWrapper}>
			{isLoading ? (
				<div className={s.resultText}>
					<span>Loading...</span>
				</div>
			) : !error ? (
				hotels.length ? (
					hotels.map(hotel => (
						<HotelItem
							key={hotel.hotelId}
							name={hotel.hotelName}
							price={hotel.priceAvg}
							rating={hotel.stars}
							id={hotel.hotelId}
							isActive={hotel.isFav}
							checkIn={checkIn}
							period={period}
							mb='22px'
							maxWidth='380px'
						/>
					))
				) : (
					<div className={s.resultText}>
						<span>Ничего не найдено</span>
					</div>
				)
			) : (
				<div className={s.resultText}>
					<span>Ошибка</span>
				</div>
			)}
		</div>
	)
}

export default VerticalScroll
