import React, { Component } from 'react';
import './work.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Magicpin from './magicpin.png';
import Partner from './magicpin-partner.png';
import Educare from '../assets/images/educare-screen.png';
import Mehrasons from '../assets/images/Mehrasons.png';
import Dewmark from '../assets/images/Dewmark.png';


class Work extends React.Component {
	render() {
		const width = window.innerWidth;
		return(
			<div>
				<div className="container">
					<div className="row animation">
						<div className="col-md-12">
				        	<div className="section-title">
				            	Work & Experiences
				            </div>
				            
			            </div>
		            </div>
	            </div>
	            <section style={{backgroundColor:'rgba(0,0,0,0.05)', paddingTop:'16px',paddingBottom:'36px', margin:'36px 0'}}>
		            <div className="container">
						<div className="row animation">
				            <div className="col-md-12">
					            <div className="section-text-block">
					            	<div style={{display:'inline-block', width:'100%'}}>
						            	<div className="float year-detail" style={{verticalAlign:'top'}}>
						            		<div className="section-text sec-text-hd">
							            		<div className="title-year">
							            			2015 - Present
							            		</div>
						            		</div>
						            	</div>
						            	<div className="float exp-details">
						            		<div className="section-text sec-text">
						            			<h2>UI Lead</h2>
						            			<p><span>Samast Technologies Pvt Ltd</span></p>
						            			As a UI Lead, have to work witth Emailers for merchant and customers, Email atomization using Python, JINJA2 for email template and CRON job.
												Development UI for Merchant Portal and Customer Portal as well and check cross browser compatiblity and multi device
												compatible to ensure better user experience.  

							            	</div>
							            	<div style={{width:'60%', height:'2px', backgroundColor:'#9cadb5', marginLeft:'24px', opacity:'0.5'}}></div>
						            	</div>
					            	</div>
					            	<div style={{display:'inline-block', width:'100%'}}>
						            	<div className="float year-detail" style={{verticalAlign:'top'}}>
						            		<div className="section-text sec-text-hd">
							            		<div className="title-year">
							            			2012 - 2015
							            		</div>
						            		</div>
						            	</div>
						            	<div className="float exp-details">
						            		<div className="section-text sec-text">
						            			<h2>Web Designer</h2>
						            			<p><span>Inspirations Info Solutions</span></p>
								            	As a wed Designer, have to get requirment from users/Project managers. Wireframe user input prepare mockup than draw design using colors and images for better user experiences.
								            	Once design process finalised we have to move in Development process using HTML, CSS, Bootstrap, JavaScript, And many other Skills.  
							            	</div>
							            	<div style={{width:'60%', height:'2px', backgroundColor:'#9cadb5', marginLeft:'24px', opacity:'0.5'}}></div>
						            	</div>
					            	</div>
					            	<div style={{display:'inline-block', width:'100%'}}>
						            	<div className="float year-detail" style={{verticalAlign:'top'}}>
						            		<div className="section-text sec-text-hd">
							            		<div className="title-year">
							            			2011 - 2012
							            		</div>
						            		</div>
						            	</div>
						            	<div className="float exp-details">
						            		<div className="section-text sec-text">
						            			<h2>Web Designer</h2>
						            			<p><span>GTI Travels Pvt Ltd</span></p>
								            	I believe in myself and like doing challenging work, which would satisfy my instinct to learn and do more and having high thinking which is helpful in doing big things and motivates myself. I would anticipate receiving some quality work experience that provides me an insight into the working of an organization like yours, which would enrich my knowledge and fulfill my goals.
							            	</div>
						            	</div>
					            	</div>
					            	
					            </div>
				            </div>
			            </div>
		            </div>
	            </section>
	            <div className="container">
					<div className="row">
			            <div className="col-md-12">
			            	<ScrollAnimation animateIn="fadeIn">
			            	<div className="block-wrapper">
			            		{
			            			width > 768 && 
			            			<div className="float">
				            			<div className="image-block">
				            				<img src={Magicpin} alt="Samast Technologies Pvt Ltd(Magicpin)" />
				            			</div>
				            		</div> 
			            		}
			            		
			            		<div className="float text-block ">
			            			<div className="right-text">
				            			<h3>Samast Technologies Pvt Ltd(Magicpin)</h3>
				            			<p><span>Skills used</span></p>
				            			<ul>
				            				<li>HTML5, CSS3, Bootstrap, Media query,  ReactJs and Font Awesome for small generic icons.</li>
											<li>This website is main website for Samast Technologies Pvt Ltd/magicpin. It is public domain for company.</li>
											<li>Team size: 5 peoples</li>
				            			</ul>
				            			<div className="know-more">
				            				<a href="#">
				            					Know more
				            					<span className="icon"><i className="fa fa-long-arrow-right"></i></span>
				            				</a>
				            			</div>
			            			</div>
			            		</div>
			            		{ width <= 768 &&
			            			<div className="float">
				            			<div className="image-block">
				            				<img src={Magicpin} alt="Samast Technologies Pvt Ltd(Magicpin)" />
				            			</div>
				            		</div>
			            		}
			            	</div>
			            	</ScrollAnimation>
			            	<ScrollAnimation animateIn="fadeIn">
			            	<div className="block-wrapper">
			            		<div className="float text-block ">
			            			<div className="left-text">
				            			<h3>Magicpin merchants portal</h3>
				            			<p><span>Skills used</span></p>
				            			<ul>
				            				<li>HTML5, CSS3, Bootstrap, Media query,  ReactJs and Font Awesome for small generic icons.</li>
											<li>Google chart API for producing graph for many purpose.</li>
											<li>This website for merchants only. Here maintained merchant’s all details, live promotions, transactions, customer details, wallet details and store profile etc.</li>
											<li>Team size: 5 peoples</li>
				            			</ul>
				            			<div className="know-more">
				            				<a href="#">
				            					Know more
				            					<span className="icon"><i className="fa fa-long-arrow-right"></i></span>
				            				</a>
				            			</div>
			            			</div>
			            		</div>
			            		<div className="float">
			            			<div className="image-block">
			            				<img src={Partner} alt="Magicpin merchants portal" />
			            			</div>
			            		</div>
			            	</div>
			            	</ScrollAnimation>
			            	<ScrollAnimation animateIn="fadeIn">
			            	<div className="block-wrapper">
			            		{
			            			width > 768 && 
			            			<div className="float">
				            			<div className="image-block">
				            				<img src={Educare} alt="Educare" />
				            			</div>
				            		</div> 
			            		}
			            		<div className="float text-block ">
			            			<div className="right-text">
				            			<h3>Tanya's English Institute(Educare)</h3>
				            			<p>The Educare(Tanya’s English Institute) is a language training institute. It is successfully run since 15 years in Ghaziabad (UP). From last two years winning Education Excellence Award for best language training institute in Ghaziabad.
It was a good learning experience to work with a reputed client like Tanya’s English Institute
</p>
				            			<p><span>Skills used</span></p>
				            			<ul>
				            				<li>HTML5, CSS3, Bootstrap, Media query and Font Awesome for small generic icons.</li>
											<li>PHP and Google reCaptcha</li>
											<li>Team size: 2 peoples</li>
				            			</ul>
				            			<div className="know-more">
				            				<a href="#">
				            					Know more
				            					<span className="icon"><i className="fa fa-long-arrow-right"></i></span>
				            				</a>
				            			</div>
			            			</div>
			            		</div>
			            		{ width <= 768 &&
			            			<div className="float">
				            			<div className="image-block">
				            				<img src={Educare} alt="Educare" />
				            			</div>
				            		</div>
			            		}
			            	</div>
			            	</ScrollAnimation>
			            	<ScrollAnimation animateIn="fadeIn">
			            	</ScrollAnimation>
			            	<ScrollAnimation animateIn="fadeIn">
			            	<div className="block-wrapper">
			            		<div className="float text-block ">
			            			<div className="left-text">
				            			<h3>Mehrasons Jewellers</h3>
				            			<p>The Mehra Family has jewellery showrooms since pre-partition in Lahore. Mehrasons Jewellers is one of the most recognized brands in India’s Gems and Jewellery industry from a long time. It was a good learning experience to work with a reputed client like Mehrasons Jewellers.</p>
				            			<p><span>Skills used</span></p>
				            			<ul>
				            				<li>HTML5, CSS3, Bootstrap, Media query and  jQuery</li>
											<li>Team size: 4 peoples</li>
				            			</ul>
				            			<div className="know-more">
				            				<a href="#">
				            					Know more
				            					<span className="icon"><i className="fa fa-long-arrow-right"></i></span>
				            				</a>
				            			</div>
			            			</div>
			            		</div>
			            		<div className="float">
			            			<div className="image-block">
			            				<img src={Mehrasons} alt="Mehrasons Jewellers" />
			            			</div>
			            		</div>
			            	</div>
			            	</ScrollAnimation>
			            	<ScrollAnimation animateIn="fadeIn">
			            	<div className="block-wrapper">
			            		{
			            			width > 768 && 
			            			<div className="float">
				            			<div className="image-block">
				            				<img src={Dewmark} alt="Dewmark" />
				            			</div>
				            		</div> 
			            		}
			            		<div className="float text-block ">
			            			<div className="right-text">
				            			<h3>Dewmark INC</h3>
				            			<p>Dewmark  INC is recognized as one of the reputed buying house doing business for over 10 years. The agency specializes in product development, coordination & communication, online & post production inspections, etc.
It is a good learning experience to work with a reputed client like Dewmark  INC. I am a part of a team of 2 as a designer.
</p>
				            			<p><span>Skills used</span></p>
				            			<ul>
				            				<li>HTML5, CSS3, Bootstrap, Media query and  jQuery</li>
											<li>PHP and Google reCaptcha</li>
											<li>Adobe Photoshop For UI Design</li>
											<li>Team size: 2 peoples</li>
				            			</ul>
				            			<div className="know-more">
				            				<a href="#">
				            					Know more
				            					<span className="icon"><i className="fa fa-long-arrow-right"></i></span>
				            				</a>
				            			</div>
			            			</div>
			            		</div>
			            		{ width <= 768 &&
			            			<div className="float">
				            			<div className="image-block">
				            				<img src={Dewmark} alt="Dewmark" />
				            			</div>
				            		</div>
			            		}
			            	</div>
			            	</ScrollAnimation>
			            </div>
					</div>
				</div>
			</div>
		);
	}
} 

export default Work;