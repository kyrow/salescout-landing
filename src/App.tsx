import { FloatButton } from 'antd'
import './App.css'
import Questions from './components/Q&A/Questions'
import Analytics from './components/analytics/Analytics'
import AutoPriceBot from './components/autoPriceBot/AutoPriceBot'
import ClientResult from './components/clientResult/ClientResult'
import ConsultStage from './components/consultStage/ConsultStage'
import Consulting from './components/consulting/Consulting'
import Education from './components/education/Education'
import Feedback from './components/feedback/Feedback'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import KaspiAdvanced from './components/kaspiAdvanced/KaspiAdvanced'
import Main from './components/main/Main'
import PriceBot from './components/priceBot/PriceBot'
import Products from './components/products/Products'

function App() {

	return (
		<>
			<Header />
			<Main />
			<Products />
			<PriceBot />
			<KaspiAdvanced />
			<Consulting />
			<Analytics />
			<AutoPriceBot />
			<Education />
			<ConsultStage />
			<ClientResult />
			<Questions />
			<Feedback />
			<Footer />
			<FloatButton.BackTop />
		</>

	)
}

export default App
