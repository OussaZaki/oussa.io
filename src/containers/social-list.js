import React from "react"

import SocialIcon from "../components/social-icon"
import "./social-list.css"

const SOCIALS = [
  {
    type: `twitter`,
    title: `follow me on Twitter`,
    href: `https://twitter.com/OussaZaki`,
  },
  {
    type: `github`,
    title: `oussazaki`,
    href: `https://github.com/OussaZaki`,
  },
  {
    type: `linkedin`,
    title: `find me on LinkedIn`,
    href: `https://www.linkedin.com/in/zakioussama/`,
  },
  {
    type: `instagram`,
    title: `check me on Instagram`,
    href: `https://instagram.com/theZaki/`,
  },
  {
    type: `medium`,
    title: `read my stories on Mediun`,
    href: `https://medium.com/@thezaki`,
  },
]

function _getSocialIcons(socials) {
  return socials.map(social => <SocialIcon key={social.type} {...social} />)
}

function SocialList() {
  return <div className="social-list">{_getSocialIcons(SOCIALS)}</div>
}

export default SocialList
