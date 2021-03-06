import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, faceBox }) => {
  if(imageURL) 
    return(
       <div className='flex justify-center' >
         <div className='absolute w-60'>
          {
            !!imageURL
            ?
            <div className='pa2 ma0 shadow-5 '>
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
            :
            <></>
          }
        </div>
       </div>
    );
    else return(<></>);
}

export default FaceRecognition;