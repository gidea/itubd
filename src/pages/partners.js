import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Partners = () => (
  <Layout>
    <Seo title="Partnerships &amp; investor Network - ITU Business Development" />

    <section class="text-gray-800 body-font bg-gray-100">
      <div class="container px-5 py-10 mx-auto">
        <div id="content" class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Partnership &amp; Investor Network</h1>
          <p class="lg:w-2/4 mx-auto leading-relaxed text-gray-700 text-base">ITU Business Development collaborates with a number of external partners who in turn contribute their specialized and professional advice to entrepreneurs at the IT University.We can facilitate contact to the following investment companies for entrepreneurs at the IT University who are seeking investments for their startup companies.</p>
        </div>
      </div>
    </section>

    <div className="py-8 xl:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-5xl mx-auto">

        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
          </svg>

          <div className="relative bg-white">
      <div className="max-w-7xl mx-auto p-8 sm:px-6 lg:py-8 lg:px-8">
       
        <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Accelerace"/>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="DanBAN" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="PreSeed Ventures" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="DreamCraft Ventures" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="byFounders"/>
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" alt="Heartcore VC"/>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default Partners
