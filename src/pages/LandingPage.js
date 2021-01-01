import React, { Component } from 'react';
import { Header, Footer, About, CateringMenu } from '../components';
import { LandingContent } from '../styled-components/pages/landing';
import { PageWrapper, ContentWrapper, Button } from '../styled-components/global';

class Landing extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {}
      }
    }
    componentDidMount(){
      fetch("/api/getMe")
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((user) => {
            this.setState({ user })
        }).catch(err => console.log(err))
    }
    render(){
      const { user } = this.state;
      console.log(user);
      return (
          <PageWrapper>
              <Header/>
              <About noLogo noHexes>
                <h2>Subscription / Catering Program</h2>
                <p>We are providing premium coffee to anybody and any business within the Salt Lake valley.</p>
                <p>We deliver to any location within 30 miles of downtown Salt Lake City. </p>
                <p>Please consider our catering menu and if you are interested, Get Started!</p>
                <a href="/chooseproducts"><Button>Get Started</Button></a>
              </About>
              <ContentWrapper>
                <LandingContent>
                  <CateringMenu/>
                  <a href="/chooseproducts">
                    <Button>Get Started</Button>
                  </a>
                  {
                    user ?
                    <a href="/myaccount">
                      <Button>Your Account</Button>
                    </a> :
                    <Fragment>
                      <a href="/login">
                        <Button>Login</Button>
                      </a>
                      <a href="/signup">
                        <Button>Sign Up</Button>
                      </a>
                    </Fragment>
                  }
                </LandingContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Landing;
