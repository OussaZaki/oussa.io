import React from "react"
import { graphql } from "gatsby"
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMediumM,
} from "react-icons/fa"

import SEO from "../components/seo"
import "./profile.css"

class ProfilePage extends React.Component {
  render() {
    return (
      <div class="profile-container">
        <SEO title="Oussama Zaki · Writes beautiful code" />
        <section id="s1">
          <div class="container">
            <h1 class="center">Oussama Zaki.</h1>
            <h2 class="center">Simple human, writes beautiful code.</h2>
          </div>
        </section>

        <section id="s2">
          <div class="container">
            <p>
              Listen folks, I solve problems! spare me the Language, Framework
              and paradigm... Tho you can't beat me in Javascript.
            </p>
            <p>
              Currently enjoying building a <strong>smoooth</strong> shopping
              experience at Klarna.
            </p>
            <p>
              Here's what I believe in when building a product or solving a
              problem.
            </p>
            <p>
              <span class="li">
                {" "}
                - <strong>User experience</strong> first.
              </span>
              <span class="li">
                {" "}
                - Move <strong>fast</strong> and break things.
              </span>
              <span class="li">
                {" "}
                - <strong>Test</strong> smart not hard.
              </span>
              <span class="li">
                {" "}
                - Poor <strong>performance</strong> is a bug.
              </span>
            </p>
          </div>
        </section>
        <section id="s3">
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
                <FaGithubAlt class="social-icon" />
              </a>
              <a
                title="Find me on LinkedIn"
                href="https://www.linkedin.com/in/zakioussama/"
                rel="noopener"
              >
                <FaLinkedinIn class="social-icon" />
              </a>
              <a
                title="Follow me on Twitter"
                href="https://twitter.com/OussaZaki"
                rel="noopener"
              >
                <FaTwitter class="social-icon" />
              </a>
              <a
                title="check me on Instagram"
                href="https://instagram.com/theZaki/"
                rel="noopener"
              >
                <FaInstagram class="social-icon" />
              </a>
              <a
                title="read my stories on Mediun"
                href="https://medium.com/@thezaki"
                rel="noopener"
              >
                <FaMediumM class="social-icon" />
              </a>
            </div>
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
