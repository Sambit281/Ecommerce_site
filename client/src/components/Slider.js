import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../images/products/spacejoy.jpg';
import slider2 from '../images/products/michael-warf.jpg';
import slider3 from '../images/products/nathan-fertig.jpg';
import slider4 from '../images/products/toa-heftiba.jpg';


const Slider = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<>
			<section className="hero">
				<div className="hero-container">
					<SliderSlick {...settings}>
						<div>
							<img src={"https://img.freepik.com/free-photo/top-view-pills-with-copy-space_23-2149080617.jpg?t=st=1726669843~exp=1726673443~hmac=0a081db9d75902d130b02293d72f0cb2e227d726e1aef56cc9b734278682c215&w=1380"} />
						</div>
						<div>
							<img src={"https://img.freepik.com/free-photo/top-view-glass-water-pills-with-copy-space_23-2148430014.jpg?t=st=1726670113~exp=1726673713~hmac=f30e8242ae974dffd81f5efc67fa0cc9c2854fbd60f3966c247baa6bbc38eb73&w=1380"} />
						</div>
						<div>
							<img src={"https://img.freepik.com/free-photo/minimalistic-science-banner-with-pills_23-2149431108.jpg?t=st=1726670146~exp=1726673746~hmac=499c6e00374f86fe2c796fa91c7fb8875822e54626620f97c12c67a039070f2a&w=1380"} />
						</div>
						<div>
							<img src={"https://img.freepik.com/free-photo/copy-space-tablets-with-daily-pills_23-2148550989.jpg?t=st=1726670208~exp=1726673808~hmac=817090678e522ffd647a027e0cdcf79c2df60aabffb9d5455f34d54d5cddf08b&w=996"} />
						</div>
					</SliderSlick>
				</div>
			</section>
		</>
	)
}

export default Slider;