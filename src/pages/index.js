import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import SocialList from "../containers/social-list"

import "./index.css"

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <SEO title="Oussa · Art & Tech" />
        <section id="s1">
          <div className="container">
            <h1 className="center">Oussa.</h1>
            <h2 className="center">Art & Tech</h2>
          </div>
        </section>

        <section id="s2">
          <div className="container">
            <p>Hi,</p>
            <p>
              My name is Oussama Zaki — Oussa for short, I'm currently based in
              Stockholm, helping internal teams at Spotify run large scale
              experiments; as a Senior Engineer.
            </p>
            <p>
              Originally from the Computer Science sphere, where I spent most of
              my days fiddling with Combinatorial Optimisation Algorithms &
              Heuristics.
            </p>
            <p>
              I progressively started moving towards the border line of
              human-computer interactions; while fostering a profound Passion
              for UX & Design, across different experiences at Google, Klarna,
              Svea Solar...
            </p>
            <p>
              Always down to discuss or collaborate on topics around Art, UX &
              Engineering. You can also reach out if you are in need of some
              nice Omelette tips and recipes.
            </p>
            <p>Love,</p>
          </div>
        </section>
        <section id="s3">
          <div className="container">
            <div className="center small">
              <span className="name">Oussama Zaki</span>
              <br />
              <span className="title">Stockholm, Sweden</span>
            </div>
            <div className="center small contact">
              <a title="Call me" href="tel:+46761805575">
                +46 73 842 97 78
              </a>
              <br />
              <a title="Email me" href="mailto:me@oussa.dev">
                me@oussa.dev
              </a>
            </div>
            <SocialList />
          </div>
        </section>
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
