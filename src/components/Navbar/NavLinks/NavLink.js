import * as React from "react"
import { Button, Text } from "theme-ui"

const NavLink = ({ n, onClick, children }) => (
  <Button as="li" variant="nav" onClick={onClick}>
    <Text
      as="p"
      variant="pre"
      color="primary"
      sx={{ display: "unset", opacity: 0.9, mr: 1 }}
    >
      0{n}.
    </Text>{" "}
    {children}
    <Text as="span" />
  </Button>
)

export default NavLink
