import React from "react"
import Layout from "../components/layout"
// import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Dev Blog" description="Gatsbyを使って作ったブログです" />
      {data.allMarkdownRemark.nodes.map(node =>
        <PostLink post={node} key={node.id} />
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        id
        html
        fields{
          slug
        }
        frontmatter {
          date
          title
          description
          emoji
        }
      }
    }
    
  }
`