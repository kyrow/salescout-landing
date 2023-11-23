
import styles from './feedBack.module.scss'
import FeedbackItem from './feedBackItem/FeedbackItem'

function Feedback() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h3 className={styles.title}>Отзывы наших клиентов</h3>
				<div className={styles.feedbackContainer}>
					<FeedbackItem
						name='Денис'
						text='Наверное будет лучшим отзывом )) Благодаря вам, я купил себе машину! 😅✊🏻✊🏻'
					/>
					<FeedbackItem
						name='Сергей'
						text='Магазин второй открываю. Жду как открою сразу же вам напишу'
					/>
					<FeedbackItem
						name='Амиржан'
						text='Всё замечательно, никаких нарекании нету'
					/>
					<FeedbackItem
						name='Ансар'
						text='Спасибо
						Вы классные
						С таким подходом походу лидерами рынка станете'
					/>
					<FeedbackItem
						name='Асель'
						text='Все отлично благодаря Вам! Все работает, продажи выросли на 10 раз, теперь и отчёт по остаткам можно поставить, это вообще супер 🙌 мозг у меня никогда не отдыхал потому что всегда считала количество на уме :) благодаря вам у меня вырос ассортимент товаров от 150 до 300 👏 Спасибо salescout.me'
					/>

					<FeedbackItem
						name='Актилек'
						text='Все 🔥
						Не успеваю с заказами, спасибо'
					/>
					<FeedbackItem
						name='Наиль'
						text='Очень крутой сервис
						Молодцы ребята'
					/>
				</div>
			</div>
		</div>
	)
}

export default Feedback
