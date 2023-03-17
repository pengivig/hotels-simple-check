import { useState } from 'react'
import s from './Sorter.module.css'

const Sorter = ({ text }) => {
	return (
		<div className={s.sorter}>
			<span>{text}</span>
			<div className={s.arrows}>
				<div className={s.arrowUp}>
					<svg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z'
							fill='#41522E'
						/>
					</svg>
				</div>
				<div className={s.arrowDown}>
					<svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z'
							fill='#41522E'
							fill-opacity='0.3'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Sorter
