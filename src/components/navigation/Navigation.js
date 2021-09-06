import React from 'react';
import Logo from './Logo';

const Navigation = ({onRouteChange, route, signOut}) => {
  return (
    <nav style={{
          display: 'grid',
          gridTemplateColumns: '100px 1fr 150px',
          padding: '1vw',
          margin: '0',
          height: '100px'}}>
      <Logo />
      <div></div>
      {route === 'signin'
        ?
        <p className='tr f4 link dim black underline pa3 ma0 pointer'
            onClick={() => onRouteChange('register')}>
          Register
        </p>
        : 
        route === 'register'
          ?
          <p className='tr f4 link dim black underline pa3 ma0 pointer'
              onClick={() => onRouteChange('signin')}>
            Sign In
          </p>
          :
          <p className='tr f4 link dim black underline pa3 ma0 pointer'
              onClick={() => {signOut(); onRouteChange('signin')}}>
            Sign Out
          </p>
      }
    </nav>
  )
}

export default Navigation;