import * as React from "react"
import { Link } from "gatsby"

import TabGroup from "../components/tabGroup"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import Input from "../components/Input"
import Bullet from "../components/Bullet"

import { faBolt, faUser, faRecycle } from "@fortawesome/free-solid-svg-icons"

import Netflix from "../images/Netflix"
import Google from "../images/Google"
import Microsoft from "../images/Microsoft"
import Polito from "../images/Polito"
import Jetop from "../images/Jetop"

import "./index.scss"
import ShoePrint from "../images/shoe_print";

const tabs = [
  {
    id: 1,
    properties: {},
    content: (
      <div className="tab-1">
        <Bullet icon={faUser} title="What we offer" sections={['We provide consulting services and courses aimed to guide you and your employees to a useful understanding of what the newest eco-friendly solutions in the IT and Tech world are\. We invite you to a green transition the planet will be grateful for.', <br />, 'Our lessons and guidelines cover two main principles: recycle your wastes in an intelligent way, convert to the use of renewable energy only.', <br />, 'We know these two goals are far from being easy to accomplish: we are here to help both you and the planet.']}/> 
      </div>
    )
  },
  {
    id: 2,
    properties: {
      initial: {
        height: "auto"
      },
      animate: {
        height: "auto"
      },
      exit: {
        height: "auto"
      }
    },
    content: (
      <div className="tab-1" >
        <Bullet icon={faBolt} title="Smarter energy leads to less expenses" sections={['Investing in a conversion to susteinable energy sources is going to become mandatory in the very next years.', <br />, 'Many IT companies, among the others, started this process with important and encouraging results. The transition should not interest only the sources, but also the end-users of that energy: the products your company build and the services it offers have to be energy efficient.', <br />, 'Luckily, efficient production lines are also the smartest ones. So you\'ll save money and time protecting Earth too: in a single word, your company can only evolve from this time on.', <br />, 'Wasting is becoming a crime. Don\'t be a criminal.']}/> 
      </div>
    )
  },
  {
    id: 3,
    properties: {},
    content: (
      <div className="tab-1" >
        <Bullet icon={faRecycle} title="Waste is a resource" sections={['So many companies have experienced the enormous advantages of using recycled materials and re-insert older products into the production chain. It\'s a matter of fact that primary resources of the Earth need to be safeguarded; also, a circular economy will only create benefits on short terms.',<br />,'But we aim to teach you that the classical recycling pattern has surely been expanded in several ways. For example, introducing trade-in programs to make customers return their old products is a great, modern way to approach circular economy: your customers will be happy to protect their home together with their favourite company.']}/>     
      </div>
    )
  }
]

const sponsors = [
  {
    key: 0,
    href: "https://netflix.com",
    id: "sponsor-netflix",
    logo: Netflix,
  },
  {
    key: 1,
    href: "https://google.com",
    id: "sponsor-google",
    logo: Google,
  },
  {
    key: 2,
    href: "https://microsoft.com",
    id: "sponsor-microsoft",
    logo: Microsoft,
  },
  {
    key: 3,
    href: "https://www.polito.it",
    id: "sponsor-polito",
    logo: Polito,
  },
  {
    key: 4,
    href: "https://jetop.com",
    id: "sponsor-jetop",
    logo: Jetop,
  },
]


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="titleSection">
      <div className="content">
        <h3>Leave a mark, not a footprint</h3>
        <p> 
          Here at Greenprint we help companies find their better self by giving back to the world what the world has given to them.
          <br/><br/>
          We are living in a period of environmental crisis, so we strive to make you run your business and at the same time help our planet.
          <br/><br/>
        </p>
        <Link href="#carousel" className="title-CTA"><Button text={"Act now!"} className="CTA-btn"></Button></Link>
      </div>
      <div className="banner-div">
        <ShoePrint className="banner-icon"/>
      </div>
    </section>
    <TabGroup
      className="carousel"
      id="carousel"
      tabs={tabs}
      slideshow={false}
    /> 
    <section class="join-us" id="contact-us">
      <p className="contact-us-title">Contact us for a consulting</p>
      <div className="join-us-content"> 
        <form className="tab-form" >
          <Input type="text" className="form-field" placeholder="Company Name" />
          <Input type="text" className="form-field" placeholder="Feedback Email" />
          <Input type="text" className="form-field" placeholder="Title" />
          <Input className="form-field" placeholder="Send us a brief description of your expectations." textarea={true}/>
          <Button type="submit" className="form-btn" >Join Us!</Button>
        </form>
        <div className="sponsors">
          <p>These are some of the companies that relied on our help:</p> 
          <div className="sponsors-icon">
            <ul className="logos-list">
              {
                sponsors.map((s) => <li key={s.key} id={s.id} className="sponsors-logo"><a href={s.href}>{s.logo()}</a></li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className = "newsletter" id="newsletter">
      <p className="newsletter-title">Want to hear news from us?</p>
      <p className="newsletter-subtitle">Subscribe to our newsletter. It's free!</p>
      <form className="newsletter-form">
        <Input type="text" className="newsletter-field" placeholder="Email" />
        <Button type="submit">Subscribe!</Button>
      </form>
    </section>
  </Layout>
)

export default IndexPage
