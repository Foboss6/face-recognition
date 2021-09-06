import React from 'react';
import Tilt from 'react-parallax-tilt';
import logoIcon from './logo-icon.png';

const Logo = () => {
  return (
      <Tilt>
        <img src={logoIcon} alt='Logo' 
        style={{ 
          height: '100px',
          width: '100px',
          // border: 'solid 1px',
          // borderRadius: '3px',
          // backgroundColor: 'darkgreen'
          }} />
    </Tilt>
  )
}

export default Logo;