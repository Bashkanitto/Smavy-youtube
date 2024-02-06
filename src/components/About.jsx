import aboutImg from '../../public/about.webp';

export const About = () => {
	return (
		<section className='hero about'>
			<div className='hero hero-container'>
				<img src={aboutImg} alt='' className='ernur' />
				<div>
					<h4 className='post'>ABOUT ME</h4>
					<h2 className='post_1'>
						Front-end Devoloper <br />
						based in Almaty, Kazakhstan{' '}
					</h2>
					<p className='about_par'>
						Hey, my name is Aidyn, and I'm a Frontend Developer. My <br />
						passion is to create and develop a clean UI/UX for my users.
					</p>
					<p className='about_par'>
						My main stack currently is React/Next.js in combination with <br />
						Tailwind CSS and TypeScript.
					</p>
				</div>
			</div>
		</section>
	);
};
