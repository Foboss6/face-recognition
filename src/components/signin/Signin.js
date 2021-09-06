import React from 'react';

const Signin = ({onRouteChange}) => {
  return (
    <article className="br3 ba dark-gray b--black-10 w-100 w-50-m mw6 center shadow-5">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-white w-100 br2" type="email" name="email-address"  id="email-address" placeholder="example@mail.ma" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-white w-100 br2" type="password" name="password"  id="password" placeholder='********' />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
          </fieldset>
          <div className="">
            <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2" 
              type="submit" value="Sign in" 
              onClick={() => onRouteChange('home')}
            />
          </div>
          <div className="lh-copy mt3">
            <p className="f6 link dim black db pointer" onClick={() => onRouteChange('register')}>Register</p>
            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
          </div>
        </div>
      </main>
    </article>
  );
}

export default Signin;