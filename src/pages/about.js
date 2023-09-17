import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About ITU Business Development" />

    <section class="text-gray-800 body-font bg-gray-100">
      <div class="container px-5 py-10 mx-auto">
        <div id="content" class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About us</h1>
          <p class="lg:w-2/4 mx-auto leading-relaxed text-gray-700 text-base">ITU Business Development is a private limited company owned 100% by the IT University in Copenhagen, Denmark, focused on the commercialisation of new knowledge and technology.</p>
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
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24">



              <div className="prose prose-indigo prose-lg text-gray-800 lg:max-w-none">
                <div class="flex flex-col">
                  <h3 class="text-xs text-blue-800 bg-transparent	tracking-widest font-medium title-font mb-1">TECHNOLOGY TRANSFER OFFICE</h3>
                  <h2 class="sm:text-2xl text-xl font-medium title-font text-gray-800 bg-transparent	">A better way to commercialise research</h2>
                </div>
                <p>
                  The company was established in September 2014 in accordance with the Tech-Transfer Law for publicly funded institutions.</p>
                <p><span class="font-bold">Our mission</span> is, with a commercial aim and following market conditions, to manage activities in connection with technology transfer.</p>
                <p>
                  These activities include but are not limited to:
                </p>
                <ol class="list-decimal">
                  <li>Identification</li>
                  <li>Assessment</li>
                  <li>Protection</li>
                  <li>Marketing</li>
                  <li>Transfer</li>
                </ol>
                <p>
                  of new knowledge that can be used in a commercial setting.
                </p>
                <p>Currently we manage most technology transfer activities on behalf of the IT University and through our activities we proactively work to identify new and promising inventions which ITU Business Development may support and protect through direct investments.</p>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-800 lg:mt-0">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <StaticImage
                    src="../images/nikolaj.jpg"
                    class="h-80 rounded w-full object-cover object-center mb-6"
                    formats={["auto", "webp", "avif"]}
                    alt="Nikolaj Oppermann"
                    width={800}
                    height={600}
                  />
                  <h3 class="tracking-widest text-blue-800 text-xs font-medium title-font">Meet our CEO</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Nikolaj Oppermann</h2>
                  {/* <p class="leading-relaxed text-base"></p> */}
                </div>
              </div>
            </div>

            <div class="pt-10">
              <div class="max-w-max lg:max-w-5xl mx-auto">

                <div class="flex flex-col">
                  <h3 class="text-xs text-blue-800 bg-transparent	tracking-widest font-medium title-font mb-1">INVESTMENTS</h3>
                  <h2 class="sm:text-2xl text-xl font-medium title-font text-gray-800 bg-transparent	">A launchpad for development &amp; growth</h2>
                </div>
                <p>
                  ITU Business Development can acquire shares in other companies and fund subsidiary companies with the sole purpose of maturing an invention while protecting the IP rights (IPR).
                </p>
                <p>As we are a separate legal entity from the IT University this allows us to promote the transfer of knowledge and technologies from public research to industry and at the same time limit the economical risks to the capital investment of founding ITU Business Development.</p>
                <p>We can invest in both development companies (modningsselskaber) and university spin-offs in which the university still retain the rights to company IPR (through licensing agreements) or owns equity.</p>

              </div>
            </div>

            <section class="text-gray-800 mt-16 body-font bg-gray-100 p-6 rounded-lg">
              <div class="container py-10 mx-auto">
                <div class="flex flex-col text-center w-full">
                  <h2 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Board of Directors</h2>
                </div>
              </div>

              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class="h-full text-center">
                    <StaticImage
                      src="../images/gds.jpg"
                      class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      formats={["auto", "webp", "avif"]}
                      alt="Georg Dam Steffensen"
                      width={300}
                      height={300}
                    />
                    <p class="leading-relaxed">Georg is currently the University Director at ITU and prior head of Finance and HR. He is the executive chairman of the board for continuous education for university employees and head of the board for Danish University HR Managers</p>
                    <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Georg D. Steffensen</h2>
                    <p class="text-gray-700">Member of the board, ITU Universitetsdirektør</p>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class="h-full text-center">
                    <StaticImage
                      src="../images/adam.jpg"
                      class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      formats={["auto", "webp", "avif"]}
                      alt="Adam Hillestrøm"
                      width={300}
                      height={300}
                    />

                    <p class="leading-relaxed">Adam is an experienced operator, with a highly specialised background in both business administration and strategic management. Besides working with IP Portfolio management and technology transfer processes at ITU Business Development in the past, Adam is the Chairman of Flow Robotics A/S, a very promising robotics company and ITU spinout.</p>
                    <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Adam Hillestrøm</h2>
                    <p class="text-gray-700">Chairman of the board</p>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 p-4">
                  <div class="h-full text-center grayscale">
                    <StaticImage
                      src="../images/as.jpeg"
                      class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      formats={["auto", "webp", "avif"]}
                      alt="Anabella Stoica"
                      width={300}
                      height={300}
                    />

                    <p class="leading-relaxed">Anabella is as an experienced legal advisor and IP Specialist with an LL.M. in IP &amp; Information Law from Kings College, London and demonstrated success with counselling, managing, developing and negotiating IP-rights across the entertainment and media industry.</p>
                    <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Anabella Stoica</h2>
                    <p class="text-gray-700">Member of the board, Gyldendal</p>
                  </div>
                </div>
              </div>

            </section>

            <div class="mt-16">
              <div class="max-w-max lg:max-w-5xl mx-auto">
                <div class="flex flex-col">
                  <h3 class="text-xs text-blue-800 bg-transparent	tracking-widest font-medium title-font mb-1">PRESS</h3>
                  <h2 class="sm:text-2xl text-xl font-medium title-font text-gray-800 bg-transparent">Articles in the media</h2>

                  <ul class="divide-y divide-gray-200">

                  <li>
                      <a href="https://flow-robotics.com/news/flow-robotics-raises-over-10-meuro-in-a-series-a-investment-round/" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Flow Robotics raises over 10 mEuro in a Series A Investment Round

                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://trendsonline.dk/2016/05/20/robot-spin-fra-universitet-skal-revolutionere-laboratoriearbejde/" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">TrendsOnline.dk - Robot spin-out fra IT-Universitet skal revolutionere laboratoriearbejde
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://finans.dk/live/erhverv/ECE8664100/universal-robotsstifter-faar-millioner-til-nyt-roboteventyr" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Finans.dk - Universal Robots-stifter får millioner til nyt roboteventyr
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.berlingske.dk/virksomheder/dansk-forsker-rykker-ud-i-nyt-roboteventyr" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Berlingske.dk - Dansk forsker rykker ud i nyt roboteventyr
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.version2.dk/artikel/itu-aabner-investor-firma-til-startups-68476" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Version2.dk - ITU åbner investor-firma til startups
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="http://www.elek-data.dk/artikel/branche-og-teknologi/it-universitetet-vil-investere-i-start-up-virksomheder" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Elek-data.dk - IT-Universitetet vil investere i start-up virksomheder
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://finans.dk/live/erhverv/ECE8664100/universal-robotsstifter-faar-millioner-til-nyt-roboteventyr" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Finans.dk - Universal Robots-stifter får millioner til nyt roboteventyr
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://trendsonline.dk/2014/09/17/universitetet-vil-investere-startups/" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">TrendsOnline.dk - IT-Universitetet satser på startups med ny accelerator
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://politiken.dk/oekonomi/virksomheder/art5549864/Det-mindste-universitet-er-et-af-de-st%C3%B8rste-til-at-udkl%C3%A6kke-iv%C3%A6rks%C3%A6ttere" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Politiken.dk - Det mindste universitet er et af de største til at udklække iværksættere
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.version2.dk/artikel/it-universitetet-bedst-i-danmark-til-udklaekke-ivaerksaettere-69887" rel="nofollow" class="mt-3 text-blue-800 inline-flex items-center">Version2.dk - IT Universitetet bedst i Danmark til at udklække iværksættere
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default About
