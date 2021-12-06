import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import SocialList from "../containers/social-list"

import "./index.css"

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <SEO title="Oussama Zaki · Technology Leader" />
        <section id="s1">
          <div className="container">
            <h1 className="center">Oussama Zaki.</h1>
            <h2 className="center yellow">Technology Leader.</h2>
          </div>
        </section>

        <section id="s2">
          <div className="container">
            <p>
              I find meaning in life through impact, the ensemble of values I
              bring to my environment and my surrounding. By that definition, my
              goal in life can be summarized into two words,{" "}
              <span className="yellow">Positive Impact.</span> & I strongly
              believe that technology can help me get closer to that goal.
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
