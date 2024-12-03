/** @format */

import heroImg from './assets/hero.svg'
const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Knausgaard tacos pabst, vibecession bespoke same chartreuse pok pok
						you probably haven't heard of them kickstarter banjo helvetica.
						Selvage cupping literally fanny pack, salvia mumblecore keffiyeh
						flannel single-origin coffee poke pitchfork trust fund banh mi
						keytar paleo. Drinking vinegar neutral milk hotel disrupt, DIY
						biodiesel pabst everyday carry direct trade ennui. Street art beard
						yuccie, vinyl neutral milk hotel food truck letterpress taxidermy
						vegan put a bird on it tbh helvetica fingerstache tousled. Forage
						trust fund fam hell of portland.
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImg} alt='woman and browser' className='img' />
				</div>
			</div>
		</section>
	)
}
export default Hero
