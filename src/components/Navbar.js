import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1 className="title">{title}</h1>
      <div className="links">
        <Link to="/">SPS</Link>
        <Link to="/about">Über</Link>
        <Link to="/projects">Aufgaben</Link>
      </div>
    </nav>
  )
}
