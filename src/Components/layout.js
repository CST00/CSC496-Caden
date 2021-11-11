import * as React from 'react'
import { useState } from 'react'
import { Link, useStaticQuery,graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  const [dark,darkmodetoggle] = useState(true)

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    
    <div className={container}>
      
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/pokemon" className={navLinkText}>
              Pokemon Browser
            </Link>
          </li>
          
          <button onClick = {() => darkmodetoggle(!dark)}>
            {dark ? "Dark Mode" : "Light Mode"}
          </button>
          {dark ?document.body.style ='background: white'  : document.body.style = 'background:black'}
          
          

        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      
    </div>
    
    
  )
}

export default Layout