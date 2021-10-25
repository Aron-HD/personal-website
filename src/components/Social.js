/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Github from "./Icons/Github"
import Linkedin from "./Icons/Linkedin"

const StyledSocial = styled.ul`
  padding-left: 0;
  list-style: none;
  background: 0 0;
  transition: all 0.3s ease-in-out;
  li {
    display: inline-block;
    width: 48px;
    height: 48px;
    padding-left: 5px;
    padding-right: 5px;
    -webkit-animation: fade-in-down 0.9s;
    animation: fade-in-down 0.9s;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
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
    <StyledSocial>
      <li sx={{ variant: "styles.socialIcon" }}>
        <Github />
      </li>
      <li sx={{ variant: "styles.socialIcon" }}>
        <Linkedin />
      </li>
    </StyledSocial>
  )
}

export default Social
