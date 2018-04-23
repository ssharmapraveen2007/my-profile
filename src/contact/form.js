import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import server from './server';

class TextFieldExampleSimple extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending…' });
    const data = new FormData(event.target);
    for (var value of data.values()) {
       console.log(value); 
    }
  }

  render() {
    return(
      <div>
          <h2>Please send your query !</h2>
          <MuiThemeProvider>
            <form autoComplete="off" method="POST" action="http://localhost:3000/contact/validate.php">
              <TextField
                required
                hintText="First Name"
                floatingLabelText="First Name"
                name="firstName"
                id="firstName"
                label="Required"
              /><br/>
              <TextField
                hintText="Last Name"
                floatingLabelText="Last Name"
                name="lastName"
                id="lastName"
              /><br/>
              <TextField
                required
                hintText="Phone Number"
                floatingLabelText="Phone Number"
                type="number"
                label="Required"
                name="phoneNumber"
                id= "phoneNumber"
              /><br/>
              <TextField
                required
                hintText="Email Id"
                floatingLabelText="Email Id"
                type="email"
                label="Required"
                name="emailId"
                id= "emailId"
              /><br/>
              <TextField
                hintText="Message"
                floatingLabelText="Message"
                multiline
                rowsMax="4"
                name="message"
                id= "message"
              /><br/><br/>
              <input
                type="submit"
                value="Submit"
                className="form-submit-btn"
              />
              <div>
                { window.location.hash === '#success' &&
                  <div id="success">
                    <p>Your message has been sent!</p>
                  </div>
                }
                { window.location.hash === '#error' &&
                  <div id="error">
                    <p>An error occured while submitting the form.</p>
                  </div>
                }
              </div>
            </form>
          </MuiThemeProvider>
        </div>
    );
  }
}
  

export default TextFieldExampleSimple;