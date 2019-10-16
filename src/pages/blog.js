import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

function _getPosts(posts) {
  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    return (
      <article key={node.fields.slug}>
        <header>
          <h3>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </article>
    )
  })
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const title = "Serialized thoughts."
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title={title} />
        <Bio />
        {_getPosts(posts)}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
