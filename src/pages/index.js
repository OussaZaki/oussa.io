import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import SocialList from "../containers/social-list"

import "./index.css"

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <SEO title="Oussama Zaki · Tech Enthusiast" />
        <section id="s1">
          <div className="container">
            <h1 className="center">Oussama Zaki.</h1>
            <h2 className="center yellow">Tech Enthusiast.</h2>
          </div>
        </section>

        <section id="s2">
          <div className="container">
            <p>
              My meaning of life can be summarised in one thing, <span className="yellow">Impact</span>. And I believe Technology can help me provide positive impact.
            </p>
            <p>
              <strike>
                Currently enjoying building smoooth shopping experiences at
                Klarna.
              </strike>
            </p>
            <p>
              On a mission to build the next generation of Green Energy Technologies, as a Director of Engineering at <strong>Svea Solar</strong>.
            </p>
            <p>
              Here's what I believe in when building a product or solving a
              problem:
            </p>
            <p>
              <span className="li">
                {" "}
                - <strong>User experience</strong> first.
              </span>
              <span className="li">
                {" "}
                - Move <strong>fast</strong> and break things.
              </span>
              <span className="li">
                {" "}
                - <strong>Test</strong> smart not hard.
              </span>
              <span className="li">
                {" "}
                - Poor <strong>performance</strong> is a bug.
              </span>
            </p>
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
                +46 72 855 81 65
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
