import styles from './questions.module.scss'
import UQuestion from '../UQuestion/UQuestion';

function Questions() {

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>

				<h3 className={styles.title}>Часто задаваемые вопросы</h3>

				<UQuestion
					question='А это безопасно? Магазин не заблокируют?'
					answer='Это безопасно и магазин не заблокируют. Напишите нам и поможем Вам подключиться к тестовому периоду и расскажем о всех нюансах касательно блокировки.'
					button='Написать >'
				/>

				<UQuestion
					question='Мои данные никто не узнает?'
					answer='Мы понимаем вашу заботу о безопасности и конфиденциальности и поэтому все ваши данные шифруем и не передаём третьим сторонам.'
				/>

				<UQuestion
					question='Если мои конкуренты тоже используют Вашу систему?'
					answer='Наша система позволяет сделать гибкие настройки и обойти любого конкурента.'
				/>

			</div>
		</div>
	)
}

export default Questions
