import { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import img from '../../public/hero.jpeg';
import html from '../../public/html_css.svg';
import js from '../../public/js_ts.svg';
import react from '../../public/react_nextjs.svg';
import tailwind from '../../public/tailwind_sass.svg';

export const Hero = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className='hero'>
			<div className='hero-info'>
				<div className='hero-header'>
					<h1 className='hero-h1'>
						Front-end React <br /> Developer 👋
					</h1>
					<p className=' '>
						Hi im Aidyn, frontend web developer <br /> based on Taraz,
						Kazakhstan
					</p>
					<div
						className='icon'
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<Linkedin
							style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
						/>
						<Github
							style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
						/>
					</div>
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
