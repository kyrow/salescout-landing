import React from 'react'
import styles from './feedback.module.scss'
import { UserOutlined } from '@ant-design/icons';

type TProps = {
	name: string;
	text: string;
}

const FeedbackItem: React.FC<TProps> = ({ name, text }) => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<UserOutlined style={{ color: '#fff' }} />
			</div>
			<span className={styles.name}>{name}</span>
			<span>{text}</span>
		</div>
	)
}

export default FeedbackItem
