import { Link } from "react-router-dom";
import { PersonalizedHeader } from "./IndexPage";

export default function About() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative bg-zinc-500">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg"
              alt="about"
              className="h-[300px] md:h-[600px] w-full object-top object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[185px] h-[185px] md:w-[377px] md:h-[377px] top-24 md:top-44 left-10 md:left-20 flex">
            <h1 className="text-xl md:text-3xl font-semibold py-20 md:py-40 pl-8 md:pl-16 ">
              <h2 className="border-t border-white  w-fit ">ABOUT</h2>
              OLUWAYEMISI
            </h1>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-10 md:p-20 relative">
        {/* <div className="absolute top-0 left-[100px]  w-[100px] h-[2px] bg-primary"></div> */}

        {/* <div className="absolute bottom-[70px] left-[70px]  w-[100px] h-[2px] bg-primary"></div>

        <div className="absolute bottom-[70px] left-[70px] h-[150px] w-[2px] bg-primary"></div> */}

        <div id="2" className="">
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg"
            className="rounded-md"
          />
        </div>

        <div
          id="1"
          className="md:pl-5 mt-5 md:mt-0 space-y-5 font-light relative content-center"
        >
          <div className="absolute top-0 -right-3 md:right-3  w-[100px] h-[2px] bg-primary"></div>

          <div className="absolute -top-5 -right-3 md:right-3 h-[150px] w-[2px] bg-primary"></div>
          <h1 className="text-xl md:text-3xl font-medium">
            Oluwayemisi T. Adebayo
          </h1>
          <h2 className="text-sm md:text-base">
            Welcome to my corner of the web! I am a dedicated Business
            Consultant and Life Coach, deeply passionate about helping
            individuals and organizations achieve their goals and unlock their
            full potential.
          </h2>
          <h3 className="text-sm md:text-base">
            {" "}
            I am a visionary international brand and digital marketing
            consultant, lecturer, strategist, disruptive content creator, and
            entrepreneur. With a deep-seated passion for innovation and an
            unwavering commitment to excellence, I am dedicated to delivering
            tangible results that not only meet but exceed expectations in
            today’s fast-paced, ever-evolving digital landscape.
          </h3>
          <h2 className="text-sm md:text-base">
            My mission is simple: to empower businesses and individuals to
            thrive in today’s fast-paced, competitive landscape. I believe that
            with the right strategies, insights, and support, anyone can
            transform their aspirations into reality.
          </h2>

          <div className="absolute bottom-0 -left-3 md:left-[10px]  w-[100px] h-[2px] bg-primary"></div>

          <div className="absolute bottom-0 -left-3 md:left-[10px] h-[150px] w-[2px] bg-primary"></div>
        </div>
      </div>

      <div
        className="p-10 md:p-20 text-center grid justify-items-center bg-cover bg-center relative text-white"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/4_j5yqbd.jpg')",
        }}
      >
        <div className="absolute inset-0  backdrop-filter backdrop-brightness-50  z-0"></div>
        <div className="z-10">
          <h1 className="text-xl md:text-3xl">
            Ready to Transform Your Life and Business?
          </h1>
          <h2 className="md:w-[600px] text-justify font-light text-sm md:text-base">
            If you are ready to set your goals, commit to your vision, and take
            action toward a brighter future, I am here to support you every step
            of the way. Together, we can craft a roadmap for success that aligns
            with your values and aspirations.
          </h2>
          <div className="space-x-5 py-5">
            <Link
              to={"/consulting"}
              className="bg-primary text-white text-lg px-5 py-2 rounded-md"
            >
              Consultation
            </Link>
            <Link
              to={"/coaching"}
              className="bg-primary text-white text-lg px-5 py-2 rounded-md"
            >
              Coaching
            </Link>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-5 md:py-10">
        <h1 className="text-xl md:text-3xl text-center pb-4">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727655657/C_C_6501_1_t28gpn.jpg"
            className="rounded-md h-[260px] w-[260px]  object-top object-cover"
          />
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727655883/C_C_6520_oibnwq.jpg"
            className="rounded-md h-[260px] w-[260px]  object-cover"
          />
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728521522/yemisi/NGO_project_ybs2ll.jpg"
            className="rounded-md h-[260px] w-[260px]  object-cover"
          />
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728521520/yemisi/NGo__qcmeeb.jpg"
            className="rounded-md h-[260px] w-[260px]  object-cover"
          />
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727245831/yemisi/9_vqnexh.jpg"
            className="rounded-md h-[260px] w-full md:w-[260px] col-span-2  object-cover"
          />
        </div>
      </div>
    </>
  );
}
