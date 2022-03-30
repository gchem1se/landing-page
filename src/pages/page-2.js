import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import Input from "../components/Input"
import ReactLogo from "../../public/icons/tree-solid.svg"

import "./page-2.scss"


const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <section className="titleSection">
      Lorem ipsum dolor sit amet, consectetur
      <br />
      <Button text={"Act now!"}></Button>
    </section>
    <ReactLogo></ReactLogo>
    <form>
      <Input type="text" placeholder="Company name"/>
      <Input type="text" placeholder="Feedback email"/>
      <Input type="text" placeholder="Title"/>
      <Input type="text" placeholder="Send us a brief description of your expectations." className="big-input"/>
    </form>
  </Layout>
)

export default SecondPage
