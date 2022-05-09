/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Badge, Card } from "theme-ui"
import { Link } from "gatsby"

import Github from "../Icons/Github"
import Folder from "../Icons/Folder"

const ProjectCard = ({ title, ghLink, content, tags, slug }) => {
  return (
    <Card
      as="article"
      sx={{
        display: "flex",
        bg: "muted",
        alignText: "left",
        maxWidth: ["100%", "300px", "350px"],
        minWidth: ["300px", "300px", "350px"],
        maxHeight: ["250px", "300px", "300px"],
        minHeight: ["250px", "300px", "300px"],
      }}
    >
      <Link
        to={`/projects/${slug}/`}
        sx={{
          display: "grid",
          gap: [0, null, 2],
          p: [3, 4],
          minHeight: "100%",
        }}
      >
        <Box as="header">
          <Flex
            sx={{
              justifyContent: "space-between",
              color: "accent",
              mb: 2,
            }}
          >
            <Box sx={{ height: "25px", width: "25px", color: "primary" }}>
              <Folder />
            </Box>
            <Box sx={{ height: "25px", width: "25px", color: "accent" }}>
              <Github handle={ghLink} />
            </Box>
          </Flex>
          <Heading as="h3" sx={{ fontSize: 4 }}>
            {title}
          </Heading>
        </Box>
        <Text variant="p" sx={{ opacity: 0.8 }}>
          {content}
        </Text>
        <Box as="footer">
          <Flex
            sx={{
              height: "100%",
              alignItems: "end",
              gap: "6px",
            }}
          >
            {tags &&
              tags.map((t, index) => {
                return (
                  <Badge variant="tag" color="accent" key={index}>
                    {t}
                  </Badge>
                )
              })}
          </Flex>
        </Box>
      </Link>
    </Card>
  )
}

export default ProjectCard
