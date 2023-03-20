import Button from '../common/Button/Button'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import s from './Login.module.css'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'

const Login = () => {
	const dispatch = useDispatch()
	

	const onSubmit = () => {
		dispatch(login())
	}


	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	
	
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} >
				<div className={errors.login ? s.login__incorrect : s.login}>
					<label className={s.title}>Логин</label>
					<input
						className={errors.login ? s.input__incorrect : s.input}
						{...register('login', {
							required: 'Введите email',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Некорректный email',
							},
						})}
					/>
					{errors?.login && <p className={s.error__message}>{errors.login.message}</p>}
				</div>
				<div className={errors.password ? s.password__incorrect : s.password}>
					<label className={s.title}>Пароль</label>
					<input
						type='password'
						className={errors.password ? s.input__incorrect : s.input}
						{...register('password', {
							required: 'Введите пароль',
							pattern: {
								value: /^[A-Za-z0-9]\w{8,}$/,
								message: 'Неверный пароль',
							},
						})}
					/>
					{errors?.password && <p className={s.error__message}>{errors.password.message}</p>}
				</div>
				<Button />
			</form>
		</div>
	)
}

export default Login
