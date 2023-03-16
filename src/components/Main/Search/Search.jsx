import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import s from './Search.module.css'

const Search = () => {
	return (
		<div className={s.wrapper}>
			<Input name='location' type='text' text='Локация' fw='500' mb='16px' />
			<Input name='date' type='date' text='Дата заселения' fw='500' mb='20px' />
			<Input name='days' type='number' text='Количество дней' fw='500' mb='32px' />
			<Button text='Найти' />
		</div>
	)
}

export default Search
