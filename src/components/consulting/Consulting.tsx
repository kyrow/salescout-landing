import styles from './consulting.module.scss'
import DescriptionBlock from '../UdescriptionBlock/DescriptionBlock'
import { CommentOutlined } from '@ant-design/icons'

function Consulting() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<DescriptionBlock
					icon={<CommentOutlined style={{ color: '#fff' }} />}
					hashtag='#consulting'
					title='Консультация'
					text='Мы ответим на любые вопросы, связанные с работой наших сервисов и маркетплейсами.'
					button='Связаться >'
				/>
			</div>
			<div className={styles.blank}></div>
			<div className={styles.consultingFooter}>
				<span>
					//
				</span>
				<span>
					Познакомься поближе
				</span>
			</div>
		</div>
	)
}

export default Consulting
