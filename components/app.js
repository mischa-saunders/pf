import React, { Component } from 'react'
import Typist from 'react-typist'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div>
      <Typist
        avgTypingDelay={80}
        startDelay={0}
        cursor={{show: false}}
      >
        <div className='ADifferentColour'>
          <div className='textDiv'>
            <div className='boxLeft'>
              <h1>Hi I'm Mischa</h1>
              <h2>I am, generally speaking, a person.</h2>
              <h2>Feel free to get in touch</h2>
            </div>
            <div className='boxRight'>
              <h2>Some links I want to follow up on for building this are:</h2>
              <ol className='resourcesToFollowUpOn'>
                <h3><li><a href='https://github.com/jstejada/react-typist'> Typist</a></li></h3>
                <h3><li><a href='https://medium.freecodecamp.com/how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8'>Animated Microinteractions </a></li></h3>
                <h3><li><a href='https://github.com/FormidableLabs/react-animations'> React-Animations</a></li></h3>
                <h3><li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions'> CSS Transitions</a></li></h3>
                <h3><li><a href='https://css-tricks.com/snippets/css/keyframe-animation-syntax/'> CSS Animations</a></li></h3>
                <h3><li><a href='https://uxplanet.org/microinteractions-the-secret-to-great-app-design-4cfe70fbaccf'> Microinteractions: The Secret of Great App Design</a></li></h3>
              </ol>
            </div>
          </div>
        </div>
      </Typist>
    </div>
  }

}

export default App
