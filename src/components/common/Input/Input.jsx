import s from './Input.module.css'


const Input = ({ name, type, text, value, mb, fw }) => {

	


	// const onChange = e => {
	// 	if (e.name === 'location') {
	// 		setLocation(e.target.value)
	// 	}
	// 	if (e.name === 'date') {
	// 		setDate(e.target.value)
	// 	}
	// 	if (e.name === 'period') {
	// 		setPeriod(e.target.value)
	// 	}
	// }

	return (
				<div style={{ marginBottom: mb }}>
					<label className={s.title} style={{ fontWeight: fw }} />
					{text}
					<input name={name} type={type} value={value} className={s.input} />
				</div>
	
	)
}

export default Input
