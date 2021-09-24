import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [randomNameToday, setRandomNameToday] = React.useState("")
  React.useEffect(async () => {
    const getDate = new Date().getDate()
    const response = await fetch(`https://swapi.dev/api/people/${getDate}/`)
    if (response.status === 200) {
      const jsonData = await response.json()
      setRandomNameToday(jsonData.name)
    }
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <p>{randomNameToday}</p>
    </Layout>
  )
}

export default IndexPage
