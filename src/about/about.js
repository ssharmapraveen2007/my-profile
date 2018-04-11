import React, { component } from 'react';
import './about.css';


class About extends React.Component {
   render() {
      return (
      	<div>
			<div className="container animation">
				<div className="row">
			    	<div>
			        	<div className="section-title">
			            	About me
			            </div>
			        </div>
			        <div className="section-text-block">
			        	<div className="section-text" style={{position:'relative'}}>
			            	6+ years experience with using the latest technologies for User Interface Design &amp; development of Web Applications
			                Experience in quick and effective web page development using JavaScript, HTML 5, CSS3, JQuery, and Object Oriented Javascript and Angular js. 
			                Full understanding of the Software Development Life Cycle, Agile software development methodology and database design. 
			                Compliant in making accessible and responsive web designs using Twitter Bootstrap &amp; @Media Queries.
			                Expertise in the MVC Javascript frameworks such as Angular.js
			                Experience with using Firebug to check for Cross Browser Compatibility as well as using browser-debugging tools such as Firebug for further browser testing.
			                Worked with media queries to target mobile devices such as phones, tablets and desktops. 
			                Experience with code versioning tools such as GIT.
			                Experience responsive email development using Python and JINJA2 templating ant its automization.  
			                Worked with Twitter Bootstrap to have responsive grid on the webpage.
			                Proficient in using different CSS frameworks like SASS and LESS
			                Experience using industry grade photo editing software such as Adobe Photoshop CS6, Adobe Illustrator and MS PAINT.
			                Excellent interpersonal skills, and exceptional ability to handle multiple tasks simultaneously while communicating clearly and concisely with fellow project members. 
			                Exceptional aptitude for collaborating with project members of diverse disciplines in distributed environments. 
			            	<div className="btn-block"><a href="#" className="btn-filled">Download resume</a></div>
		                </div>
			        </div>
			    </div>
			</div>
		</div>
		);
	}
}

export default About;