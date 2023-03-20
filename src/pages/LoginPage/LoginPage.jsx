import Login from '../../components/Login/Login'
import s from './LoginPage.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../../redux/slices/authSlice.js'

const LoginPage = () => {
	const isAuth = useSelector(state => state.auth.isAuth)
	const navigate = useNavigate()

		useEffect(() => {
		if(isAuth){
			navigate('/hotels-simple-check')
		}
	}, [isAuth])

	

	return (
		<div className={s.bg}>
			<div className={s.container}>
				<div className={s.content}>
					<h1 className={s.title}>Simple Hotel Check</h1>
					<Login />
				</div>
			</div>
		</div>
	)
}

export default LoginPage
