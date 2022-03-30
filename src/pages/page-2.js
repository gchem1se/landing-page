import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"
import Button from "../components/Button"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Card></Card><br />
    <Button text={"Act now!"}></Button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
