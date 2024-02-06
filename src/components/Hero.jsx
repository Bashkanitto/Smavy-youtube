import { Github, Linkedin } from 'lucide-react';
import img from '../../public/hero.jpeg';
import html from '../../public/html_css.svg';
import js from '../../public/js_ts.svg';
import react from '../../public/react_nextjs.svg';
import tailwind from '../../public/tailwind_sass.svg';

export const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-info'>
				<h1>Front-end React Developer 👋</h1>
				<p className='text-4xl font-bold'>
					Hi im Aidyn, frontend web developer based on Taraz,Kazakhstan
				</p>
				<div className='icon'>
					<Linkedin />
					<Github />
				</div>
				<div className='stack'>
					<p>Tech stack</p>
					<p>|</p>
					<ul>
						<img src={html} alt='' />
						<img src={js} alt='' />
						<img src={react} alt='' />
						<img src={tailwind} alt='' />
					</ul>
				</div>
			</div>

			<img
				src={img}
				className='hero-img '
				alt=''
				width='500px'
				height='500px'
			/>
		</div>
	);
};
