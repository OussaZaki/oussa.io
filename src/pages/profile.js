import React from "react"
import { graphql } from "gatsby"

import Profile from "../components/profile"
import SEO from "../components/seo"

class ProfilePage extends React.Component {
  render() {
    return (
      <div class="profile-container">
        <SEO title="Oussama Zaki · Writes beautiful code" />
        <h1>Oussama Zaki.</h1>
        <p>Simple human, writes beautiful code.</p>

        <div class="container">
          <p>
            Language, Framework and Platform agnostic.. Joke aside, I only do
            Javascript.
          </p>
          <p>
            Currently enjoying building <strong>Smoooth</strong> payment
            solutions at Klarna. The toolbox contains React/Redux, SASS, some
            Backbone, chocolate and lot of coffee.. The last 2 are not js
            frameworks, just sayin' ;)
          </p>
          <p>
            To be clear, I'm not that Software Engineer Rockstar, or that
            Software Ninja, Warrior, Wizard...
          </p>
          <p>
            <span class="li">
              {" "}
              - I do write <strong>tests</strong> &nbsp; &#x1F601
            </span>
            <span class="li">
              {" "}
              - I worship <strong>web performance</strong> &nbsp; &#x1F680
            </span>
            <span class="li">
              {" "}
              - I care about the <strong>user experience</strong> &nbsp; &#x2764
            </span>
            <span class="li">
              {" "}
              - I use lot of <strong>emojis</strong> &nbsp; &#x1F380
            </span>
          </p>
        </div>

        <div class="container">
          <div class="center small">
            <span class="name">Oussama Zaki</span>
            <br />
            <span class="title">Stockholm, Sweden</span>
          </div>
          <div class="center small contact">
            <a title="Call me" href="tel:+46761805575">
              +46 76 180 55 75
            </a>
            <br />
            <a title="Email me" href="mailto:zaki.oussama@gmail.com">
              zaki.oussama@gmail.com
            </a>
          </div>
          <div class="center nounderline links">
            <a
              title="let's code together"
              href="https://github.com/OussaZaki"
              rel="noopener"
            >
              <i class="fa fa-github-alt"></i>
            </a>
            <a
              title="Find me on LinkedIn"
              href="https://www.linkedin.com/in/zakioussama/"
              rel="noopener"
            >
              <i class="fa fa-linkedin"></i>
            </a>
            <a
              title="Follow me on Twitter"
              href="https://twitter.com/OussaZaki"
              rel="noopener"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              title="check me on Instagram"
              href="https://instagram.com/theZaki/"
              rel="noopener"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              title="read my stories on Mediun"
              href="https://medium.com/@thezaki"
              rel="noopener"
            >
              <i class="fa fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
