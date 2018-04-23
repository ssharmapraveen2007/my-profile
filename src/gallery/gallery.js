import React, { Component } from 'react';
import './gallery.css';
import Gallery from 'react-grid-gallery';
//import imgUrl from 'imgpath';


class GalleryBox extends React.Component {
	render() {
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
				            	Gallery
			            	</div>
		            	</div>
		            	<div className="col-md-12">
		            		<div className="section-text-block" style={{margin:'36px 0'}}>
		            			<div><h3>Design Projects</h3></div>
		            			<Gallery images={IMAGES} />
		            		</div>
		            	</div>
					</div>
				</div>
			</div>
		) 
	}
}

const imgUrl = require('../assets/images/CoverPage.jpg');
const imgUrl1 = require('../assets/images/foodfest.jpg');
const imgUrl2 = require('../assets/images/foodfestback.jpg');
const imgUrl3 = require('../assets/images/J_K.jpg');
const imgUrl4 = require('../assets/images/Kerela.jpg');
const imgUrl5 = require('../assets/images/MP.jpg');
const imgUrl6 = require('../assets/images/Rajsthan.jpg');
const imgUrl7 = require('../assets/images/WestBengal.jpg');
const imgUrl8 = require('../assets/images/Cash-Receipt.png');
const imgUrl9 = require('../assets/images/DutySlip.png');
const imgUrl10 = require('../assets/images/educare.jpg');
const imgUrl11 = require('../assets/images/letterhead_new.png');
const imgUrl12 = require('../assets/images/VisitingCard.jpg');
const imgUrl13 = require('../assets/images/VisitingCard_Back.jpg');
const imgUrl14 = require('../assets/images/Invite.jpg');
const imgUrl15 = require('../assets/images/Inspirations.jpg');

const IMAGES = [
	{
		src: imgUrl15,
		thumbnail: imgUrl15,
		thumbnailWidth: 250,
		thumbnailHeight: 174,
		caption: 'Inspirations Web page Home'
	},
	{
		src: imgUrl10,
		thumbnail: imgUrl10,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Educare Web page Home'
	},
	{
		src: imgUrl8,
		thumbnail: imgUrl8,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Cash Receipt for Taxi company'
	},
	{
		src: imgUrl9,
		thumbnail: imgUrl9,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'DutySlip for Taxi company.'
	},
	{
		src: imgUrl11,
		thumbnail: imgUrl11,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Letterhead'
	},
	{
		src: imgUrl12,
		thumbnail: imgUrl12,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Visiting Card'
	},
	{
		src: imgUrl13,
		thumbnail: imgUrl13,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Visiting Card Back'
	},
	{
		src: imgUrl14,
		thumbnail: imgUrl14,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'WhatsApp Invitation Card'
	},
	{
		src: imgUrl,
		thumbnail: imgUrl,
		thumbnailWidth: 165,
		thumbnailHeight: 174,
		caption: 'Cover Page'
	},
	{
		src: imgUrl1,
		thumbnail: imgUrl1,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Food fest pumplet'
	},
	{
		src: imgUrl2,
		thumbnail: imgUrl2,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Food fest pumplet back'
	},
	{
		src: imgUrl3,
		thumbnail: imgUrl3,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Jammu & Kashmir culture'
	},
	{
		src: imgUrl7,
		thumbnail: imgUrl7,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'West Bengol culture'
	},
	{
		src: imgUrl4,
		thumbnail: imgUrl4,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Kerela culture'
	},
	{
		src: imgUrl5,
		thumbnail: imgUrl5,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Madhya Pradesh culture'
	},
	{
		src: imgUrl6,
		thumbnail: imgUrl6,
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		caption: 'Rajsthan culture'
	},
]

/*function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}*/

export default GalleryBox;