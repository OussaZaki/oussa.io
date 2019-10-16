import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import SocialList from "../containers/social-list"

import "./index.css"

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <SEO title="Oussama Zaki · Writes beautiful code" />
        <section id="s1">
          <div className="container">
            <h1 className="center">Oussama Zaki.</h1>
            <h2 className="center">Simple human, writes* beautiful code.</h2>
          </div>
        </section>

        <section id="s2">
          <div className="container">
            <p>
              Listen folks, I solve problems! Spare me the language, framework
              and paradigm debate... Javascript is the best tho.
            </p>
            <p>
              Currently enjoying building <strong>smoooth</strong> shopping
              experiences at Klarna.
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
            <p>* Tries to write</p>
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
              <a title="Email me" href="mailto:zaki.oussama@gmail.com">
                zaki.oussama@gmail.com
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
