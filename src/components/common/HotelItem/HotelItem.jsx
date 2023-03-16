import HotelInfo from './HotelInfo/HotelInfo'
import HouseIcon from './HouseIcon/HouseIcon'
import s from './HotelItem.module.css'

const HotelItem = ({heigth}) => {
	return (
		<div className={s.item} style={{height: heigth}}>
			<HotelInfo />
			<HotelInfo />
		</div>
	)
}

export default HotelItem
