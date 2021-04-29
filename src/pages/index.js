import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
// import * as neumor from "../styles/neumor.module.css"
import { graphql } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hallo, ich bin Edin</h2>
          <h3>Web Entwicklung aus Leidenschaft</h3>
          <p>Web Entwickler </p>
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
