import React from 'react'
import styles from './uStage.module.scss'
import { Button, Space } from 'antd'

type TProps = {
	title: string;
	subtitle: string;
	button: string;
};

const UStage: React.FC<TProps> = ({ title, subtitle, button }) => {

	return (
		<div className={styles.container}>
			<Space direction='vertical' size={20}>
				<h3 className={styles.title}>{title}</h3>
				<span className={styles.subtitle}>{subtitle}</span>
				<Button className={styles.button} type="primary">{button}</Button>
			</Space>
		</div>
	)

}

export default UStage
