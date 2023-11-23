import { useState } from 'react'
import styles from './UQuestion.module.scss'
import { Button } from 'antd'
import React from 'react'

type TProps = {
	question: string;
	answer: string;
	button?: string;
};

const UQuestion: React.FC<TProps> = ({ question, answer, button }) => {

	const [isOpen, setIsOpen] = useState(false)
	const activeBlock = styles.questionBlock + ' ' + styles.activeQuestionBlock
	const activeButton = styles.button + ' ' + styles.activeButton

	return (

		<div className={isOpen ? activeBlock : styles.questionBlock}>

			<div
				onClick={() => setIsOpen(!isOpen)}
				className={styles.question}>
				<span>{question}</span>
				<button className={isOpen ? activeButton : styles.button}>+</button>
			</div>

			{isOpen &&
				<div className={styles.answer}>
					<span>{answer}</span>
					<Button type="link" className={styles.linkButton}>{button}</Button>
				</div>}

		</div>
	)
}

export default UQuestion
