import styles from './kaspiAdvanced.module.scss'
import DescriptionBlock from '../UdescriptionBlock/DescriptionBlock'
import { ReadOutlined } from '@ant-design/icons'

function KaspiAdvanced() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.blank}></div>
				<DescriptionBlock
					icon={<ReadOutlined style={{ color: '#fff' }} />}
					hashtag='#course'
					title='Курс Kaspi Advanced'
					text='Курс для продвинутых пользователей, кто хочет стабильно работать на Kaspi.'
					subtext='Без блокировок, с лайфхаками управления магазина и по работе с клиентами.'
					button='Пройти курс >'
				/>
			</div>
		</div>
	)
}

export default KaspiAdvanced
