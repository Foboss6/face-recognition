import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div className='f3 tc'>
      <p className='ma0 mt2'>Hi, {name}, your current rank is {entries}</p>
      <p className='ma0 mt4 f5'>Here you can add an image to find faces on it</p>
    </div>
  )
}

export default Rank;