import s from './HotelListHeader.module.css'

const HotelListHeader = () => {
	const city = 'Москва'
	const date = '07 июля 2020'

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<span className={s.title__span}>Отели</span>
				<svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M1 1.33334L9.66667 10L1 18.6667'
						stroke='#A7A7A7'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
				<span className={s.title__span}>{city}</span>
			</div>
		<span className={s.date}>{date}</span>
		</div>
	)
}


export default HotelListHeader