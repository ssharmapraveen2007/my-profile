import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TextFieldExampleSimple extends React.Component{
  render() {
    return(
      <div>
          <h2>Please send your query !</h2>
          <MuiThemeProvider>
            <form autoComplete="off">
              <TextField
                required
                hintText="First Name"
                floatingLabelText="First Name"
                label="Required"
              /><br/>
              <TextField
                hintText="Last Name"
                floatingLabelText="Last Name"
              /><br/>
              <TextField
                required
                hintText="Phone Number"
                floatingLabelText="Phone Number"
                type="number"
                label="Required"
              /><br/>
              <TextField
                required
                hintText="Email Id"
                floatingLabelText="Email Id"
                type="email"
                label="Required"
              /><br/>
              <TextField
                hintText="Message"
                floatingLabelText="Message"
                multiline
                rowsMax="4"
              /><br/><br/>
              <RaisedButton label="Submit" primary={true} />
            </form>
          </MuiThemeProvider>
        </div>
    );
  }
}
  

export default TextFieldExampleSimple;