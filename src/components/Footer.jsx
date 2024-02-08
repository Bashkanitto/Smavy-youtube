import { Linkedin, Github } from 'lucide-react';
const Footer = () => {
	return (
		<footer className='footer'>
			<p className='paragraph'>Copyright © 2024. All rights are reserved</p>
			<div className='icons'>
				<Linkedin />
				<Github />
			</div>
		</footer>
	);
};

export default Footer;
