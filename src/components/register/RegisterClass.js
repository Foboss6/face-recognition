import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }
  
  onInputChange = (event, fieldName) => {
    this.setState({[fieldName]: event.target.value})
  }

  onSubmit = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
    .then(response => response.json())
    .then(user => {
      if(user) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    });
  }

  render() {
    return (
      <article className="br3 ba dark-gray b--black-10 w-100 w-50-m mw6 center shadow-5">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-white w-100 br2" 
                  type="text" 
                  name="name"  
                  id="name" 
                  placeholder="My Name"
                  onChange={(event) => this.onInputChange(event, 'name')}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-white w-100 br2" 
                  type="email" 
                  name="email-address"  
                  id="email-address" 
                  placeholder="example@mail.ma"
                  autoComplete="new-password"
                  onChange={(event) => this.onInputChange(event, 'email')}
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
                  autoComplete="new-password"
                  onChange={(event) => this.onInputChange(event, 'password')}
                />
              </div>
            </fieldset>
            <div className="">
              <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2" 
                type="submit" value="Register" 
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;