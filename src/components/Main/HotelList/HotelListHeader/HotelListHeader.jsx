import moment from 'moment'
import { useSelector } from 'react-redux'
import s from './HotelListHeader.module.css'
import 'moment/locale/ru'

const HotelListHeader = () => {
	const { location, checkIn } = useSelector(state => state.hotels.reservationData)
	moment.locale('ru')
	const date = moment(checkIn).format('DD MMMM YYYY')
	

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<span className={s.title__span}>Отели</span>
				<svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M1 1.33334L9.66667 10L1 18.6667'
						stroke='#A7A7A7'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
				<span className={s.title__span}>{location}</span>
			</div>
			<span className={s.date}>{date}</span>
		</div>
	)
}

export default HotelListHeader
