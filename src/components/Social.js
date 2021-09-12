/** @jsx jsx */
import { jsx } from "theme-ui"

import * as styles from "../styles/Social.module.css"

const Social = () => {
  return (
    <ul className={`${styles.listInline} ${styles.socialLinks}`}>
      <li>
        <a
          sx={{ variant: "styles.a" }}
          href="https://github.com/aron-hd"
          className={`${styles.btnSocial} ${styles.btnOutline}`}
          data-toggle="tooltip"
          data-placement="top"
          title="Github"
        >
          <i className="icon ion-social-github">G</i>
        </a>
      </li>
      <li>
        <a
          sx={{ variant: "styles.a" }}
          href="https://uk.linkedin.com/in/aron-hd"
          className={`${styles.btnSocial} ${styles.btnOutline}`}
          title="LinkedIn"
        >
          <i className="icon ion-social-linkedin">L</i>
        </a>
      </li>
    </ul>
  )
}

export default Social
