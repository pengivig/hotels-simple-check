import s from './Input.module.css'

const Input = ({ name, type, text, value, mb, fw }) => {
	return (
		<div style={{ marginBottom: mb}}>
			<span className={s.title} style={{ fontWeight: fw }}>
				{text}
			</span>
			<input name={name} 
						 type={type} 
						 value={value} 
						 className={s.input} />
		</div>
	)
}

export default Input
