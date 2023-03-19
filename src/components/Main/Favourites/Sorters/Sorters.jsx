import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	sortByPriceInAscendingOrder,
	sortByPriceInDescendingOrder,
	sortRatingAsc,
	sortRatingDesc,
} from '../../../../redux/slices/hotelsSlice'
import s from './Sorter.module.css'

const Sorters = () => {
	const [isPriceActive, setIsPriceActive] = useState({
		isActive: false,
		order: null,
	})
	const [isRatingActive, setIsRatingActive] = useState({
		isActive: false,
		order: null,
	})

	const dispatch = useDispatch()
	const favs = useSelector(state => state.hotels.favs)

	useEffect(() => {
		if (!favs.length) {
			setIsRatingActive({ ...isRatingActive, isActive: false, order: null })
			setIsPriceActive({ ...isPriceActive, isActive: false, order: null })
		}
	}, [favs.length])

	const sortByRating = () => {
		if (!isRatingActive.isActive && favs.length) {
			setIsRatingActive({ ...isRatingActive, isActive: true, order: 'asc' })
			setIsPriceActive({ ...isPriceActive, isActive: false, order: null })
			dispatch(sortRatingDesc())
		}
		if (isRatingActive.order === 'asc') {
			setIsRatingActive({ ...isRatingActive, order: 'desc' })
			dispatch(sortRatingAsc())
		}
		if (isRatingActive.order === 'desc') {
			setIsRatingActive({ ...isRatingActive, order: 'asc' })
			dispatch(sortRatingDesc())
		}
	}

	const sortByPrice = () => {
		if (!isPriceActive.isActive && favs.length) {
			setIsPriceActive({ ...isPriceActive, isActive: true, order: 'asc' })
			setIsRatingActive({ ...isRatingActive, isActive: false, order: null })
			dispatch(sortByPriceInDescendingOrder())
		}
		if (isPriceActive.order === 'asc') {
			setIsPriceActive({ ...isPriceActive, order: 'desc' })
			dispatch(sortByPriceInAscendingOrder())
		}
		if (isPriceActive.order === 'desc') {
			setIsPriceActive({ ...isPriceActive, order: 'asc' })
			dispatch(sortByPriceInDescendingOrder())
		}
	}

	return (
		<div className={s.wrapper}>
			<div onClick={sortByRating} className={isRatingActive.isActive ? s.sorter__active : s.sorter}>
				<span>Рейтинг</span>
				<div className={s.arrows}>
					<div className={isRatingActive.order === 'asc' ? s.arrowUp__active : s.arrowUp}>
						<svg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z'
								fill='#41522E'
							/>
						</svg>
					</div>
					<div className={isRatingActive.order === 'desc' ? s.arrowDown__active : s.arrowDown}>
						<svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z'
								fill='#41522E'
							/>
						</svg>
					</div>
				</div>
			</div>

			<div onClick={sortByPrice} className={isPriceActive.isActive ? s.sorter__active : s.sorter}>
				<span>Цена</span>
				<div className={s.arrows}>
					<div className={isPriceActive.order === 'asc' ? s.arrowUp__active : s.arrowUp}>
						<svg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z'
								fill='#41522E'
							/>
						</svg>
					</div>
					<div className={isPriceActive.order === 'desc' ? s.arrowDown__active : s.arrowDown}>
						<svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z'
								fill='#41522E'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sorters
