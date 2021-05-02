import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Work</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <p>{project.frontmatter.stack}</p>
                <h3>{project.frontmatter.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`
