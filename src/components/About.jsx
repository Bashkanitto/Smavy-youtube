import aboutImg from '../../public/about.webp';

export const About = () => {
	return (
		<section className='hero about'>
			<div className='hero hero-container'>
				<div className='ernur-rotation'>
					<img src={aboutImg} alt='' className='ernur' />
					<div id='simple_arc'>
						<span className='w0'>W</span>
						<span className='w1'>E</span>
						<span className='w2'>B</span>
						<span className='w3'></span>
						<span className='w4'>D</span>
						<span className='w5'>E</span>
						<span className='w6'>V</span>
						<span className='w7'>E</span>
						<span className='w8'>L</span>
						<span className='w9'>O</span>
						<span className='w10'>P</span>
						<span className='w11'>E</span>
						<span className='w12'>R</span>
						<span className='w13'></span>
						<span className='w14'>F</span>
						<span className='w15'>R</span>
						<span className='w16'>O</span>
						<span className='w17'>N</span>
						<span className='w18'>T</span>
						<span className='w19'>-</span>
						<span className='w20'>E</span>
						<span className='w21'>N</span>
						<span className='w22'>D</span>
					</div>
				</div>

				<div className='about_us'>
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
