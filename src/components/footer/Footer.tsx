import styles from './footer.module.scss'

function Footer() {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.container}>
				<span>© SaleScout 2023</span>
				<div className={styles.links}>
					<a href="#">Политика конфиденциальности</a>
					<a href="#">Правила использования</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
