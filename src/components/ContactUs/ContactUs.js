import React, { useState } from "react"
import styles from "./ContactUs.module.scss"

const ContactUs = () => {
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState("")

  // Form submit
  const onSubmit = async e => {
    e.preventDefault()
    setMessage("Submitting...")
    const formElements = [...e.currentTarget.elements]

    // Check honeypot
    const isValid =
      formElements.filter(elem => elem.name === "bot-field")[0].value === ""
    const validFormElements = isValid ? formElements : []
    if (validFormElements.length < 1) {
      setMessage("Looks like you've filled out too many fields..")
    } else {
      // Send form
      const filledOutElements = validFormElements
        .filter(elem => !!elem.value)
        .map(
          element =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&")

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setMessage("Message sent successfully!")
          setSent(true)
        })
        .catch(_ => {
          setMessage(
            "There was an error submitting the form, please email us at woofers@welovewoofers.com"
          )
        })
    }
  }
  return (
    <section className={styles.container}>
      <h2>Contact Us</h2>
      {!sent && (
        <>
          <p>
            Send us a message through the contact form below or email us at
            <span style={{ fontWeight: "600" }}>
              {" "}
              woofers@welovewoofers.com
            </span>{" "}
            and we'll get back to you as soon as possible!
          </p>

          <form
            className={styles.form}
            name="contact-form"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={e => onSubmit(e)}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact-form" />
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {message && <p className={styles.sent}>{message}</p>}
    </section>
  )
}

export default ContactUs
