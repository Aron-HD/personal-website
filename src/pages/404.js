import * as React from "react"

import ProjectLayout from "../components/ProjectLayout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <ProjectLayout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </ProjectLayout>
)

export default NotFoundPage
