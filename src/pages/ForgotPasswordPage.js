import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ForgotPasswordContent, FormBox } from '../styled-components/pages/forgotpassword';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class ForgotPassword extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: "",
        password1: "",
        password2: "",
        passwordMessage: "",
        expired: false,
        passwordChanged: false
      }
    }
    submitEmail = (e) => {
      e.preventDefault();
      fetch('/api/recover', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: this.state.email})
      })
      .then((res) => {
        if(res.status !== 200) throw Error(res.statusText);
        return res.json();
      })
      .then((response) => {
        if(response.message){
          this.setState({ passwordMessage: response.message })
        } else {
          alert("An email has been sent to your inbox. Please open the link and reset your password.")
        }
        console.log("send email to user", response);
      })
    }
    badPassword = (passwordMessage) => {
      document.getElementById('password1').style.border = '1px solid red';
      document.getElementById('password2').style.border = '1px solid red';
      this.setState({ passwordMessage })
    }
    updateUser = () => {
      const { userID } = this.props.data;
      const { password1 } = this.state;
      fetch('/api/changePassword/' + userID, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password1 })
      })
      .then((res) => {
        if(res.status !== 200) throw Error(res.statusText);
        return res.json();
      })
      .then((response) => {
        if(response.message){
          this.setState({ passwordMessage: response.message })
        } else {
          this.setState({
            passwordMessage: "You have successfully changed your password. Login below."
          })
        }
      })
    }
    submitNewPasswords = (e) => {
      e.preventDefault()
      const { password1, password2 } = this.state;
      if(password1 != password2){
        this.badPassword("Passwords do not match!");
      } else if(password1.length < 8){
        this.badPassword("Password must be at least 8 characters long");
      } else if(!/\d+/.test(password1)){
        this.badPassword("Password must contain at least 1 number");
      } else if(!/[a-zA-Z]/.test(password1)){
        this.badPassword("Password must contain at least one letter");
      } else {
        this.updateUser();
      }
    }
    updatePassword = () => {
      const { password1, password2 } = this.state;
      if(password1 == password2){
        document.getElementById('password1').style.border = '1px solid #8d8d8d';
        document.getElementById('password2').style.border = '1px solid #8d8d8d';
        this.setState({ passwordMessage: "" })
      }
    }
    updateState = (e, prop) => {
      let obj = {};
      obj[prop] = e.currentTarget.value;
      this.setState(obj, () => {
        if(!this.state.expired) this.updatePassword()
      });
    }
    showForm = () => {
      const { userID } = this.props.data;
      const { expired, password1, password2, email } = this.state;
      if(!expired && userID){
        return (
          <FormBox>
            <h2>Create a New Password</h2>
            <form onSubmit={this.submitNewPasswords}>
              <p>Password must...</p>
              <p>-contain at least 8 characters</p>
              <p>-contain at least 1 letter</p>
              <p>-contain at least 1 number</p>
              <input
                id="password1"
                placeholder="Password"
                type="password"
                value={password1}
                required
                onChange={(e) => {this.updateState(e, "password1")}}
              />
              <input
                id="password2"
                placeholder="Re-Type Password"
                type="password"
                value={password2}
                required
                onChange={(e) => {this.updateState(e, "password2")}}
              />
              <Button type="submit">Submit New Password</Button>
            </form>
          </FormBox>
        )
      } else {
        return (
          <FormBox>
            <h2>Submit Your Email</h2>
            <form onSubmit={this.submitEmail}>
              <p>We will send you a password recovery link.</p>
              <input
                placeholder="Email"
                type="email"
                value={email}
                required
                onChange={(e) => {this.updateState(e, "email")}}
              />
              <Button type="submit">Submit Email</Button>
            </form>
          </FormBox>
        )
      }
    }
    componentDidMount(){
      const { userID, timer } = this.props.data;
      if(userID){
        console.log(timer, new Date().getTime());
        if(!timer || timer < new Date().getTime()){
          this.setState({
            expired: true
          })
        }
      }
    }
    render(){
      const { userID } = this.props.data;
      const { expired, passwordMessage, passwordChanged } = this.state;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ForgotPasswordContent>
                  {
                    expired &&
                    <div>
                      <h2>Sorry! this link has expired.</h2>
                      <a href="/passwordrecovery"><Button>Try Again</Button></a>
                    </div>
                  }
                  { this.showForm() }
                  {
                    passwordMessage &&
                    <p style={{color: "red"}}>{passwordMessage}</p>
                  }
                  {
                    passwordChanged &&
                    <a href="/login"><Button>Login</Button></a>
                  }
                </ForgotPasswordContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default ForgotPassword;
