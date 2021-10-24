import * as React from "react"
import "../styles/index.css"

const pageStyle = {
  height: "100vh",
  backgroundColor: "red",
  backgroundImage: "linear-gradient(to right, red, #f06d06)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}
const headingStyle = {
  textAlign: "center",
  margin: 0,
  fontSize: "10vw",
  textDecoration: "underline",
}

const IndexPage = () => {
  return (
    <main style={pageStyle}>
      <title>begh.in</title>
      <h1 style={headingStyle}>
        https://begh.in
      </h1>
    </main>
  )
}

export default IndexPage
