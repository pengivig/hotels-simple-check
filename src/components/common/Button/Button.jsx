import s from './Button.module.css'

const Button = ({ text }) => {
	return (
		<div>
			<button className={s.btn}>{text}</button>
		</div>
	)
}

export default Button
