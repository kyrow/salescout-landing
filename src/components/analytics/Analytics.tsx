import { InfoOutlined, BookOutlined, CalculatorOutlined } from '@ant-design/icons'
import UBenefit from '../UBenefit/UBenefit'
import UStage from '../UStageBlock/UStage'
import styles from './analytics.module.scss'

function Analytics() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.top}>
					<UStage
						title='1. Аналитика товаровв real-time'
						subtitle='Просматривайте свыше 3,5 млн товаров на Kaspi, найдите самый высокомаржинальный и зарабатывайте уже сегодня'
						button='Узнать подробнее'
					/>
					<div></div>
				</div>

				<div className={styles.bottom}>
					<h4 className={styles.bottomTitle}>В чём ценность этой аналитики?</h4>
					<div className={styles.bottomElements}>
						<UBenefit
							icon={<InfoOutlined />}
							title='Информация'
							text='Показана конкурентная информация о продавцах, количестве и объёмах продажах на каждый товар для принятия обоснованных решений.'
						/>

						<div className={styles.line}></div>

						<UBenefit
							icon={<BookOutlined />}
							title='История данных'
							text='Вы можете найти товары, которые начинают взрывать рынок или наоборот.'
						/>
						<div className={styles.line}></div>

						<UBenefit
							icon={<CalculatorOutlined />}
							title='Калькулятор'
							text='Калькулятор помогает посчитать маржу товара, учитывая все комиссии Kaspi и логистику.'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Analytics
