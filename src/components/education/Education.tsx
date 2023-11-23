
import styles from './education.module.scss'
import UStage from '../UStageBlock/UStage'

function Education() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<UStage
					title='3. Обучение'
					subtitle='На курсе Вы узнаете, как начать зарабатывать на Kaspi через наши сервисы'
					button='Пройти курс'
				/>
				<img
					src="https://thumb.tildacdn.com/tild3830-3638-4735-b039-323162366366/-/cover/948x532/center/center/-/format/webp/Group_232_2.png"
					alt="education"
					className={styles.image}
				/>
			</div>
		</div>
	)
}

export default Education
