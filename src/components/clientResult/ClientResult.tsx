import styles from './clientResult.module.scss'

function ClientResult() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>

				<div className={styles.top}>
					<h3 className={styles.topTitle}>Результаты клиентов</h3>
					<p className={styles.topText}>За сегодня наши пользователи получили свыше 8 000 заказов на <br /> сумму 300 000 000 ₸.</p>
				</div>

				<div className={styles.middle}>
					<span>Кейс №1</span>
					<span>До нас / 58 заказов</span>
					<span>После нас / 115 заказов</span>
					<span>х1.9</span>
				</div>

				<div className={styles.bottom}>
					<span>Кейс №2</span>
					<span>До нас / 46 заказов</span>
					<span>После нас / 186 заказов</span>
					<span>х4.0</span>
				</div>

			</div>
		</div>
	)
}

export default ClientResult
