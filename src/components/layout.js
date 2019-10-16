import React from "react"
import { Link } from "gatsby"

import "./layout.css";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <div class="layout">
        <header class="container">{header}</header>
        <main class="container">{children}</main>
        <footer class="container">
          © {new Date().getFullYear()}, Nothing to see here.
        </footer>
      </div>
    )
  }
}

export default Layout
