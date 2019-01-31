import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Contacts extends Component {
  render() {

    return(
        <section class="contact">
            <div class="header">
                <h1>Let's work together...</h1>
                <p>to make the web a better place...</p>
            </div>
            <div class="contact-point">
                <a href="https://www.linkedin.com/in/hmichaelko/" target="_blank" class="contact-details">LinkedIn</a>
                <a id='profile-link' href="https://github.com/hyosunko" target="_blank" class="contact-details">GitHub</a>
                <a href="https://twitter.com/hyosunko" target="_blank" class="contact-details">Twitter</a>
                <a href="mailto:hyosunko@gmail.com" class="contact-details">Email</a>
            </div>
        </section>
    )
  }
}

export default Contacts
