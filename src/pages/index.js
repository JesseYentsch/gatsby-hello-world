import React from "react"
import {Link} from "gatsby"
import Header from '../components/Header'

export default function Home() {
  return <div style={{ color: `purple`}}>
    <Link  to='/contact/'>Contact Us </Link>
    <Header headerText = "Gatsby Site" />
    <p>My paragraph</p>
    
  </div>
}
