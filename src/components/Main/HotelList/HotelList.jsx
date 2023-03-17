import Carousel from './Carousel/Carousel'
import s from './HotelList.module.css'
import HotelListHeader from './HotelListHeader/HotelListHeader'
import VerticalScroll from './VerticalScroll/VerticalScroll'

const HotelList = () => {
	return (
		<div className={s.wrapper}>
			<HotelListHeader />
			<Carousel />
			<VerticalScroll />
		</div>
	)
}

export default HotelList
