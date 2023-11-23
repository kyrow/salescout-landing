
import styles from './consultStage.module.scss'
import UStage from '../UStageBlock/UStage'

function ConsultStage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>

				<img
					src="https://thumb.tildacdn.com/tild6135-3236-4232-b236-316161616662/-/cover/648x820/center/center/-/format/webp/21771363_Two_men_are.png"
					alt="education"
					className={styles.image}
				/>

				<UStage
					title='4. Консультация'
					subtitle='Если Вы хотите узнать больше о маркетплейсах или у Вас есть вопросы - мы с радостью Вам ответим!'
					button='Связаться!'
				/>

			</div>
		</div>
	)
}

export default ConsultStage
