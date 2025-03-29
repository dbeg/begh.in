import * as React from "react"
import "../styles/index.css"

const pageStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}
const headingStyle = {
  textAlign: "center",
  margin: 0,
  fontSize: "4vw",
  textDecoration: "underline",
}

const IndexPage = () => {
  return (
    <main id="gradient" style={pageStyle}>
      <title>begh.in</title>
      <h1 style={headingStyle}>
        begh.in
      </h1>
    </main>
  )
}

export default IndexPage
