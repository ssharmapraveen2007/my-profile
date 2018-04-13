import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TextFieldExampleSimple extends React.Component{
  render() {
    return(
      <div>
          <h2>Please send your query !</h2>
          <MuiThemeProvider>
            <form autoComplete="off" method="POST" action="/contact">
              <TextField
                required
                hintText="First Name"
                floatingLabelText="First Name"
                name="firstName"
                label="Required"
              /><br/>
              <TextField
                hintText="Last Name"
                floatingLabelText="Last Name"
                name="lastName"
              /><br/>
              <TextField
                required
                hintText="Phone Number"
                floatingLabelText="Phone Number"
                type="number"
                label="Required"
                name="phoneNumber"
              /><br/>
              <TextField
                required
                hintText="Email Id"
                floatingLabelText="Email Id"
                type="email"
                label="Required"
                name="emailId"
              /><br/>
              <TextField
                hintText="Message"
                floatingLabelText="Message"
                multiline
                rowsMax="4"
                name="message"
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