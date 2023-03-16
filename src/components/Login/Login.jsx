import Button from '../common/Button/Button'
import Input from '../common/Input/Input'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	return (
		<div>
			<form>
				<Input text='Логин' type='text' name='email' value={email} mb={'24px'} />
				<Input text='Пароль' type='password' name='password' value={password} mb={'32px'} />
				<NavLink to='/main'>
					<Button text={'Войти'} />
				</NavLink>
			</form>
		</div>
	)
}

export default Login
