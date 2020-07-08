import React, { Component } from 'react'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import 'react-typist/dist/standalone/Typist'
import './Desc.css'

class Desc extends Component {
  render() {
    return (
      <div>
        <section className="desc">
          <div className="desc__title">
            <Typist>
              <span>
                Hi! <Typist.Delay ms={500} />
                I'm Naufal Yudhistira.
              </span>
              <Typist.Backspace count={26} delay={500} />
              <span>Focusing on Backend Development</span>
              <Typist.Backspace count={31} delay={500} />
              <span className="jp_font">よろしくお願いいたします。</span>
            </Typist>
          </div>
        </section>
        <section className="subtitle">
          <div className="desc__subtitle">
            <span>Web Developer - Student - Daydreamer</span>
          </div>
        </section>
      </div>
    )
  }
}

export default Desc
