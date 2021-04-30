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
          <h3>Speicherprogrammierbare Steuerung</h3>
          <h5>Programmable logic controller</h5>
          <p>
            Ein Gerät, das zur Steuerung oder Regelung einer Maschine oder
            Anlage eingesetzt und auf digitaler Basis programmiert wird. Sie
            löst die „festverdrahtete“ verbindungsprogrammierte Steuerung in den
            meisten Bereichen ab.{" "}
          </p>
          <Link className={styles.btn} to="/projects">
            Beispiele
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
