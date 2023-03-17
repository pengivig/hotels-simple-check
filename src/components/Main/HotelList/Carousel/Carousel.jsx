import s from './Carousel.module.css'
import img from '../../../../media/carouselImg1.jpg'
import { useEffect, useRef } from 'react'

const Carousel = () => {
	const count = 3
	const doDeclination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) =>
		txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]

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

	return (
		<div className={s.wrapper}>
			<div ref={ref} className={s.flexbox__wrapper}>
				<div className={s.imgCard}>
					<img src={img} alt='#' />
				</div>
				<div className={s.imgCard}>
					<img src={img} alt='#' />
				</div>
				<div className={s.imgCard}>
					<img src={img} alt='#' />
				</div>
				<div className={s.imgCard}>
					<img src={img} alt='#' />
				</div>
				<div className={s.imgCard}>
					<img src={img} alt='#' />
				</div>
				<div className={s.imgCard}>
					<img src={img} alt='#' />
				</div>
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
