/** @jsx jsx */
import { Box, jsx, Text } from "theme-ui"
import { Fragment } from "react"
import styled from "@emotion/styled"

import Github from "./Github"
import Linkedin from "./Linkedin"
import Twitter from "./Twitter"
import Slack from "./Slack"

const StyledSocial = styled.ul`
  padding: 0;
  margin: 0;
  left: 10px;
  top: 45%;
  list-style: none;
  background: 0 0;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  li {
    -webkit-animation: fade-in-down 0.9s;
    animation: fade-in-down 0.9s;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    /* a:hover {
    } */
  }
  /* Animations  */
  @-webkit-keyframes fade-in-down {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes fade-in-down {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const Social = () => {
  return (
    <Fragment>
      <StyledSocial
        sx={{
          position: [null, null, "none", "fixed"],
          display: "flex",
          flexDirection: [null, null, "row", "column"],
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          px: "10px",
        }}
      >
        <Text as="li" variant="styles.socialIcon">
          <Slack handle="aron-hd" />
        </Text>
        <Text as="li" variant="styles.socialIcon">
          <Github handle="aron-hd" />
        </Text>
        <Text as="li" variant="styles.socialIcon">
          <Linkedin handle="aron-hd" />
        </Text>
        <Text as="li" variant="styles.socialIcon">
          <Twitter handle="_aronhd" />
        </Text>
        <Box
          as="span"
          sx={{
            display: ["none", "none", "none", "flex"],
            justifyContent: "center",
            height: "900vh",
            width: "1px",
            bg: "secondary",
            opacity: 0.2,
            boxShadow: "1 #000",
          }}
        />
      </StyledSocial>
    </Fragment>
  )
}

export default Social
