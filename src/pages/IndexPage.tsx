export const PersonalizedHeader = ({ bg }: { bg: string }) => {
  return (
    <>
      <div
        className={`md:flex grid p-5 w-full justify-between  text-white ${bg} absolute top-0 `}
      >
        <Link to="/" className=" text-2xl font-bold">
          OLUWAYEMISI ADEBAYO
        </Link>
        <div className=" space-x-5 md:space-x-10 text-sm  font-medium items-center grid grid-cols-3 md:flex">
          {/* <a href="/">HOME</a> */}
          <a href="/consulting">CONSULTING</a>
          <a href="/coaching">COACHING</a>
          <h1>
            {" "}
            <Dropdown />{" "}
          </h1>
          <h1>
            <MediaDropdown />
          </h1>
          <a href="/contact">CONTACT</a>
        </div>
        <div className="space-x-4 content-center">
          <Link to={"mailto: contact@yemisiadebayo.com"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>

          <Link to={"https://www.x.com/Iamyemisikayode"}>
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>

          <Link to="https://www.linkedin.com/in/oluwayemisitopekayode/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link to="https://www.facebook.com/oluwayemisi.kayode.5">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link to="https://www.instagram.com/iamyemisikayode/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="Iamyemisikayode">
            <FontAwesomeIcon icon={faThreads} />
          </Link>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import Dropdown from "./components/Dropdown";
import MediaDropdown from "./components/MediaDropdown";

export default function IndexPage() {
  const handleSubmit: React.FormEventHandler = (event) =>
    event.preventDefault();

  return (
    <>
      <PersonalizedHeader bg="bg-black" />
      <div className="block md:hidden h-16"></div>
      <div
        id="intro"
        className="grid md:grid-cols-2 px-10 md:px-20 pt-10 pb-10 md:pb-0 md:pt-20 bg-black"
        // style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
      >
        <div>
          <img src="https://res.cloudinary.com/dador6eng/image/upload/v1727245918/yemisi/2_yf9z5n.jpg" />
        </div>
        <div className="text-white content-center md:content-normal">
          <div className="pb-3">
            <h1 className="font-medium">Oluwayemisi T. Adebayo</h1>
            <h2 className="text-2xl md:text-5xl font-black my-2 md:my-4 md:leading-tight">
              I HAVE SUCCESSFULLY DRIVEN RESULTS FOR HUNDREDS OF BRANDS ACROSS
              AFRICA & EUROPE
            </h2>
            <h3 className="font-medium md:text-xl">
              Are you ready to enhance your brand's results? If so, let's get to
              work.
            </h3>
          </div>
          <div className="flex space-x-2 md:space-x-5">
            <Link
              to={"/consulting"}
              className="py-1 md:py-2 px-1 md:px-6 bg-primary text-white rounded-md text-sm md:text-base"
            >
              Book Me - Consultation
            </Link>
            <Link
              to={"/coaching"}
              className="py-1 md:py-2 px-1 md:px-6 bg-primary text-white rounded-md text-sm md:text-base"
            >
              Book Me - Coaching
            </Link>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-10 px-10 md:px-20  text-center">
        <h1 className="text-xl md:text-3xl font-bold pb-5">Mission</h1>
        <h2 className="text-sm md:text-base">
          "To empower businesses and individuals to thrive in today’s
          fast-paced, competitive landscape. I believe that with the right
          strategies, insights, and support, anyone can transform their
          aspirations into reality."
        </h2>
      </div>

      {/* Other sections of your page */}
      <div className="grid md:grid-cols-2 space-x-5 md:space-x-10 md:h-[350px]  text-white text-center mb-16 md:mb-32 mx-10 md:mx-20 my-5 md:my-10">
        <div className="w-[400px]">
          <h1 className="py-1 md:py-3 bg-primary w-[400px] ">Consultant</h1>
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727480409/C_C_6385_1_l7g9lc.jpg"
              className=" h-[400px] w-[400px] object-cover object-top relative group-hover:brightness-50"
              alt="consultant"
            />
            <h2 className="absolute top-5 md:top-10 p-5 md:p-10 text-sm md:text-base text-justify invisible group-hover:visible transition duration-700">
              As a business consultant, I specialize in transforming operations,
              fostering sustainable growth, and achieving strategic objectives.
              With over 9 years of experience, I have had the privilege of
              working with hundreds of businesses across various sectors—from
              dynamic start-ups to established enterprises. My approach is
              rooted in delivering actionable insights, developing innovative
              strategies, and providing personalized solutions that drive
              measurable success.
            </h2>
          </div>
        </div>
        <div className="pt-5 md:pt-0 w-[400px]">
          <h1 className="py-1 md:py-3 bg-primary w-[400px]">Coach</h1>
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg"
              className=" h-[400px] w-[400px] object-cover object-top relative group-hover:brightness-50"
              alt="consultant"
            />
            <h2 className="absolute top-5 md:top-10 p-5 md:p-10 text-sm md:text-base text-justify invisible group-hover:visible transition duration-700">
              In addition to my consulting work, I am a passionate life coach. I
              have had the opportunity to coach professionals in various fields,
              including politics, education, oil and gas, and the creative
              industries, from artists to fashion designers. My coaching
              philosophy is grounded in the belief that personal development
              should be as normalized as physical training. I strive to help my
              clients raise their standards, set ambitious goals, and take
              decisive action toward achieving their dreams.
            </h2>
          </div>
        </div>
      </div>
      {/* <div
        id="expertise"
        className="p-20 grid grid-cols-2 gap-10 text-center text-sm"
      >
        <div className=" space-y-5">
          <img
            src="/img/man.png"
            alt="brand-consulting"
            className="h-20 inline"
          />
          <h1 className="text-lg font-semibold text-blue-950">
            BUSINESS CONSULTATION
          </h1>
          <h1 className="text-justify text-zinc-500">
            As a business consultant, I specialize in transforming operations,
            fostering sustainable growth, and achieving strategic objectives.
            With over 9 years of experience, I have had the privilege of working
            with hundreds of businesses across various sectors—from dynamic
            start-ups to established enterprises. My approach is rooted in
            delivering actionable insights, developing innovative strategies,
            and providing personalized solutions that drive measurable success.
          </h1>
          <h1 className="text-justify text-zinc-500">
            I am a certified expert in Management Consulting, Strategic
            Leadership, Business Management and holds a masters in Digital
            Marketing, with credentials from both the United Kingdom and
            Nigeria. I have worked in different executive positions in companies
            in the UK and Nigeria, also lecturing business management in
            universities in London, United Kingdom. This diverse background
            equips me with a unique perspective on the global market, enabling
            me to tailor solutions that meet your specific needs and challenges.
          </h1>
        </div>

        <div className="space-y-5">
          <img
            src="/img/investment.png"
            alt="brand-consulting"
            className="h-20 inline"
          />
          <h1 className="text-lg font-semibold text-blue-950">LIFE COACHING</h1>
          <h1 className="text-justify text-zinc-500">
            In addition to my consulting work, I am a passionate life coach. I
            have had the opportunity to coach professionals in various fields,
            including politics, education, oil and gas, and the creative
            industries, from artists to fashion designers. My coaching
            philosophy is grounded in the belief that personal development
            should be as normalized as physical training. I strive to help my
            clients raise their standards, set ambitious goals, and take
            decisive action toward achieving their dreams.
          </h1>
          <h1 className="text-justify text-zinc-500">
            My professional coaching training in the United Kingdom and my
            international coaching certifications empower me to guide
            individuals on their journey to self-discovery, growth, and
            fulfillment.
          </h1>
        </div>
      </div> */}
      {/*just added*/}
      {/* <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="/yemisi/6-copy.jpg"
              alt="about"
              className="h-40 md:h-[500px] w-full object-cover object-top"
            />
          </div>
          
          <div className=" p-10 space-y-6 bg-white text-blue-950 absolute  w-[377px] top-14 right-20 ">
            <h1 className="text-2xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit">OLUWAYEMISI</h2>{" "}
              T. ADEBAYO
            </h1>
            <h1 className="text-sm font-light">
              {" "}
              A visionary international brand and digital marketing consultant,
              lecturer, strategist, disruptive content creator, and
              entrepreneur. With a deep-seated passion for innovation and an
              unwavering commitment to excellence, I am dedicated to delivering
              tangible results that not only meet but exceed expectations in
              today’s fast-paced, ever-evolving digital landscape. I am a
              dedicated <strong>Business Consultant</strong> and{" "}
              <strong>Life Coach</strong>, deeply passionate about helping
              individuals and organizations achieve their goals and unlock their
              full potential.
            </h1>
          </div>
        </div>
      </div> */}

      <div className="relative">
        <div className="absolute top-7 md:top-14 left-[50px] md:left-[100px] w-[50px] md:w-[100px] h-[2px] bg-primary"></div>

        <div className="absolute top-7 md:top-14 left-[50px] md:left-[100px] h-[75px] md:h-[150px] w-[2px] bg-primary"></div>

        <div className="pt-7 md:pt-14 pb-12 md:pb-24 px-10 md:px-20 grid md:grid-cols-2 text-blue-950">
          <div
            id="1"
            className="pt-7 md:pt-14 px-7 md:px-14 space-y-3.5 md:space-y-7 content-end"
          >
            <h1 className="text-xl md:text-3xl font-bold">
              <h2 className="text-lg md:text-2xl font-medium">Over</h2> THE PAST
              DECADE
            </h1>
            <h1 className="font-light text-sm">
              I have honed my skills and expertise in the realms of brand
              development, digital marketing, and strategic planning. My journey
              has been marked by a relentless pursuit of knowledge and a desire
              to push boundaries, enabling me to craft innovative solutions that
              address both challenges and opportunities in the marketplace.
            </h1>
          </div>
          <div id="2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/46xMLEqNz8E?si=eyoQFz2uCADO3eIt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {/* <iframe src="https://www.youtube.com/embed/1w7OgIMMRc4" className="h-[300px] w-full object-cover"></iframe> */}
            {/* <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/3-copy_wfdeb2.jpg"
              className=" h-[280px] w-full object-top object-cover"
            /> */}
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727245842/yemisi/12_g3do9n.jpg"
            className=" h-[550px] w-full object-cover relative brightness-50"
          />
        </div>
        <div className=" absolute -top-3 md:-top-6 left-5 md:left-20 md:w-[500px] border-2 border-primary pt-10 md:pt-40 px-7 md:px-14 pb-10 md:pb-20 space-y-1.5 md:space-y-3">
          <div className="w-[175px] md:w-[350px] text-xl md:text-3xl font-bold ">
            <h1 className=" text-lg md:text-2xl font-medium border-t border-primary w-fit">
              As an
            </h1>{" "}
            EXPERIENCED LECTURER & STRATEGIST
          </div>
          <h1 className="w-[200px] md:w-[350px] text-sm font-light">
            I have had the privilege of mentoring countless individuals and
            organizations, guiding them to achieve their goals through tailored
            strategies that drive growth and foster success. My approach is
            rooted in a deep understanding of the digital ecosystem, combined
            with a creative flair that ensures each project stands out in a
            crowded marketplace.
          </h1>
        </div>
      </div>

      <div className="p-10 md:p-20">
        <h1 className="text-center text-lg md:text-2xl font-semibold md:py-5">
          Reviews from Clients
        </h1>
        <div className="grid md:grid-cols-2 space-y-6 md:space-y-0">
          <div className="grid justify-items-center space-y-2 md:space-y-4">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
              className=" h-32 md:h-60 w-32 md:w-60 rounded-md object-cover object-top"
            />
            <div className="grid justify-items-center">
              <h1 className="text-lg md:text-2xl font-semibold">John Doe</h1>
              <h1 className="italic">
                "I have worked with speaker from all over the world, she's top
                notch"
              </h1>
            </div>
          </div>

          <div className="grid justify-items-center space-y-2 md:space-y-4">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
              className=" h-32 md:h-60 w-32 md:w-60 rounded-md object-cover object-top"
            />
            <div className="grid justify-items-center">
              <h1 className="text-lg md:text-2xl font-semibold">John Doe</h1>
              <h1 className="italic">
                "I have worked with speaker from all over the world, she's top
                notch"
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" justify-items-center">
        <h1 className="text-lg md:text-2xl font-semibold text-center">
          You can also check out my Podcasts & News
          <div className="grid p-5 md:p-10 space-y-4 space-x-4">
            <div id="1" className="relative group justify-self-center">
              <iframe
                className="pb-3 rounded-md"
                height="560"
                width="315"
                src="https://www.youtube.com/embed/U-CbJHz1PyQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <img src="https://res.cloudinary.com/dador6eng/image/upload/v1727349801/20_sipaxb.jpg" className=" rounded-md h-[300px] w-full object-cover" /> */}
              <div className="bg-primary p-3 w-full rounded-md ">
                <Link to="/media#podcast" className=" text-white">
                  Podcasts
                </Link>
              </div>
            </div>
            <div className="relative grid md:grid-cols-2 gap-4">
              <div id="1">
                <img
                  src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
                  className=" w-full h-[400px] object-cover object-top"
                />
                <h3 className=" py-5  text-base font-medium hover:underline">
                  TTS Initiative Project 100 Schools Activation
                </h3>
                <h1 className=" text-zinc-700 text-sm font-light pb-5 ">
                  Last week, we had the incredible opportunity to empower
                  another set of teens through our #100SchoolsEmpowerment
                  program. These bright young minds were guided on how to
                  develop their personal brand and harness online opportunities
                  for their growth.
                </h1>
                <div className="bg-primary p-1.5 w-fit  rounded-md">
                  <Link
                    to="/media#news"
                    className=" text-base font-light text-white"
                  >
                    view more
                  </Link>
                </div>
              </div>
              <div id="1">
                <img
                  src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
                  className=" w-full h-[400px] object-cover object-top"
                />
                <h3 className=" py-5  text-base font-medium hover:underline">
                  TTS Spotlight Program in December: A Unique Mentor-Mentee
                  Programme Launch
                </h3>
                <h1 className=" text-zinc-700 text-sm font-light pb-5 ">
                  In an exciting development, January 2024 marks the launch of
                  TTS spotlight, a unique mentor-mentee programme designed to
                  foster guidance and connection within our community. Whether
                  you’re a dedicated supporter, a valued partner, or someone
                  passionate about our cause, this initiative offers a special
                  opportunity to engage, share ideas, and build meaningful
                  connections.
                </h1>
                <div className="bg-primary p-1.5 w-fit  rounded-md">
                  <Link
                    to="/media#news"
                    className=" text-base font-light text-white"
                  >
                    view more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div
        className="relative grid place-content-center p-10 md:p-20 bg-cover bg-fixed bg-zinc-700  text-white text-center"
        // style={{ backgroundImage: 'url("/img/sideways.jpg")' }}
      >
        {/* <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-brightness-100"></div> */}
        <div className="z-10">
          <h1 className="md:text-xl">Sign Up for</h1>
          <h1 className="text-3xl md:text-6xl font-bold pb-3">
            Oluwayemisi Newsletter
          </h1>
          <span>
            Stay in the loop with the latest activities. Subscribe now!
          </span>
          <form className="py-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-1.5 md:p-3 w-96 rounded-md"
            />
            <button className="p-2 md:p-4 bg-black text-white rounded-md">
              SUBSCRIBE
            </button>
          </form>
          <div className="flex justify-center space-x-5">
            <a href="mailto:contact@yemisiadebayo.com" className="">
              <svg
                className="w-8 h-8 text-white hover:bg-primary border-2 p-1 rounded-full "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg>
            </a>

            <a href="https://www.facebook.com/oluwayemisi.kayode.5">
              <svg
                className="w-8 h-8 text-white hover:bg-primary border-2 p-1 rounded-full "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="https://wwww.x.com/Iamyemisikayode">
              <svg
                className="w-8 h-8 text-white hover:bg-primary border-2 p-1 rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/iamyemisikayode/">
              <svg
                className="w-8 h-8 text-white hover:bg-primary border-2 p-1 rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/oluwayemisitopekayode/">
              <svg
                className="w-8 h-8 text-white hover:bg-primary border-2 p-1 rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
