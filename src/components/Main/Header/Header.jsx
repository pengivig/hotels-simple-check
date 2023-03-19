import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import Logout from './Logout/Logout'

const Header = () => {
	return (
		<div className={s.header}>
			<div className={s.title}>
				<h1 className={s.title__text}>Simple Hotel Check</h1>
			</div>
				<Logout />
		</div>
	)
}

export default Header
