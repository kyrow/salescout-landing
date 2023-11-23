import { Button } from 'antd';
import styles from './burgerMenu.module.scss'

type TProps = {
	status: string | boolean;
}

const BurgerMenu: React.FC<TProps> = ({ status }) => {

	const activeBurgerMenu = styles.burgerMenuContainer + ' ' + styles.active

	return (

		<div className={status == true ? activeBurgerMenu : styles.burgerMenuContainer} >

			<ul>

				<li className={styles.navElement}>Главная</li>
				<li className={styles.navElement}>Аналитика</li>
				<li className={styles.navElement}>Автоцены</li>
				<li className={styles.navElement}>Обучение</li>
				<li className={styles.navElement}>Консультация</li>
				<li>
					<Button className={styles.button} type="primary" value="large">
						Войти
					</Button>
				</li>

			</ul>

		</div>
	)
}

export default BurgerMenu
