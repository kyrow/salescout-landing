import React from 'react'
import styles from './descriptionBlock.module.scss'
import { Button } from 'antd'

type TProps = {
	icon: any;
	title: string;
	hashtag: string;
	text: string;
	subtext?: string;
	button: string;
};

const DescriptionBlock: React.FC<TProps> = ({ icon, title, hashtag, text, subtext, button }) => {

	return (
		<div className={styles.container}>
			<span className={styles.icon}>{icon}</span>
			<span className={styles.hashtag}>{hashtag}</span>
			<h4 className={styles.title}>{title}</h4>
			<p>{text}</p>
			<p>{subtext}</p>
			<Button className={styles.button} type="link">{button}</Button>
		</div>
	)

}

export default DescriptionBlock
