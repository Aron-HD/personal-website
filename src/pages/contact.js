/** @jsx jsx */
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Input,
  jsx,
  Label,
  Textarea,
} from "theme-ui"
import { Fragment, forwardRef, useState, useRef } from "react"

import Seo from "../components/Seo"
import SectionTitle from "../components/SectionTitle"

const FieldSet = ({ children }) => (
  <Box as="fieldset" sx={{ border: "none", p: 0 }}>
    {children}
  </Box>
)

const ContactPage = forwardRef((props, ref) => {
  const [formState, setFormState] = useState({
    name: "",
    subject: "",
    message: "",
  })

  const contactForm = useRef()

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => alert("Success!"))
      .then(() => contactForm.current.reset())
      .catch(error => alert(error))
  }
  const pageName = "Contact"
  return (
    <Fragment>
      <Seo title={pageName} />
      <Container
        as="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={ref}
      >
        <Flex
          sx={{
            width: "80%",
            height: "80%",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <SectionTitle n="3">{pageName}</SectionTitle>
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid
              sx={{ width: "50%" }}
              ref={contactForm}
              as="form"
              name="Contact Form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              method="POST"
              action="/"
              onSubmit={handleSubmit}
            >
              <Input type="hidden" name="form-name" value="Contact Form" />
              <FieldSet>
                <Label htmlFor="name">Name</Label>
                <Input name="name" id="name" onChange={handleChange} required />
              </FieldSet>
              <FieldSet>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  name="subject"
                  id="subject"
                  onChange={handleChange}
                  required
                />
              </FieldSet>
              <FieldSet>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  rows={6}
                  onChange={handleChange}
                  required
                />
              </FieldSet>
              <Button type="submit">Submit</Button>
            </Grid>
          </Flex>
        </Flex>
      </Container>
    </Fragment>
  )
})

export default ContactPage
