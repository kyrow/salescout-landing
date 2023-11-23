import React from 'react'
import styles from './product.module.scss'
import { Space } from 'antd'
import DescriptionBlock from '../UdescriptionBlock/DescriptionBlock';
import { PieChartOutlined } from '@ant-design/icons';

const Products: React.FC = () => {

	const size = 30;

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Space direction="vertical" size={size} style={{ display: 'flex' }}>
					<h3>Наши продукты</h3>
					<h4 className={styles.subTitle}>Каждый наш сервис - направлен для предпринимателей, <br /> которые хотят зарабатывать больше</h4>
					<div className={styles.analyticsBlock}>

						<img className={styles.image} src="https://thumb.tildacdn.com/tild3866-6666-4539-b630-396463616638/-/resize/872x/-/format/webp/iPad_Pro_129_-_Space.png" alt="analytics" />

						<DescriptionBlock
							icon={<PieChartOutlined style={{ color: '#fff' }} />}
							title='Аналитика товаров в real-time'
							text='Сервис для аналитики свыше 4,7 млн товаров на Kaspi.'
							hashtag='#analytics'
							subtext='Вы можете найти товар, на котором сможете начать зарабатывать уже сегодня, отталкиваясь от спроса, количества и суммы продаж этого товара.'
							button='Подробнее >'
						/>

					</div>
				</Space>
			</div>
		</div>
	)
}

export default Products
