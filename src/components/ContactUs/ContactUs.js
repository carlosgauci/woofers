import React from "react"
import styles from "./ContactUs.module.scss"

const ContactUs = () => {
  return (
    <section className={styles.container}>
      <h2>Contact Us</h2>
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
        action="/"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactUs
