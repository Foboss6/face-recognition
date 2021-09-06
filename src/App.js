import './App.css';
import React from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import Particles from "react-tsparticles";
import FaceRecognition from './components/FaceRecognition';
import Signin from './components/signin/SigninClass';
import Register from './components/register/RegisterClass';

// import Clarifai from 'clarifai'; 
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '36e78ee2086541978395dbf2c333d59f'
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      faceBox: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: '',
      }
    }
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        entries: user.entries,
        joined: user.joined,
      },
      isSignedIn: true,
    })
  }

  calcFaceLocation = (data) => {
    const regions = data.outputs[0].data.regions;
    let faceBox = [];
    
    regions.forEach(el => {
      faceBox.push({
        topRow: el.region_info.bounding_box.top_row * 100 + '%',
        rightCol: (1 - el.region_info.bounding_box.right_col) * 100 + '%',
        bottomRow: (1 - el.region_info.bounding_box.bottom_row) * 100 + '%',
        leftCol: el.region_info.bounding_box.left_col * 100 + '%'
      })
    });

    this.setState({faceBox});//If names are the same, we can write like this
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    if(this.state.input) {
      this.setState({imageURL: this.state.input});
      // https://i.ibb.co/Ycvqqdy/03.jpg
      // https://i.ibb.co/K2MT36y/01.jpg
      // https://i.ibb.co/LPq7RfW/05.jpg
      // https://i.ibb.co/JFn8jfH/02.jpg
      // https://i.ibb.co/DM4H7sp/04.jpg
      // https://i.ibb.co/LnRXr66/06.jpg
      // https://i.ibb.co/zXjfdDV/07.jpg

      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        .then(response => {
          if(response) {
            fetch('http://localhost:3001/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id,
              }),
            })
            .then(response => response.json())
            .then(data => {
              if(data) {
                this.setState(Object.assign(this.state.user, {entries: data}));
              }
            });
          }
          this.calcFaceLocation(response)
        })
        .catch(err => console.log('An error occur '+ err));
    } else console.log('An empty URL');
  }

  onRouteChange = (route) => {
    this.setState({route});
  }

  signOut = () => {
    this.setState({
      isSignedIn: false,
      imageURL: '',
    });
  }

  render() {
    return (
    <div className="App">
      <Particles 
      className='particles'
      id="tsparticles"
      options={particlesOptions}
      />
      <Navigation 
        onRouteChange={this.onRouteChange} 
        route={this.state.route} 
        signOut={this.signOut}
      />
      {
        this.state.route === 'home'
        ? <>
            <Rank 
              name={this.state.user.name} 
              entries={this.state.user.entries}
            />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onSubmit={this.onSubmit}
            />
            <FaceRecognition 
              imageURL={this.state.imageURL} 
              faceBox={this.state.faceBox} 
            />
          </>
        :
          this.state.route === 'signin'
          ? <Signin
              loadUser={this.loadUser} 
              onRouteChange={this.onRouteChange}
            />
          : <Register
              loadUser={this.loadUser} 
              onRouteChange={this.onRouteChange}
            />
      }
    </div>
  );
  }
}

const particlesOptions =  {

  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

export default App;
