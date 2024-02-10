import { Map, Mail } from 'lucide-react';
export const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-wrapper'>
				<h2 className='contact_p'>CONTACT</h2>
				<h6 className='shy'>Dont be shy! Hit me up!👇</h6>
				<div className='contact_2'>
					<div className='contact_wrap'>
						<div className='location_icon contact-icon'>
							<Map />
						</div>
						<div className='location'>
							<h3>Location</h3>
							<p>Belgia, city</p>
						</div>
					</div>
					<div className='contact_wrap'>
						<div className='mail_icon contact-icon'>
							<Mail />
						</div>
						<div className='mail'>
							<h3>test@mail.com</h3>
							<p>fjhdsjh</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
