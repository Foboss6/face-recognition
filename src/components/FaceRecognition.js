import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, faceBox}) => {
  if(imageURL) 
    return(
       <div className='center w-60'>
        <div className='absolute  pa2 ma0 shadow-5 '>
          <img alt='' src={imageURL} id='input_image' />
          {faceBox.map((face, index) => (
            <div key={index}
            className='bounding-box'
            style={{top:  face.topRow,
                  right:  face.rightCol,
                  bottom: face.bottomRow,
                  left:   face.leftCol
                  }} />
          ))}
        </div>
       </div>
    );
    else return(<></>);
}

export default FaceRecognition;