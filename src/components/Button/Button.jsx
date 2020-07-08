import React, { Component } from 'react'

import './Button.css'

const socialLinks = [
  {
    text: 'See my works on',
    label: 'GitHub',
    link: 'https://github.com/gopla',
  },
  {
    text: 'Connect with me on',
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/gopla',
  },
  {
    text: 'Check my updates on',
    label: 'Facebook',
    link: 'https://fb.com/naufal.yudhistira12',
  },
  {
    text: 'Follow me on',
    label: 'Instagram',
    link: 'https://instagram.com/naufalyudhistira',
  },
]

const renderLink = () => {
  return socialLinks.map(({ text, label, link }) => (
    <a target="_blank" rel="noopener noreferrer" href={link} key={label}>
      <p>
        {text} <span>{label}</span>
      </p>
    </a>
  ))
}

class Button extends Component {
  render() {
    return (
      <section className="button">
        <div className="button__content">{renderLink()}</div>
      </section>
    )
  }
}

export default Button
