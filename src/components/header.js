import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">ITU Business Development</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" href="/about">About us</a>
      <a class="mr-5 hover:text-gray-900" href="/partners">Partners</a>
      <a class="mr-5 hover:text-gray-900" href="/startups">Startups</a>
      <a class="mr-5 hover:text-gray-900" href="/research">Research</a>
    </nav>
    <button class="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base text-white mt-4 md:mt-0">Contact us
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
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
