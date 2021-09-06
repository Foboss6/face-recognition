import React from 'react';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div className='flex justify-center'>
      <div className='ma3 w-60'>
        <div className='pa3 shadow-5'>
          <input onChange={onInputChange} className='pa2 input-reset ba bg-transparent hover-white w-80 br2' type="email" name="email-address" placeholder='Enter image URL' />
          <button onClick={onSubmit} className='br2 f5 w-20 grow link ph3 pv2 dib white bg-green'>Press</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;