import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
// import * as neumor from "../styles/neumor.module.css"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>UX Designer & Web Developer based in Vienna</p>
          <Link className={styles.btn} to="/projects">
            Mein Werk
          </Link>
        </div>
        {/* <div className={neumor.scene}>
          <div className={neumor.parent}>
            CSS IS
            <span className={neumor.awesome}>AWESOME</span>
          </div>
        </div> */}
        <img src="/coder.svg" alt="coder banner" style={{ maxWidth: "100%" }} />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
