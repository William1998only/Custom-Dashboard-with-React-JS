import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
export class Logintbygoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.signup = this
    //   .signup
    //   .bind(this);
  }
  signup(res) {
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };
    //console.log(googleresponse + '')
    debugger;
    axios.post('http://localhost:3001/LoginGoogle', googleresponse)
      .then((result) => {
        let responseJson = result;
        sessionStorage.setItem("userData", JSON.stringify(result));
        this.props.history.push('/Dashboard')
      });
  };
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    }
    return (
      <div className="App">
      <div className="row">
        <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            Please Login to Proceed
        </div>
        </div>
        <div className="row">
        <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <GoogleLogin
                clientId="199547904246-3hatltt4g2kp2t5tbivojuk02vur98bn.apps.googleusercontent.com" //put your client ID 
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} ></GoogleLogin>
        </div>
        </div>
      </div>
    )
  }
}
export default Logintbygoogle