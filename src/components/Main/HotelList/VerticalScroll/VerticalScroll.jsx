import HotelItem from '../../../common/HotelItem/HotelItem'
import s from './VerticalScroll.module.css'

const VerticalScroll = () => {
	const hotels = [
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
		'Moscow Marriott Grand Hotel',
	]

	

	return (
		<div className={s.scrollWrapper}>
			{hotels.map(hotel => <HotelItem mb='22px'/>)}
		</div>
	)
}

export default VerticalScroll
