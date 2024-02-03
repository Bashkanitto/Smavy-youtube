import img from '../../public/hero.jpeg';

export const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-info'>
				<h1>Front-end React Developer 👋</h1>
				<p>Hi im Aidyn, frontend web developer based on Taraz,Kazakhstan</p>
			</div>
			<img src={img} alt='' />
		</div>
	);
};
