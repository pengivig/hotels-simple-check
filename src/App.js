import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import s from './App.module.css'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
	return (
		<div className={s.app}>
			<Routes>
				<Route path='/signIn' element={<LoginPage />} />
				<Route path='/main' element={<MainPage />} />
			</Routes>
		</div>
	)
}

export default App
