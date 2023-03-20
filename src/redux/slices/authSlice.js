import { createSlice } from '@reduxjs/toolkit'

const isAuth = localStorage.getItem('isAuth') !== null ? localStorage.getItem('isAuth') : false

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: isAuth,
	},
	reducers: {
		login: state => {
			state.isAuth = true
			localStorage.setItem('isAuth', state.isAuth)
		},
		logout: state => {
			state.isAuth = false
			localStorage.clear()
		},
	},
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
