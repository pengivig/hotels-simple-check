import Login from '../../components/Login/Login'
import s from './LoginPage.module.css'

const LoginPage = () => {
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
