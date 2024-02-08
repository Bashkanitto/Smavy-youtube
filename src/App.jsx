import { Contact } from './components/Contact';
import { About } from './components/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { New } from './components/New';
import Footer from './components/Footer';

function App() {
	return (
		<div className='Big-container'>
			<Header />
			<Hero />
			<About />
			<New />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
