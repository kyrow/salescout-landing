import styles from './proceBot.module.scss'
import DescriptionBlock from '../UdescriptionBlock/DescriptionBlock'
import { RobotOutlined } from '@ant-design/icons'

function PriceBot() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<DescriptionBlock
					icon={<RobotOutlined style={{ color: '#fff' }} />}
					hashtag='#autoprice'
					title='Бот снижения цен'
					text='Бот автоматический снижает цену Вашего товар на Kaspi.'
					subtext='Вы можете увеличить продажи в 2-5 раз уже сегодня используя этот сервис. Бот анализирует Ваши товары каждые 3 минуты и снижает на 1 тг от конкурента и выводит Вас в топ результаты продавцов.'
					button='Попробовать бесплатно >'
				/>
				<img className={styles.image} src="https://thumb.tildacdn.com/tild3062-6366-4538-b761-383365653066/-/resize/400x/-/format/webp/Frame_205.png" alt="priceBot" />
			</div>
		</div>
	)
}

export default PriceBot
