import s from './Carousel.module.css'
import { useEffect, useRef } from 'react'

import { doDeclination } from '../doDeclanation'
import { useSelector } from 'react-redux'

const Carousel = () => {

	const count = useSelector(state => state.hotels.favs.length)

	/* ----- Wheel scroll ----- */
	let ref = useRef()

	useEffect(() => {
		const element = ref.current
		if (element) {
			const onWheel = e => {
				e.preventDefault()
				element.scrollTo({
					left: element.scrollLeft + e.deltaY * 4,
					behavior: 'smooth',
				})
			}

			element.addEventListener('wheel', onWheel)
			return () => element.removeEventListener('wheel', onWheel)
		}
	}, [])

	const images = useSelector(state => state.hotels.images)

	return (
		<div className={s.wrapper}>
			<div ref={ref} className={s.flexbox__wrapper}>
				{images.map((img, index) => (
					<div key={index} className={s.imgCard}>
						<img src={img} alt='#' />
					</div>
				))}
			</div>
			<div className={s.favourites}>
				<span className={s.favourites__text}>Добавлено в Избранное:</span>
				<span className={s.favourites__count}>
					<span className={s.number}>{count}</span> {`${doDeclination(count, ['отель', 'отеля', 'отелей'])}`}
				</span>
			</div>
		</div>
	)
}

export default Carousel
