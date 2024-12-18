// import { Link } from "react-router-dom";
// import Header frsom "./Header";
import { PersonalizedHeader } from "./IndexPage";

export default function Projects() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727482703/MO3_jirgza.jpg"
              alt="about"
              className=" h-[300px] md:h-[600px] w-full object-left-top object-cover "
            />
          </div>
          {/* <Header/> */}
          <PersonalizedHeader bg="bg-transparent" />

          <div className=" border border-white text-white absolute w-[185px] h-[185px] md:w-[377px] md:h-[377px] top-24 md:top-44 left-10 md:left-20 flex">
            <div className="text-xl md:text-3xl font-semibold py-20 md:py-40 md:pt-52 pl-8 md:pl-16 flex">
              <h1>SELECTED <br/>  PROJECTS</h1>
              {/* <span className="border-t border-white ml-2">PROJECTS</span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 py-10 md:py-20 grid md:grid-cols-[2fr_1fr] text-blue-950 relative">
        <img
          src="https://res.cloudinary.com/dador6eng/image/upload/v1729811576/yemisi/lcca-rgb-640x361_llnggh.jpg"
          className="h-[500px] py-8 w-full object-cover object-top relative z-0"
        />
        <div className="py-10 md:py-20 px-5 md:px-10 border-2 border-primary space-y-5 relative z-10 -mt-12 md:-mt-0 md:-ml-16 ">
          <div className="text-lg md:text-2xl font-bold py-2 md:py-4 md:pl-12">
            <h1 className="text-xl font-medium border-t border-primary w-fit">
              London College of Contemporary Arts (LCCA)
            </h1>
            Lecturer - Creative Business
          </div>
          <h1 className="text-sm font-light md:pl-12">
            London College of Contemporary Arts (LCCA) offers students a unique
            advantage by providing access to thriving business hubs,
            unparalleled networking opportunities with industry leaders,
            creative inspiration from diverse cultures and exposure to the
            vibrant hospitality and fashion scenes, ensuring a comprehensive
            education that prepares graduates for successful careers in these
            dynamic industries. Our degrees are awarded by the University for
            the Creative Arts, the leading arts university in the National
            League Tables.
          </h1>
        </div>
      </div>

      <div className="px-5 md:px-10 py-10 md:py-20 grid md:grid-cols-[1fr_2fr] text-blue-950 relative">
        <div className="py-10 md:py-20 px-5 md:px-10 border-2 border-primary space-y-5 relative z-10 md:-mr-16 ">
          <div className="text-xl font-bold py-4 md:pr-12">
            <h1 className="text-2xl font-medium border-t border-primary w-fit">
              Gracelandic Iceland Eco Mini Conference
            </h1>
            Design Consultant
          </div>
          <h1 className="text-sm font-light md:pr-12">
            The Echo Conference is a groundbreaking event under our social
            initiatives focused on fostering inclusion and diversity in
            entrepreneurship and innovation across Iceland. The Echo Conference
            explored the theme: Social-Economic Empowerment for Sustainability
            in Iceland: Fostering Innovation through Inclusion, Diversity, and
            National Identity.
          </h1>
        </div>
        <img
          src="https://res.cloudinary.com/dador6eng/image/upload/v1727483097/Gracelandic_project1_c3mpbj.jpg"
          className="md:h-[500px] py-8 w-full  object-top object-scale-down relative z-0"
        />
      </div>

      <div className="relative">
        <div className="pt-7 md:pt-14 pb-24 px-5 md:px-20 grid md:grid-cols-2 text-blue-950">
          <div
            id="1"
            className="pt-7 md:pt-14 px-5 md:px-10 space-y-7 content-end relative"
          >
            <div className="absolute top-0 left-0  w-[100px] h-[2px] bg-primary"></div>

            <div className="absolute -top-7 left-0 h-[150px] w-[2px] bg-primary"></div>
            <h1 className="text-xl md:text-3xl font-bold">
              Arden University London
              <h2 className="text-base md:text-xl font-medium">
                Business Consultancy, Research & Customer Experience Lecturer
                <h3 className="text-sm font-light italic">
                  Ranked 16th out of 149 UK universities for student
                  satisfaction - Times Higher Education
                </h3>
              </h2>
            </h1>
            <h1 className="font-light text-sm md:text-base">
              Offering a combination of distance and blended learning degree
              courses to students in the UK and globally, Arden University
              provides access to the skills, knowledge, and opportunities our
              learners need to further their careers and achieve the success
              they deserve
            </h1>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <h1 className="text-sm font-semibold self-center">IMPACT</h1>
            </div>
          </div>
          <div id="2">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727483273/Arden_University_Lecturer_-_London_UK_rt9jlk.jpg"
              className=" h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727245863/yemisi/13_lbumxl.jpg"
            className=" h-[550px] w-full object-cover relative brightness-50"
          />
        </div>
        <div className=" absolute -top-6 left-10 md:left-20  md:w-[500px] border-2 border-primary pt-20 md:pt-40 px-7 md:px-14 pb-10 md:pb-20 space-y-6">
          <div className="w-[150px] md:w-[300px] text-xl md:text-3xl font-bold  space-y-2">
            <h1 className="text-lg md:text-2xl font-medium border-t border-primary w-fit">
              TTS
            </h1>{" "}
            INITIATIVE
            <h2 className="text-xl font-medium">Management Consultant</h2>
          </div>
          <h1 className="w-[300px] text-sm font-light">
            TTS Initiative is a dedicated Non-Governmental Organization
            committed to inspiring and empowering teenagers and young adults to
            realize their dreams and aspirations. Our mission is to create a
            world where these dreams are discovered, nurtured, celebrated, and
            fully supported, equipping individuals with the skills and knowledge
            they need to pursue their passions confidently.
          </h1>
        </div>
      </div>

      <div className="px-5 md:px-10 py-10 md:py-20 grid md:grid-cols-[2fr_1fr] text-blue-950 relative">
        <img
          src="https://res.cloudinary.com/dador6eng/image/upload/v1727245840/yemisi/14_optcyk.jpg"
          className="h-[500px] py-8 w-full object-cover object-top relative z-0"
        />
        <div className="py-10 md:py-20 px-5 md:px-10 border-2 border-primary space-y-5 relative z-10 -mt-12 md:-mt-0 md:-ml-16 ">
          <div className="text-lg md:text-2xl font-bold py-2 md:py-4 md:pl-12">
            <h1 className="text-xl font-medium border-t border-primary w-fit">
              AltSchool Africa
            </h1>
            Marketing Consultant (Contract)
          </div>
          <h1 className="text-sm font-light md:pl-12">
            AltSchool Africa offers a more effective “alternative” to
            traditional academic institutions, in that it explores and offers
            practical & functional learning with the aid of modern technology.
            We believe that learning elevates and success spreads. This is why
            we have strategically designed our programs and courses to propel
            our learners toward success in their chosen careers. This way, they
            become a source of inspiration in their respective communities while
            also contributing to socio-economic development. By the year 2030,
            we hope to have armed ten million Africans with profitable skills
            that will shape their own futures and the growth of the African
            continent.
          </h1>
        </div>
      </div>

      <div className="relative">
        {/* <div className="absolute top-0 right-[100px] h-[150px] w-[1px] bg-zinc-400"></div> */}

        <div className="pt-7 md:pt-14 pb-12 md:pb-24 px-5 md:px-20 grid md:grid-cols-2 text-blue-950">
          <div id="2">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245841/yemisi/women-tech_esch9i.jpg"
              className=" h-[370px] w-full object-cover"
            />
          </div>
          <div
            id="1"
            className="pt-7 md:pt-14 px-5 md:px-10 space-y-3.5 md:space-y-7 content-end relative"
          >
            <div className="absolute top-0 right-3  w-[100px] h-[2px] bg-primary"></div>
            <div className="absolute -top-3.5 md:-top-7 right-3 h-[150px] w-[2px] bg-primary"></div>

            <div className="absolute bottom-0 left-3  w-[100px] h-[2px] bg-primary"></div>

            <div className="absolute bottom-0 left-3 h-[100px] w-[2px] bg-primary"></div>
            <h1 className="text-xl md:text-3xl font-bold">
              WearetheWomeninTech London
              <h2 className="text-base md:text-xl font-medium">
                Digital Consultant
              </h2>
            </h1>
            <h1 className="font-light text-sm  md:text-base">
              We Are the Women In Tech is a passionate community dedicated to
              empowering and supporting women in the technology industry. We
              firmly believe that women have an invaluable role in shaping the
              future of technology, and we are committed to breaking down
              barriers and creating equal opportunities for all.
            </h1>
            <div className="flex py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <h1 className="text-sm font-semibold self-center">IMPACT</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full items-center justify-center h-fit relative pb-10 md:pb-20 ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/4_j5yqbd.jpg"
              alt="about"
              className=" h-[450px] w-full  object-top object-cover "
            />
          </div>

          <div className=" p-6 md:p-12 space-y-3 md:space-y-6 bg-white text-blue-950 absolute w-[250px]  md:w-[377px] top-8 md:top-16 left-10 md:left-20 ">
            <h1 className="text-base md:text-xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit text-lg md:text-2xl">
                TheEBConcept
              </h2>{" "}
              Lead Consultant & Executive
            </h1>
            <h1 className="text-sm font-light">
              {" "}
              We are a team of seasoned experts in marketing, advertising,
              communications, and brand strategy, with over a decade of
              experience delivering exceptional service to both B2B and B2C
              brands. Our approach blends creativity, innovation, and
              results-driven solutions to help brands thrive.
            </h1>
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727245874/yemisi/11_e3l1bf.jpg"
            className=" h-[550px] w-full object-cover relative brightness-50"
          />
        </div>
        <div className=" absolute -top-3 md:-top-6 right-10 md:right-20 md:w-[500px] border-2 border-primary pt-20 md:pt-40 px-7 md:px-14 pb-10 md:pb-20 space-y-6">
          <div className=" w-[150px] md:w-[300px] text-xl md:text-3xl font-bold  md:space-y-2">
            <h1 className="text-lg md:text-2xl font-medium border-t border-primary w-fit">
              FORT
            </h1>{" "}
            TYRES
            <h2 className="text-base md:text-xl font-medium">
              Marketing Consultant
            </h2>
          </div>
          <h1 className="w-[300px] text-sm font-light">
            We help individuals and businesses experience a stress free tyre
            care process. We sell, fix and provide maintenance services for all
            tyre brands and sizes at the convenience of your home and offices.
          </h1>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-[15px] md:left-[100px] h-[150px] w-[1px] bg-zinc-400"></div>

        <div className="pt-7 md:pt-14 pb-12 md:pb-24 px-5 md:px-20 grid md:grid-cols-2 text-blue-950">
          <div
            id="1"
            className="pt-7 md:pt-14  md:px-10 space-y-3.5 md:space-y-7 content-end"
          >
            <h1 className="text-xl md:text-3xl font-bold">
              Pecksgrey LTD
              <h2 className="text-base md:text-xl font-medium">
                Digital Marketing Consultant
              </h2>
            </h1>
            <h1 className="font-light text-sm  md:text-base">
              We offer engineering, procurement and construction services to
              clients seeking a prompt, high-quality, and cost-effective project
              delivery that meet functional and technical requirements.
            </h1>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <h1 className="text-sm font-semibold self-center">IMPACT</h1>
            </div>
          </div>
          <div id="2">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727483588/Pecksgrey_nj9ele.jpg"
              className=" h-[280px] w-full object-top object-cover "
            />
          </div>
        </div>
      </div>

      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727483810/WEST_GATE_IMAGE_55_1_wagqkt.jpg"
              alt="about"
              className="h-[400px] md:h-[450px] w-full object-cover object-top "
            />
          </div>

          <div className="p-6 md:p-12 space-y-3 md:space-y-6 bg-white text-blue-950 absolute w-[300px] md:w-[377px] top-8 md:top-16 left-10 md:left-20 ">
            <h1 className="text-base md:text-xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit text-lg md:text-2xl">
                Westgate Lifecare Mall
              </h2>{" "}
              Brand Consultant (Contract)
            </h1>
            <h1 className="text-sm font-light">
              {" "}
              Westgate Lifecare Mall is a one stop shopping mall website in
              Nigeria that offers a platform where customers can find and shop
              for all they need in one online store. Our strong partnership with
              top brands like Oraimo, Samsung, Infinix, Xiaomi, Diageo, Tecno,
              Adidas, Nike, Defacto, Trendyol, etc. guarantees our customers the
              cheapest prices on original brand products.
            </h1>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-[15px] md:left-[100px] h-[150px] w-[1px] bg-zinc-400"></div>

        <div className="pt-7 md:pt-14 pb-12 md:pb-24 px-5 md:px-20 grid md:grid-cols-2 text-blue-950">
          <div
            id="1"
            className="pt-7 md:pt-14  md:px-10 space-y-3.5 md:space-y-7 content-end"
          >
            <h1 className="text-xl md:text-3xl font-bold">
              DAE Young Entrepreneurial Program London
              <h2 className="text-base md:text-xl font-medium">
                Digital consultant
              </h2>
            </h1>
            <h1 className="font-light text-sm md:text-base">
              A career consultant dedicated to guiding individuals from jobs of
              necessity to fulfilling, purpose-driven careers. YEP is a 6-week
              workshop designed to provide support, guidance, and skills
              required to overcome barriers, scale-up, and build a business that
              truly fulfills you.
            </h1>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <h1 className="text-sm font-semibold self-center">IMPACT</h1>
            </div>
          </div>
          <div id="2" className=" content-center">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245844/yemisi/18_tjvhtp.jpg"
              className=" h-[280px] w-full object-cover "
            />
          </div>
        </div>
      </div>

      <div className="relative">
        {/* <div className="absolute top-0 right-[100px] h-[150px] w-[1px] bg-zinc-400"></div> */}

        <div className="pt-7 md:pt-14 pb-10 md:pb-24 px-10 md:px-20 grid md:grid-cols-2 text-blue-950">
          <div id="2">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728523266/yemisi/Standard_Chartered_headquarters_in_London-Front_view_g1scxf.jpg"
              className=" h-[370px] w-full object-cover"
            />
          </div>
          <div
            id="1"
            className="pt-7 md:pt-14 px-5 md:px-10 space-y-7 md:space-y-7 content-end relative"
          >
            <div className="absolute top-0 right-3  w-[100px] h-[2px] bg-primary"></div>
            <div className="absolute -top-7 right-3 h-[150px] w-[2px] bg-primary"></div>

            <div className="absolute bottom-0 left-3  w-[100px] h-[2px] bg-primary"></div>

            <div className="absolute bottom-0 left-3 h-[100px] w-[2px] bg-primary"></div>
            <h1 className="text-xl md:text-3xl font-bold">
              Standard Chartered Bank
              <h2 className="text-base md:text-xl font-medium">
                Creatives(contract)
              </h2>
            </h1>
            <h1 className="font-light text-sm md:text-base">
              We are a connector for corporates and financial institutions
              across the world’s most dynamic markets to unlock the most
              exciting growth opportunities. From transaction banking to
              financial markets and advisory services and solutions. From here,
              possibilities are everywhere.
            </h1>
            <div className="flex py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <h1 className="text-sm font-semibold self-center">IMPACT</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
