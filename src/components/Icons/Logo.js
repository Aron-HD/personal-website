/** @jsx jsx */
import { Button, jsx } from "theme-ui"
// import { Link as GLink } from "gatsby"

const Logo = ({ scrollFunc }) => {
  return (
    <Button
      variant="nav"
      sx={{
        display: "flex",
        svg: {
          fill: "secondary",
        },
        "&:hover": {
          cursor: "pointer",
          svg: {
            fill: "primary",
            transition: "all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)",
          },
        },
      }}
      onClick={scrollFunc}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        title="Home"
      >
        <title>Home</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.6875 39.9624C31.6322 42.0122 27.9557 43.208 24 43.208C19.9292 43.208 16.1542 41.9416 13.0474 39.7814L23.6828 13.6559L28.8597 26.0114H22.2333L20.1395 31.3033H31.0685L34.6875 39.9624ZM39.3349 35.5684L27.1111 7.37452H20.5536L8.61452 35.5012C6.21389 32.295 4.79201 28.3135 4.79201 24C4.79201 13.3918 13.3918 4.79201 24 4.79201C34.6082 4.79201 43.208 13.3918 43.208 24C43.208 28.3437 41.7661 32.3506 39.3349 35.5684ZM48 24C48 37.2549 37.2549 48 24 48C10.7451 48 0 37.2549 0 24C0 10.7451 10.7451 0 24 0C37.2549 0 48 10.7451 48 24Z"
        />
      </svg>
    </Button>
  )
}

export default Logo
