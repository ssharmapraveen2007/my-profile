import React, { Component } from 'react';
import './home.css';
import me from './me.png';
import SocialMediaLink from '../socialMedia/mediaLink';


class Home extends React.Component {
   render() {
      return (

      		<div>
      			<div className="container">
	            	<div className="box" style={{margin:'3% 0'}}>
	                	<div className="row">
	                    	<div className="float image-wrapper">
	                        	<img src={me} alt="My selfie" />
	                        </div>
	                    	<div className="float text-wrapper">
	                        	<div className="tex-box">
	                            	<div className="logo-text">Praveen Kumar</div>
	                            	<div className="logo-sub-text">UI Lead</div>
	                            </div>
	                            <div className="intro-text">
	                            	Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for unforgettable IT based companies.	
	                            </div>
	                            <div>
	                            	<SocialMediaLink />
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
      		</div>
      	);
  }
}

export default Home;