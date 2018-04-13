import React from 'react';
import SocialMediaLink from '../socialMedia/mediaLink';

class Address extends React.Component {
	render() {
		return(
			<div className="ct-box">
        			<h2>Contact Me</h2>
                                <div style={{paddingTop:'16px'}}>
                                	<div style={{marginBottom:'8px'}}>
                                		<span style={{color:'#9cadb5', marginRight:'6px', display:'inline-block', verticalAlign:'middle'}}>
                	                		<i className="fa fa-phone"></i>
                                		</span>
                                		<a style={{marginTop:'-2px', display:'inline-block', verticalAlign:'middle'}} href="tel:+919873041213">+ 91 98730 41213</a>
                                	</div>
                                	<div style={{marginBottom:'8px'}}>
                                		<span style={{color:'#9cadb5', marginRight:'6px', display: 'inline-block', verticalAlign: 'middle'}}><i className="fa fa-envelope"></i></span>
                                		<a style={{marginTop:'-2px', display: 'inline-block', verticalAlign: 'middle'}} href="mailto:ssharmapraveen2007@gmail.com">ssharmapraveen2007@gmail.com</a>
                                	</div>
                                	<div style={{marginBottom:'24px'}}>
                                		<span style={{color:'#9cadb5', marginRight:'6px', display: 'inline-block', verticalAlign: 'middle'}}><i className="fa fa-skype"></i></span>
                                		<a style={{marginTop:'-2px', display: 'inline-block', verticalAlign: 'middle'}} href="#">ssharmapraveen2007@live.com</a>
                                	</div>
                        	<div>
                		      <SocialMediaLink />
                	       </div>
                        </div>

			</div>
		);
	}
}

export default Address;