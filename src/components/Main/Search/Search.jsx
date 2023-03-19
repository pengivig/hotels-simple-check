import Button from '../../common/Button/Button'
import s from './Search.module.css'
import moment from 'moment/moment'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getHotelsPending, setReservationData } from '../../../redux/slices/hotelsSlice'

const Search = () => {
	const [location, setLocation] = useState('Москва')
	const [checkIn, setCheckIn] = useState(moment())
	const [period, setPeriod] = useState(1)
	const checkOut = checkIn.clone().add(period, 'days').format('YYYY-MM-DD')

	const dispatch = useDispatch()

	const submitHandler = e => {
		e.preventDefault()
		const argCheckIn = checkIn.format('YYYY-MM-DD')
		dispatch(
			setReservationData({
				location: location,
				checkIn: argCheckIn,
				checkOut: checkOut,
				period: period
			})
		)
		dispatch(getHotelsPending())
	}

	useEffect(() => {
		if (location && checkIn && checkOut) {
			const argCheckIn = checkIn.format('YYYY-MM-DD')
			dispatch(
				setReservationData({
					location: location,
					checkIn: argCheckIn,
					checkOut: checkOut,
					period: period
				})
			)
			dispatch(getHotelsPending())
		}
	}, [dispatch])

	return (
		<div className={s.wrapper}>
			<form onSubmit={e => submitHandler(e)}>
				<div className={s.input__item}>
					<label className={s.title} />
					Локация
					<input
						name='location'
						type='text'
						value={location}
						onChange={e => setLocation(e.target.value)}
						className={s.input}
					/>
				</div>
				<div className={s.input__item}>
					<label className={s.title} />
					Дата заселения
					<input
						name='date'
						type='date'
						value={checkIn.format('YYYY-MM-DD')}
						onChange={e => setCheckIn(moment(e.target.value))}
						className={s.input}
					/>
				</div>
				<div className={s.input__item}>
					<label className={s.title} />
					Количество дней
					<input
						name='period'
						type='number'
						value={period}
						onChange={e => setPeriod(e.target.value)}
						className={s.input}
					/>
				</div>
				<Button text='Найти' />
			</form>

			{/* <Input 
					name='location' 
					type='text' 
					text='Локация' 
					fw='500' 
					mb='16px' 
					/>
			<Input 
					name='date' 
					type='date' 
					text='Дата заселения' 
					fw='500' 
					mb='20px' 
					/>
			<Input 
					name='period' 
					type='number' 
					text='Количество дней' 
					fw='500' 
					mb='32px' 
					/> */}
		</div>
	)
}

export default Search
