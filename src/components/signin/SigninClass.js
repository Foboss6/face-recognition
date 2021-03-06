import React from 'react';
import { SERVER_PATH } from '../server-path';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signinEmail: '',
      signinPassword: '',
      errorSignin: '',
    }
  }
  
  onEmailChange = (event) => {
    this.setState({signinEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signinPassword: event.target.value})
  }

  onSubmit = () => {
    if(this.state.signinEmail && this.state.signinPassword) {
      fetch(`${SERVER_PATH}/signin`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signinEmail,
          password: this.state.signinPassword,
        }),
      })
      .then(response => response.json())
      .then(data => {
        if(data.id) {
          this.props.loadUser(data);
          this.props.onRouteChange('home');
        } else this.setState({errorSignin: data});
      })
      .catch(console.log);
    } else this.setState({errorSignin: 'Fill the email and password fields'});
  }
  
  render () {

    const { onRouteChange } = this.props;

    return (
      <article className="br3 ba dark-gray b--black-10 w-100 w-50-m mw6 center shadow-5">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-white w-100 br2" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  placeholder="example@mail.ma"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-white w-100 br2" 
                  type="password" 
                  name="password"  
                  id="password" 
                  placeholder='********'
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            {
              this.state.errorSignin
              ? <p>{this.state.errorSignin}</p>
              : <></>
            }
            <div className="">
              <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2" 
                type="submit" value="Sign in" 
                onClick={this.onSubmit}
              />
            </div>
            <div className="lh-copy mt3">
              <p className="f6 link dim black db pointer" onClick={() => onRouteChange('register')}>Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
  
}

export default Signin;