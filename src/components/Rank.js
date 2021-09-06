import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div className='f3 tc'>
      <p className='ma0 mt2'>{name}, your current rank is {entries}</p>
    </div>
  )
}

export default Rank;