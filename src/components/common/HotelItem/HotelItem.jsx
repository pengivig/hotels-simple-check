import { Rating } from '@mui/material'
import EmptyStar from '../../../media/star/emptyStar'
import Star from '../../../media/star/star'
import Like from '../Like/Like'
import s from './HotelItem.module.css'
import HouseIcon from './HouseIcon/HouseIcon'
import { doDeclination } from '../../Main/HotelList/doDeclanation'

const HotelItem = ({ mb, p, display, maxWidth, name, price, checkIn, period, rating, id, isActive }) => {
	const formattedPrice = Math.floor(price).toLocaleString('ru-RU')

	return (
		<div className={s.wrapper} style={{ padding: p }}>
			<HouseIcon display={display} />
			<div className={s.info__left}>
				<span className={s.title} style={{maxWidth: maxWidth}}>{name}</span>
				<div className={s.date}>
					<span className={s.date__info}>{checkIn}</span>
					<span className={s.date__info}>&mdash;</span>
					<span className={s.date__info}>
						{period} {doDeclination(period, ['день', 'дня', 'дней'])}
					</span>
				</div>
				<Rating name='read-only' value={rating} readOnly icon={<Star />} emptyIcon={<EmptyStar />} />
			</div>
			<div className={s.info__right}>
				<Like mb={mb} id={id} isActive={isActive}/>
				<div className={s.price}>
					<span className={s.price__title}>Price:</span>
					<span className={s.price__value}>{formattedPrice}₽</span>
				</div>
			</div>
		</div>
	)
}

export default HotelItem
