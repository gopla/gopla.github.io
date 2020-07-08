import React, { Component } from 'react'
import Particles from 'react-particles-js'

import './Particle.css'

class Particle extends Component {
  render() {
    return (
      <div>
        <Particles
          width="100%"
          height="100%"
          canvasClassName="particle__bg"
          params={{
            background: {
              color: '#1d4763',
            },
            particles: {
              number: {
                value: 70,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              shape: {
                stroke: {
                  width: 3,
                  color: '#e6e500',
                  opacity: 0.5,
                },
              },
              lineLinked: {
                enable: true,
                color: '#5fc1c7',
              },
            },
            fpsLimit: 60,
            retina_detect: true,
          }}
        />
      </div>
    )
  }
}

export default Particle
