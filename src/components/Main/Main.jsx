import { useEffect } from 'react'
import Favourites from '../../components/Main/Favourites/Favourites'
import Header from '../../components/Main/Header/Header'
import HotelList from '../../components/Main/HotelList/HotelList'
import Search from '../../components/Main/Search/Search'
import s from './Main.module.css'

const Main = () => {
	

	return (
		<div className={s.bg}>
			<Header />
			<div className={s.container}>
				<div className={s.leftColumn}>
					<Search />
					<Favourites />
				</div>
				<HotelList />
			</div>
		</div>
	)
}

export default Main
