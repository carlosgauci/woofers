import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Announcement from "../components/Announcement/Announcement"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"

const IndexPage = () => (
  <Layout>
    <Announcement />
    <Hero />
    <FeaturedProducts />
  </Layout>
)

export default IndexPage
