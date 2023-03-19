import { useDispatch, useSelector } from 'react-redux'
import HotelItem from '../../common/HotelItem/HotelItem'
import s from './Favourites.module.css'
import Sorters from './Sorters/Sorters'

const Favourites = () => {
	const favs = useSelector(state => state.hotels.favs)
	const { checkIn, period } = useSelector(state => state.hotels.reservationData)
	


	return (
		<div className={s.wrapper}>
			<h2 className={s.title}>Избранное</h2>
			<div className={s.sorters}>
				<Sorters />
			</div>
			<div className={s.scrollWrapper}>
				{favs.map(hotel => hotel.isFav && (
					<HotelItem
						mb='32px'
						p='16px 0px'
						maxWidth='180px'
						display={'none'}
						key={hotel.hotelId}
						id={hotel.hotelId}
						name={hotel.hotelName}
						price={hotel.priceAvg}
						rating={hotel.stars}
						checkIn={checkIn}
						period={period}
						isActive={hotel.isFav}
					/>
				))}
			</div>
		</div>
	)
}

export default Favourites
