import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  const Posts = edges
    .map(edge => (
      <li>
        <Link
          to={edge.node.frontmatter.path}
          children={edge.node.frontmatter.title}
        />
      </li>
    ))
  return (
    <div>
      <h2>Posts:</h2>
      <ul>{Posts}</ul>
    </div>
  )
}


export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`