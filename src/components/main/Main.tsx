import { useState } from 'react';
import styles from './main.module.scss'
import { Button, Space } from 'antd';
import MainImage from '@/assets/main.png'

function Main() {

	const [size, setSize] = useState(8);

	return (


		<div className={styles.wrapper}>
			<div className={styles.container}>

				<div className={styles.icons}>
					<img className={styles.icon} src="https://thumb.tildacdn.com/tild6361-6666-4030-b236-346534346166/-/resize/80x/-/format/webp/image_27.png" alt="kaspi" />
					<img className={styles.icon} src="https://static.tildacdn.com/tild3737-6562-4537-b066-643432363736/Group_49.svg" alt="homeBank" />
					<img className={styles.icon} src="https://thumb.tildacdn.com/tild6132-3334-4034-a437-613661396464/-/resize/80x/-/format/webp/image_26.png" alt="jusan" />
				</div>

				<div className={styles.titleBlock}>
					<h1>Сервис аналитики товаров и автоцен на маркетплейсах</h1>
					<h2>Находите высокомаржинальный товар, настройте автообновление цен и зарабатывайте уже сегодня</h2>
				</div>

				<div className={styles.links}>
					<Button type="link">Аналитика</Button>
					<Button type="link">Автоцены</Button>
				</div>

				<img className={styles.image} src={MainImage} alt="mainImage" />

				<Space size={size} />
			</div>

		</div>
	)
}

export default Main
