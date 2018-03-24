import React from 'react';
import './mediaLink.css';


class SocialMediaLink extends React.Component{
	render() {
		return(
			<div className="social-media-block">
	        	<ul>
	            	<li>
	                    <a href="https://www.facebook.com/ssharmapraveen" target="_blank">
	                    	<span className="icon media-icon"><i className="fa fa-facebook"></i></span>
	                    </a>
	                </li>
	            	<li>
	                    <a href="https://www.linkedin.com/in/ssharmapraveen" target="_blank">
	                    	<span className="icon media-icon"><i className="fa fa-linkedin"></i></span>
	                    </a>
	                </li>
	            	<li>
	                    <a href="https://twitter.com/ssharmapraveen" target="_blank">
	                    	<span className="icon media-icon"><i className="fa fa-twitter"></i></span>
	                    </a>
	                </li>
	            	<li>
	                    <a href="https://www.instagram.com/ssharmapraveen2007" target="_blank">
	                    	<span className="icon media-icon"><i className="fa fa-instagram"></i></span>
	                    </a>
	                </li>
	            </ul>
	        </div>
		);
	}
}

export default SocialMediaLink;