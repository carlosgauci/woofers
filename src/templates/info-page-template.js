import React from "react"
import { graphql } from "gatsby"
import InfoPage from "../components/InfoPage/InfoPage"
import SEO from "../components/SEO/SEO"

const InfoPageTemplate = ({ data }) => {
  return (
    <>
      <SEO title={data.page.title} />
      <InfoPage page={data.page} />
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    page: contentfulWooferPages(slug: { eq: $slug }) {
      title
      slug
      content {
        content
      }
    }
  }
`
export default InfoPageTemplate
