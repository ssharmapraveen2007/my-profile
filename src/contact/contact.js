import React, { Component } from 'react';
import './contact.css';
import Form from './form';


class Contact extends React.Component {
	render() {
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="section-title">
			            	Contact
		            	</div>
		            	<div className="section-text-block">
				        	<div className="section-text" style={{position:'relative'}}>
				        		<Form />
				        	</div>
			        	</div>
					</div>
				</div>
			</div>
		) 
	}
}

export default Contact;