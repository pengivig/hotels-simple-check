import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import s from './App.module.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound.Page'

function App() {
	return (
		<div className={s.app}>
			<Routes>
				<Route path='/hotels-simple-check/*' element={<NotFound />} />
				<Route path='/hotels-simple-check/' element={<Navigate to='/hotels-simple-check/signIn'/>} />
				<Route path='/hotels-simple-check/signIn' element={<LoginPage />} />
				<Route path='/hotels-simple-check/main' element={<MainPage />} />
			</Routes>
		</div>
	)
}

export default App
