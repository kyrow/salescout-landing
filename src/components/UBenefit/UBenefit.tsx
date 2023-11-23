import React from 'react'
import styles from './Ubenefit.module.scss'


type TProps = {
	icon: any;
	title: string;
	text: string;

};

const UBenefit: React.FC<TProps> = ({ title, text, icon }) => {

	return (
		<div className={styles.container}>

			<div className={styles.icon}>{icon}</div>
			<span className={styles.title}>{title}</span>
			<span className={styles.text}>{text}</span>

		</div>
	)

}

export default UBenefit
