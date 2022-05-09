import * as React from "react"
import { Heading, Text } from "theme-ui"

const SectionTitle = ({ n, children }) => (
  <Heading as="h2" sx={{ color: "text" }}>
    <Text variant="pre" color="primary" sx={{ opacity: 0.9 }}>
      0{n}.
    </Text>{" "}
    {children}
  </Heading>
)

export default SectionTitle
