import React, { Component } from 'react';
import './work.css';
import Magicpin from './magicpin.png';
import Partner from './magicpin-partner.png';

class Work extends React.Component {
	render() {
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
				        	<div className="section-title">
				            	Work & Experiences
				            </div>
				            <div className="section-text-block">
				            	<div className="section-text">
					            	I believe in myself and like doing challenging work, which would satisfy my instinct to learn and do more and having high thinking which is helpful in doing big things and motivates myself. I would anticipate receiving some quality work experience that provides me an insight into the working of an organization like yours, which would enrich my knowledge and fulfill my goals.
				            	</div>
				            </div>
			            </div>
			            <div className="col-md-12">
			            	<div className="block-wrapper">
			            		<div className="float pc-only">
			            			<div className="image-block">
			            				<img src={Magicpin} alt="Samast Technologies Pvt Ltd(Magicpin)" />
			            			</div>
			            		</div>
			            		<div className="float text-block ">
			            			<div className="right-text">
				            			<h3>Samast Technologies Pvt Ltd(Magicpin)</h3>
				            			<p><span>Skills used</span></p>
				            			<ul>
				            				<li>HTML5, CSS3, Bootstrap, Media query,  ReactJs and Font Awesome for small generic icons.</li>
											<li>This website is main website for Samast Technologies Pvt Ltd/magicpin. It is public domain for company.</li>
											<li>Team size: 5 peoples</li>
				            			</ul>
			            			</div>
			            		</div>
			            		<div className="float mobile-only">
			            			<div className="image-block">
			            				<img src={Magicpin} alt="Samast Technologies Pvt Ltd(Magicpin)" />
			            			</div>
			            		</div>
			            	</div>
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
			            			</div>
			            		</div>
			            		<div className="float">
			            			<div className="image-block">
			            				<img src={Partner} alt="Magicpin merchants portal" />
			            			</div>
			            		</div>
			            	</div>
			            </div>
					</div>
				</div>
			</div>
		);
	}
} 
export default Work;