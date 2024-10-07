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
            <p>
              Oussama Zaki — “Oussa” for short — is a Moroccan-born millennial
              who has traveled the world, merging his passions for culture, art,
              and technology. Now based in Stockholm, he brings a global
              perspective to the tech industry. His career is shaped by diverse
              experiences at major companies like Google, Klarna, Svea Solar,
              and Spotify.
            </p>
            <p>
              With a foundation in Computer Science, Oussa's career trajectory
              is a unique blend of art and engineering. His journey began with
              Combinatorial Optimization Algorithms and Heuristics, but soon
              expanded into the innovative field of human-computer interaction.
              Here, he discovered a new passion: merging the art of Design & UX
              with engineering excellence.
            </p>
            <p>
              Today, Oussa leads the Iteration Platform team at Miro. In this
              role, he aims to foster a culture of experimentation and
              continuous iteration, empowering teams to unleash their full
              creative potential in building the future of the visual workspace.
            </p>
            <div>
              <div>
                <h3>Things I'm currently Learning <br/><span class="yellow">—</span></h3>
                <ul>
                  <li>Parenting</li>
                  <li>Feature Flags</li>
                  <li>Experimentation</li>
                  <li>Developer Experience</li>
                  <li>Async Collaboration</li>
                  <li>Vertical Flying</li>
                </ul>
              </div>
              <div>
                <h3>Areas of Fascination <br/><span class="yellow">—</span></h3>
                <ul>
                  <li>Data Engineering</li>
                  <li>Applied Statistics</li>
                  <li>AI in the Workspace</li>
                </ul>
              </div>
              <div>
                <h3>You can trust Me With <br/><span class="yellow">—</span></h3>
                <ul>
                  <li>Building & nurturing healthy teams</li>
                  <li>Neo-Agile engineering practices</li>
                  <li>Problem discovery & user needs</li>
                  <li>Full-stack engineering</li>
                  <li>Design as Code</li>
                  <li>Crafting polished content; docs, slides...</li>
                  <li>Gourmet omelette recipes</li>
                </ul>
              </div>
            </div>
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
              <a title="Call me" href="tel:+46738429778">
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
