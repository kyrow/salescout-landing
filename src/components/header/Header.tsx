import { MenuOutlined } from '@ant-design/icons';
import styles from './header.module.scss'
import { Button } from 'antd';
import { useState } from 'react';
import BurgerMenu from './burgerMenu/BurgerMenu';

export default function Header() {

	const [active, setActive] = useState(false)
	const activeElement = styles.active + ' ' + styles.navElement

	return (
		<header className={styles.wrapper}>
			<div className={styles.container}>
				<span className={styles.logo}>SaleScout</span>
				<ul className={styles.navigation}>
					<li className={activeElement}>Главная</li>
					<li className={styles.navElement}>Аналитика</li>
					<li className={styles.navElement}>Автоцены</li>
					<li className={styles.navElement}>Обучение</li>
					<li className={styles.navElement}>Консультация</li>
				</ul>
				<Button className={styles.button} type="primary" value="large">
					Войти
				</Button>
				<MenuOutlined className={styles.burgerMenuButton} onClick={() => { setActive(!active) }} />
				<BurgerMenu status={active} />
			</div>
		</header>
	)
}
