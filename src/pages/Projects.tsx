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
              src="/yemisi/11.jpg"
              alt="about"
              className=" h-[600px] w-full object-cover "
            />
          </div>
          {/* <Header/> */}
          <PersonalizedHeader bg="bg-transparent" />
          {/* <h1 className=" text-2xl md:text-5xl absolute text-white bottom-1/2 pl-10 md:pl-20">
              My Projects
            </h1> */}
          {/* <div className=" p-12 space-y-6 bg-white text-blue-950 absolute  w-[377px] top-32 left-20 ">
            <h1 className="text-2xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit">OUR</h2> MISSION
            </h1>
            <h1 className="text-sm font-light">
              {" "}
              Oluwayemisi serves as a powerful catalyst for change, dedicated to
              inspiring, educating, and empowering the next generation of
              leaders. Through a diverse array of dynamic events and engaging
              interactive platforms, she fosters personal growth and
              professional development, equipping young leaders with the tools
              and confidence needed to navigate challenges and create lasting
              impact in their communities and beyond.
            </h1>
            <Link to="/contact" className="flex font-semibold w-fit">
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
              <h1 className="text-sm self-center">CONTACT ME</h1>
            </Link>
          </div> */}
          <div className=" border border-white text-white absolute w-[377px] h-[377px] top-44 left-20 flex">
            <h1 className="text-3xl font-semibold py-40 pl-16 flex">
              <h2 className="border-t border-white">PRO</h2>JECTS
            </h1>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-[100px] h-[150px] w-[1px] bg-zinc-400"></div>

        <div className="pt-14 pb-24 px-20 grid grid-cols-2 text-blue-950">
          <div id="1" className="pt-14 px-10 space-y-7 content-end">
            <h1 className="text-3xl font-bold">
              Arden University London
              <h2 className="text-xl font-medium">
                Business Consultancy, Research & Customer Experience Lecturer
                <h3 className="text-sm font-light italic">
                  Ranked 16th out of 149 UK universities for student
                  satisfaction - Times Higher Education
                </h3>
              </h2>
            </h1>
            <h1 className="font-light text-base">
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
            <img src="/yemisi/8.jpg" className=" h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <div>
          <img
            src="/yemisi/13.jpg"
            className=" h-[550px] w-full object-cover relative brightness-50"
          />
        </div>
        <div className=" absolute -top-6 left-20 w-[500px] border-2 border-primary pt-40 px-14 pb-20 space-y-6">
          <div className="w-[300px] text-3xl font-bold  space-y-2">
            <h1 className=" text-2xl font-medium border-t border-primary w-fit">
              TTS
            </h1>{" "}
            INITIATIVE
            <h2 className="text-xl font-medium">Founder</h2>
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

      <div className="px-10 py-20 grid grid-cols-[2fr_1fr] text-blue-950 relative">
        <img
          src="/yemisi/14.jpg"
          className="h-[500px] py-8 w-full object-cover object-top relative z-0"
        />
        <div className="py-20 px-10 border-2 border-primary space-y-5 relative z-10 -ml-16 ">
          <div className="text-2xl font-bold py-4 pl-12">
            <h1 className="text-xl font-medium border-t border-primary w-fit">
              AltSchool Africa
            </h1>
            Marketing Consultant (Contract)
          </div>
          <h1 className="text-sm font-light pl-12">
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

      {/* <div
        className="bg-cover bg-center h-[400px] text-white relative"
        style={{ backgroundImage: 'url("/yemisi/15.jpg")' }}
      >
        <div className="absolute inset-0  backdrop-filter backdrop-brightness-50  z-0"></div>

        <div className="bg-white text-blue-950 z-10 absolute top-20 left-10 w-[600px] p-10 space-y-3">
          <h1 className="text-2xl font-medium  w-fit flex">
            {" "}
            <h2 className="border-t border-primary mr-3">MY </h2> PASSION
            PROJECT
          </h1>
          <h2 className="text-sm font-light">
            Beyond my professional endeavors, I am the proud creator of the TTS
            Initiative, a non-governmental organization dedicated to empowering
            teenagers and young adults. The TTS Initiative is more than just a
            platform; it is a movement that aims to bridge the gap between
            aspirations and achievements for young people across the globe
          </h2>
          <a href="https://ttsinitiative.com/" className="flex font-semibold">
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
            <h1 className="text-sm self-center">TTS Initiative</h1>
          </a>
        </div>
      </div> */}
      <div className="relative">
        <div className="absolute top-0 right-[100px] h-[150px] w-[1px] bg-zinc-400"></div>

        <div className="pt-14 pb-24 px-20 grid grid-cols-2 text-blue-950">
          <div id="2">
            <img
              src="/yemisi/8.jpg"
              className=" h-[370px] w-full object-cover"
            />
          </div>
          <div id="1" className="pt-14 px-10 space-y-7 content-end">
            <h1 className="text-3xl font-bold">
              WearetheWomeninTech London
              <h2 className="text-xl font-medium">Digital Consultant</h2>
            </h1>
            <h1 className="font-light text-base">
              We Are the Women In Tech is a passionate community dedicated to
              empowering and supporting women in the technology industry. We
              firmly believe that women have an invaluable role in shaping the
              future of technology, and we are committed to breaking down
              barriers and creating equal opportunities for all.
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
        </div>
      </div>

      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="/yemisi/11.jpg"
              alt="about"
              className=" h-[450px] w-full object-cover "
            />
          </div>

          <div className=" p-12 space-y-6 bg-white text-blue-950 absolute  w-[377px] top-16 left-20 ">
            <h1 className="text-xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit text-2xl">
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

      <div className="px-10 py-20 grid grid-cols-[1fr_2fr] text-blue-950 relative">
        <div className="py-20 px-10 border-2 border-primary space-y-5 relative z-10 -mr-16 ">
          <div className="text-xl font-bold py-4 pr-12">
            <h1 className="text-2xl font-medium border-t border-primary w-fit">
              Gracelandic Iceland Eco Mini Conference
            </h1>
            Design Consultant
          </div>
          <h1 className="text-sm font-light pr-12">
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
        <img
          src="/yemisi/14.jpg"
          className="h-[500px] py-8 w-full object-cover object-top relative z-0"
        />
      </div>
      <div className="relative text-white">
        <div>
          <img
            src="/yemisi/11.jpg"
            className=" h-[550px] w-full object-cover relative brightness-50"
          />
        </div>
        <div className=" absolute -top-6 right-20 w-[500px] border-2 border-primary pt-40 px-14 pb-20 space-y-6">
          <div className=" w-[300px] text-3xl font-bold  space-y-2">
            <h1 className="text-2xl font-medium border-t border-primary w-fit">
              FORT
            </h1>{" "}
            TYRES
            <h2 className="text-xl font-medium">Co-Founder</h2>
          </div>
          <h1 className="w-[300px] text-sm font-light">
            We help individuals and businesses experience a stress free tyre
            care process. We sell, fix and provide maintenance services for all
            tyre brands and sizes at the convenience of your home and offices.
          </h1>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-[100px] h-[150px] w-[1px] bg-zinc-400"></div>

        <div className="pt-14 pb-24 px-20 grid grid-cols-2 text-blue-950">
          <div id="1" className="pt-14 px-10 space-y-7 content-end">
            <h1 className="text-3xl font-bold">
              Peckagrey LTD
              <h2 className="text-xl font-medium">
                Digital Marketing Consultant
              </h2>
            </h1>
            <h1 className="font-light text-base">
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
            <img src="/yemisi/8.jpg" className=" h-[280px] w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="/yemisi/11.jpg"
              alt="about"
              className=" h-[450px] w-full object-cover "
            />
          </div>

          <div className=" p-12 space-y-6 bg-white text-blue-950 absolute  w-[377px] top-16 left-20 ">
            <h1 className="text-xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit text-2xl">
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
    </>
  );
}
