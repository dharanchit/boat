import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import file from "../files/resume.pdf"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <a download href={file}>
        Resume
      </a>
    </Layout>
  )
}

export default IndexPage
