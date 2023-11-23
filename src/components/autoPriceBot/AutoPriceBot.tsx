import { SyncOutlined, TrophyOutlined, MonitorOutlined } from '@ant-design/icons'
import UBenefit from '../UBenefit/UBenefit'
import UStage from '../UStageBlock/UStage'
import styles from './AutoPriceBot.module.scss'

function AutoPriceBot() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>

				<div className={styles.top}>
					<div></div>
					<UStage
						title='2. Бот автообновления цен'
						subtitle='Увеличьте продажи в 2-5 раз уже сегодня, используя бот автоснижения цены'
						button='Попробовать бесплатно'
					/>
					<span className={styles.space}></span>
				</div>

				<div className={styles.bottom}>
					<span className={styles.bottomTitle}>Как это работает ?</span>
					<div className={styles.bottomElements}>
						<UBenefit
							icon={<MonitorOutlined />}
							title='Проверка цен и товаров'
							text='Бот каждые 3 минуты заходит на Kaspi и проверяет каждый ваш товар.'
						/>

						<div className={styles.line}></div>

						<UBenefit
							icon={<TrophyOutlined />}
							title='Вывод на первое место'
							text='Если Ваш магазин не первый в списке продавцов, то бот смотрит на вашу минимальную цену и, если может, то снижает цену на Kaspi. Как только Kaspi применит новую цену, Вы будете первым среди продавцов.'
						/>

						<div className={styles.line}></div>
						<UBenefit
							icon={<SyncOutlined />}
							title='Автообновление цен'
							text='Если ваши конкуренты поднимут цену, бот тоже автоматически поднимет цену, увеличив маржу и оставив Вас первым.'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AutoPriceBot
