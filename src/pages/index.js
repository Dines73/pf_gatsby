import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home(data) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h3>Speicherprogrammierbare Steuerung</h3>

          <p>
            Digital arbeitendes elektronisches System für den Einsatz in
            industriellen Umgebungen mit einem programmierbaren Speicher zur
            internen Speicherung der anwenderorientierten Steuerungsanweisungen
            zur Implementierung spezifischer Funktionen wie z.B.
            Verknüpfungssteuerung, Ablaufsteuerung, Zeit, Zähl-und arithmetische
            Funktionen, um durch digitale oder analoge Eingangs-und
            Ausgangssignale verschiedene Arten von Maschinen und Prozessen zu
            steuern. Die speicherprogrammierbare Steuerung und die zugehörigen
            Peripheriegeräte (SPS-System) sind so konzipiert, dass sie sich
            leicht in ein industrielles Steuerungssystem integrieren und in
            allen ihren beabsichtigten Funktionen einsetzen lassen.
          </p>
          <Link className={styles.btn} to="/projects">
            mehr...
          </Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        {/* <img src="/coder.svg" alt="coder banner" style={{ maxWidth: "100%" }} /> */}
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `

export const query = graphql`
  query ImageQuery {
    file(relativePath: { eq: "coder.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
