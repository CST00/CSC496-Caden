import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/layout'
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
          <ul>
          {data.allWpPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.allWpPost }} />
        </div>
      ))}
      </ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWpPost (sort: { fields: [date] } ) {
      edges {
          node{
           title
           excerpt
           slug
          }
      }
    }
  }
`
export default BlogPage