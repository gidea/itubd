import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Researchers = () => (
  <Layout>
    <Seo title="Research Commercialisation &amp; IP Patent Portfolio - ITU Business Development" />

    <section class="text-gray-800 body-font bg-gray-100">
      <div class="container px-5 py-10 mx-auto">
        <div id="content" class="flex flex-col text-center w-full">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Research commercialisation &amp; IP licensing</h1>
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
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24">



              <div className="prose prose-indigo prose-lg text-gray-800 lg:max-w-none">
                <div class="flex flex-col">
                  <h3 class="text-xs text-blue-800 bg-transparent	tracking-widest font-medium title-font uppercase mb-1">Our goal</h3>
                  <h2 class="sm:text-2xl text-2xl font-medium title-font text-gray-800 bg-transparent	">Transforming <span class="italic">inventions</span> into <br />valuable <span class="italic">innovations</span></h2>
                </div>
                <p>ITU Business Development’s mission is to support companies, in the earliest stages, that aim to develop services and products based on inventions and software from the IT University. Therefore, we offer support that will help such companies (so-called spin-offs) build a package to bring to venture capitalists or companies that might invest in their technology.</p>
                <p>ITU Business Development’s support package is tailored to each spin-off case but it can consist of a financial investment, a range of services (e.g. interim management support) or both.</p>
                <p>If your spin-off uses IP or software from your research at the IT University, your company also has to negotiate, on market terms, a license with either ITU Business Development or the IT University to use the IP commercially.</p>
                
                <h3 class="sm:text-lg text-lg font-medium title-font text-gray-800 bg-transparent	">Our criteria</h3>
                <p>When evaluating whether or not we will engage in your business case, we look at two things; firstly whether or not you have previous experience with commercialisation of research and secondly your level of engagement. The best-case scenario for us is where you have experience with research commercialisation (you have existing experience with starting a company) and you are also willing to invest both time and resources into the project.</p>
                <h3 class="sm:text-lg text-lg font-medium title-font text-gray-800 bg-transparent	">Our process</h3>
                <p>To be eligible for business support from ITU Business Development the spin-off that you wish to establish or already have established must be aiming to utilize Intellectual Property which has been disclosed to the IT University according to the Law on Inventions at Danish Research Organisations. If you are not sure how this works you can read more about the process of disclosing inventions at ITU.</p>
                <h3 class="sm:text-lg text-lg font-medium title-font text-gray-800 bg-transparent	">THE RIGHT TEAM</h3>
                <p>Forming a good team is a key component in taking your service or product to market but it might take time to find the right people.</p>
                <p>ITU Business Development can provide you with a range of services in the early start-up phase to fill the gap and/or we can match you with experienced entrepreneurs with a relevant background from the industry.</p>
                <p>Forming a good team is a key component in taking your service or product to market but it might take time to find the right people.</p>
              
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-800 lg:mt-0">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">We can help you with</h2>
                  <ul class="list-disc divide-y divide-gray-200">
                    <li>Company establishment</li>
                    <li>Interim Management</li>
                    <li>Business Model Development</li>
                    <li>Accounting &amp; Legal support</li>
                    <li>Market research</li>
                    <li>Team formation</li>
                    <li>Investor Relations</li>
                    <li>Strategic Advisory</li>
                  </ul>
                  </div>
                  <div class="bg-gray-100 p-6 mt-8 rounded-lg">

                  <StaticImage
                    src="../images/nikolaj.jpg"
                    class="h-80 rounded w-full object-cover object-center mb-6"
                    formats={["auto", "webp", "avif"]}
                    alt="Nikolaj Oppermann"
                    width={800}
                    height={600}
                  />
                  <h2 class="text-lg text-center text-gray-900 font-medium title-font">Nikolaj Oppermann, Chief Executive Officer</h2>
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-4">Get in touch:</h2>  
                  <p>We are always open to discuss a potential spin-off opportunity if you are a researcher at ITU and you are interested in commercialising your inventions. Contact ITU Business Development, to set up a meeting and discuss the commercial opportunity of your research.</p>

                    

                </div>

                <div class="bg-gray-100 p-6 mt-8 rounded-lg">
                <div class="flex flex-col items-center text-center justify-center">
                
                <h3 class="font-medium title-font mt-4 text-gray-900 bg-transparent	text-lg">Testimonial</h3>
                <p class="text-base text-gray-900 bg-transparent italic">"ITU Business Development has helped us transform our research idea into a company and is still today an active partner in moving our high potential company forward."</p>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <h3 class="font-medium title-font mt-4 text-gray-900 bg-transparent	text-lg">Kasper Støy, Flow Robotics</h3>
              </div>
                </div>


              
              </div>

              
            </div>

            <div class="pt-10">
              <div class="max-w-max lg:max-w-5xl mx-auto">

                <div class="flex flex-col">
                  <h3 class="text-xs text-blue-800 bg-transparent	tracking-widest font-medium title-font mb-1">Licensing opportunities</h3>
                  <h2 class="sm:text-2xl text-xl font-medium title-font text-gray-800 bg-transparent	">Inventions &amp; patents in our portfolio</h2>
                </div>
                <p>
                Intellectual property from the IT University including patented technologies, software, data and know-how is offered for commercial use under licence from ITU Business Development.
                </p>
                <p>ITU Business Development owns a range of technologies based on research from the IT University which is available for licensing. Licensing of university-based technologies can be a clever way for companies to gain access to valuable new knowledge which can provide the company with a new competitive advantage.</p>
                <p>If you would like to know more about the licensing opportunites currently available &amp; the latest technological developments from ITU researchers, you are very welcome to contact us and book a meeting.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  </Layout>
)

export default Researchers
