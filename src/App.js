import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import s from './App.module.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFoundPage'


const PrivateRoute = ({ children }) => {
	const auth = localStorage.getItem('isAuth')
	return auth ? children : <Navigate to='/hotels-simple-check/login' />
}

function App() {
	return (
		<div className={s.app}>
			<Routes >
				<Route path='/hotels-simple-check/*' element={<NotFound />} />
				<Route path='/hotels-simple-check' element={<PrivateRoute><MainPage /></PrivateRoute>} />
				<Route path='/hotels-simple-check/login' element={<LoginPage />} />
			</Routes>
		</div>
	)
}

export default App
