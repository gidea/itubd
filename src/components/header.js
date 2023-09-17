import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header class="text-gray-600 body-font">
    <a href="#content" class="sr-only focus:not-sr-only">Skip to content</a>
  <div class="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
    <a href="/">
    <StaticImage
              src="../images/itubd-logo.png"
              class="object-cover object-center bg-transparent"
              formats={["auto", "webp", "avif"]}
              alt="ITU Business Development"
              width={200}
              height={50}
            />
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" href="/about">About us</a>
      <a class="mr-5 hover:text-gray-900" href="/partners">Partners</a>
      <a class="mr-5 hover:text-gray-900" href="https://itustartup.dk">Startups</a>
      <a class="mr-5 hover:text-gray-900" href="/researchers">Research</a>
    </nav>
    <a  href="mailto:nopp@itu.dk" class="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-sm text-white mt-4 md:mt-0">Contact us
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
