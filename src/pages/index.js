import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Announcement from "../components/Announcement/Announcement"

const IndexPage = () => (
  <Layout>
    <Announcement />
    <Hero />
  </Layout>
)

export default IndexPage
