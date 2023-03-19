import s from './Button.module.css'

const Button = ({ text }) => {
	return (
		<div>
			<input type='submit' value={text} className={s.input} />
		</div>
	)
}

export default Button
