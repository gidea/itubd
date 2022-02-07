import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import heylouise from "../images/heylouise.png";
import karlfarm from "../images/karl.png";
import marionette from "../images/marionette.png";
import resolved from "../images/resolved.png";
import forgotten from "../images/forgotten.png";
import divefm from "../images/divefm.png";

import ITU from "../images/atrium-itu.jpg";
import students from "../images/software.jpg";
import researchers from "../images/bridgingthegap.jpg";

const IndexPage = () => (
  <Layout>
    <Seo title="ITU Business Development A/S - Technology Transfer Office" />

    <section class="text-gray-600 body-font bg-gray-100">
      <div class="container px-5 py-24 mx-auto">
        <div id="content" class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Business Development at the IT University of Copenhagen</h1>
          <p class="lg:w-2/4 mx-auto leading-relaxed text-base">As hotbeds of new knowledge and technology, universities are essential catalysts of innovation. Since 1999, knowledge and technology from the IT University of Copenhagen have been converted to more than 100 faculty and student start-up companies, creating new wealth and jobs in the wider Danish society. Relative to its size, the IT University of Copenhagen is the number one university in Denmark when it comes to student venture creation.</p>
        </div>

        <div class="lg:w-2/3 mx-auto">
          <div class="flex flex-wrap w-full bg-gray-100 py-16 px-10 relative mb-4">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src={ITU} />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Licensing IP &amp; Technologies</h2>
              <p class="leading-relaxed text-sm text-black">Opportunities from our patent portfolio</p>
              <button class="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-sm text-white mt-4 md:mt-0">Learn more
              </button>
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 py-8 sm:py-6 sm:px-10 px-6 relative">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src={researchers} />
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Research Spinoffs</h2>
                  <p class="leading-relaxed text-sm text-black">Futher develop or commercialise your research</p>
                  <button class="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-sm text-white mt-4 md:mt-0">Learn more

                  </button>
                </div>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 py-8 sm:py-6 sm:px-10 px-6 relative">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src={students} />
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Student Startups</h2>
                  <p class="leading-relaxed text-sm text-black">Opportunities for students to start a company</p>
                  <button class="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-sm text-white mt-4 md:mt-0">Learn more
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class=" w-full bg-orange-200 px-5 py-24">
        <div class="flex flex-col text-center w-full mb-20 mx-auto">
          <h2 class="text-xs text-blue-800 tracking-widest font-medium title-font mb-1">Interested?</h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900"> This is how can we help you</h1>
          <p class="w-1/3 mx-auto text-sm leading-relaxed">The university has a well-established process for evaluating commercial potential of inventions created by faculty and PhD students, where some become attractive licensing opportunities or the basis for new spin-offs.</p>

        </div>
        <div class="lg:w-2/3 mx-auto flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h2 class="text-gray-900 pt-4 text-xl  title-font font-medium">For students</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">When you're starting a company for the first time, it can be a little intimidating. We make it easier with workshops, events &amp; activities which are meant to give you the proper network &amp; skills to start your own company and build a prototype.</p>
                <a class="mt-3 text-blue-800 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h2 class="text-gray-900 pt-4 text-xl title-font font-medium">For researchers</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">As a researcher you might have made an invention or a piece of software which is valuable but might still need work to be commercialised. With us onboard you can reach its true potential and spin-off into a standalone company with our help.</p>
                <a class="mt-3 text-blue-800 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 class="text-gray-900 pt-4 text-xl title-font font-medium">For Industry</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">Intellectual property stemming from research conducted at the IT University including patented technologies, software, data and know-how can be offered for commercial use, under licence from ITU Business Development A/S.</p>
                <a class="mt-3 text-blue-800 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">

        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col text-center w-full mb-10 mx-auto">
            <h3 class="text-xs text-blue-800 tracking-widest font-medium title-font mb-1">CASE STUDY</h3>
            <h2 class="sm:text-3xl mx-auto text-2xl font-medium title-font text-gray-900">From research to successful commercial product</h2>


          </div>

          <div class="rounded-lg h-64 overflow-hidden">
            <StaticImage
              src="../images/ituflowrobotics.png"
              class="object-cover object-center h-full w-full"
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: `1.45rem` }}
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Kasper Støy, Andres Faina</h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base">"ITU Business Development has helped us transform our research idea into a company and is still today an active partner in moving our high potential company forward."</p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">A new liquid handling robot developed as a spin-off company by researchers at the IT University of Copenhagen is set to improve work processes in laboratories by making it easy to automate repetitive and physically demanding tasks.</p>
              <p>Read more about the start of the company in the <a title="ITU Business Development" href="https://en.itu.dk/about-itu/press/news-from-itu/2016/itu-researchers-launch-robot-spin-out"> ITU press announcement</a></p>
              <a class="text-blue-700 inline-flex items-center" href="https://flow-robotics.com">Flow Robotics website
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Student Startups</h1>
          <div class="lg:pl-6 lg:w-2/3 mx-auto ">
          <p class="leading-relaxed text-base">Here are some of the student-led companies we've had the pleasure of supporting along the years.<br />The journey of starting a company and applying your knowledge in practice remains an invaluable experience!</p>
          <a class="text-blue-700 inline-flex items-center" href="https://itustartup.dk" title="ITU Startup Incubator">Read more about the startup incubator and our offers for students on ITUStartup.dk
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
          </a>
          </div>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <a href="https://heylouise.app" title="heyLouise - marketing collaboration" rel="dofollow">
                <img alt="heylouise marketing collaboration" class="w-full object-cover h-full object-center block" src={heylouise} />
              </a>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <a href="https://www.forgotten-game.com/" title="Forgotten - Game" rel="dofollow">
                <img alt="forgotten game development" class="w-full object-cover h-full object-center block" src={forgotten} />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full">
              <a href="https://marionettexr.com/" title="Marionette - SUITLESS MOTION CAPTURE" rel="dofollow">
                <img alt="marionette motion capture software" class="w-full h-full object-cover object-center block" src={marionette} />
              </a>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <a href="https://www.karl.farm/" title="KARLfarm - farming assistent" rel="dofollow">
                <img alt="karlfarm agritech monitoring" class="w-full h-full object-cover object-center block" src={karlfarm} />
              </a>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <a href="https://dive.fm" title="private podcasting" rel="dofollow">
                <img alt="private podcast platform" class="w-full object-cover h-full object-center block" src={divefm} />
              </a>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <a href="https://dive.fm" title="private podcasting" rel="dofollow">
                <img alt="account reconciliation" class="w-full object-cover h-full object-center block" src={resolved} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
