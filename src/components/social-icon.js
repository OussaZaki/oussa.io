import React from "react"
import PropTypes from "prop-types"
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMediumM,
} from "react-icons/fa"

import "./social-icon.css";

function _getIcon(type) {
  switch (type) {
    case "twitter":
      return <FaTwitter className="social-icon" />
    case "github":
      return <FaGithubAlt className="social-icon" />
    case "linkedin":
      return <FaLinkedinIn className="social-icon" />
    case "instagram":
      return <FaInstagram className="social-icon" />
    case "medium":
      return <FaMediumM className="social-icon" />

    default:
      return null
  }
}
function SocialIcon({ title, href, type }) {
  return (
    <a
      title={title}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="social-wrapper"
    >
      {_getIcon(type)}
    </a>
  )
}

SocialIcon.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default SocialIcon
