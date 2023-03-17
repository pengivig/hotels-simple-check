import { useState } from 'react'
import HotelItem from '../../common/HotelItem/HotelItem'
import s from './Favourites.module.css'
import Sorter from './Sorter/Sorter'

const Favourites = () => {
	const favs = [
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
	]

	return (
		<div className={s.wrapper}>
			<h2 className={s.title}>Избранное</h2>
			<div className={s.sorters}>
				<Sorter text='Рейтинг' />
				<Sorter text='Цена' />
			</div>
			<div className={s.scrollWrapper}>
				{favs.map(fav => (
					<HotelItem mb='32px' p='16px 0px' display={'none'} />
				))}
			</div>
		</div>
	)
}

export default Favourites
