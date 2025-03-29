import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  padding: "96px",
  textAlign: "center",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Oops... Page not found | begh.in</title>
      <h1 style={headingStyles}>Oops... Page not found</h1>
      <p style={paragraphStyles}>
        Ope!{" "}
        <span role="img" aria-label="Pensive emoji">😔</span>{" "}
        I couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
