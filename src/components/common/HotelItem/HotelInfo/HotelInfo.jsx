import { Rating } from '@mui/material'
import Star from '../../../../media/star/star'
import EmptyStar from '../../../../media/star/emptyStar'
import s from './HotelInfo.module.css'
import Like from '../../../common/Like/Like'
import HouseIcon from '../HouseIcon/HouseIcon'

const HotelItem = () => {
	const value = 3
	const priceValue = 23942
	const price = priceValue.toLocaleString('ru-RU')

	return (
		<div className={s.wrapper}>
			<HouseIcon />
			<div className={s.info__left}>
				<span className={s.title}>Moscow Marriott Grand Hotel</span>
				<div className={s.date}>
					<span className={s.date__info}>7 июля 2020</span>
					<span className={s.date__info}>&mdash;</span>
					<span className={s.date__info}>1 день</span>
				</div>
				<Rating name='read-only' value={value} readOnly icon={<Star />} emptyIcon={<EmptyStar />} />
			</div>
			<div className={s.info__right}>
				<Like mb='22px' />
				<div className={s.price}>
					<span className={s.price__title}>Price:</span>
					<span className={s.price__value}>{price}₽</span>
				</div>
			</div>
		</div>
	)
}

export default HotelItem
