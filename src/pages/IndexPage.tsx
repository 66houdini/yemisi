// export const PersonalizedHeader = ({ bg }: { bg: string }) => {
//   return (
//     <>
//       <div
//         className={`md:flex grid p-5 w-full justify-between  text-white ${bg} absolute top-0 `}
//       >
//         <Link to="/" className=" text-2xl font-bold">
//           OLUWAYEMISI ADEBAYO
//         </Link>
//         <div className=" space-x-5 md:space-x-10 text-sm  font-medium items-center grid grid-cols-3 md:flex">
//           {/* <a href="/">HOME</a> */}
//           <a href="/consulting">CONSULTING</a>
//           <a href="/coaching">COACHING</a>
//           <h1>
//             {" "}
//             <Dropdown />{" "}
//           </h1>
//           <h1>
//             <MediaDropdown />
//           </h1>
//           <a href="/contact">CONTACT</a>
//         </div>
//         <div className="space-x-4 content-center">
//           <Link to={"mailto: contact@yemisiadebayo.com"}>
//             <FontAwesomeIcon icon={faEnvelope} />
//           </Link>

//           <Link to={"https://www.x.com/Iamyemisikayode"}>
//             <FontAwesomeIcon icon={faXTwitter} />
//           </Link>

//           <Link to="https://www.linkedin.com/in/oluwayemisitopekayode/">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </Link>

//           <Link to="https://www.facebook.com/oluwayemisi.kayode.5">
//             <FontAwesomeIcon icon={faFacebook} />
//           </Link>

//           <Link to="https://www.instagram.com/iamyemisikayode/">
//             <FontAwesomeIcon icon={faInstagram} />
//           </Link>
//           <Link to="Iamyemisikayode">
//             <FontAwesomeIcon icon={faThreads} />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

export const PersonalizedHeader = ({ bg }: { bg: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inactiveClass = `md:flex grid grid-cols-2 p-5 w-full justify-between text-white ${bg} absolute top-0 z-30`;
  const activeClass = `md:flex grid grid-cols-2 p-5 w-full justify-between text-white bg-black absolute top-0 z-30`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        // className={`md:flex grid grid-cols-2 p-5 w-full justify-between text-white ${bg} absolute top-0 z-30`}
        className={isOpen ? activeClass : inactiveClass}
      >
        {/* Logo */}
        <Link to="/" className="md:text-2xl font-bold">
          OLUWAYEMISI ADEBAYO
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center justify-end">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>

        {/* Links & Icons (hidden on mobile, shown on larger screens) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } grid md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-10 mt-5 md:mt-0 text-sm font-medium items-center`}
        >
          <a href="/consulting" className="pr-5 md:pr-0">
            CONSULTING
          </a>
          <a href="/coaching">COACHING</a>
          <h1>
            <Dropdown />
          </h1>
          <h1>
            <MediaDropdown />
          </h1>
          <a href="/contact">CONTACT</a>

          {/* Social Media Links */}
          <div className="space-x-4 content-center">
            <Link to={"mailto:contact@yemisiadebayo.com"}>
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
      </div>
    </>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import Dropdown from "./components/Dropdown";
import MediaDropdown from "./components/MediaDropdown";
import NewsletterForm from "./components/Newsletter";

export default function IndexPage() {
  return (
    <>
      <PersonalizedHeader bg="bg-black" />
      {/* <div className="block md:hidden h-16"></div> */}
      <div
        id="intro"
        className="grid md:grid-cols-2 px-10 md:px-20 pt-10 pb-10 md:pb-0 md:pt-20 bg-black"
        // style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
      >
        <div>
          <img src="https://res.cloudinary.com/dador6eng/image/upload/v1727245918/yemisi/2_yf9z5n.jpg" />
        </div>
        <div className="text-white content-center ">
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
          To empower businesses and individuals to thrive in today’s competitive
          and evolving world. With the right strategies, insights, and support,
          I believe anyone can turn their aspirations into reality.
        </h2>
      </div>

      {/* Other sections of your page */}
      <div className="grid md:grid-cols-2 space-x-5 md:space-x-10 md:h-[350px]  text-white text-center mb-16 md:mb-32 mx-10 md:mx-20 my-5 md:my-10">
        <div className="w-fit md:w-[400px] justify-self-center">
          <h1 className="py-1 md:py-3 bg-primary md:w-[400px] ">Consultant</h1>
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727480409/C_C_6385_1_l7g9lc.jpg"
              className="md:h-[400px] md:w-[400px] object-cover object-top relative group-hover:brightness-50"
              alt="consultant"
            />
            <h2 className="absolute top-5 md:top-10 p-5 md:p-10 text-sm md:text-base text-justify tracking-wide invisible group-hover:visible transition duration-700">
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
        <div className="pt-5 md:pt-0 w-fit md:w-[400px] no-ml justify-self-center">
          <h1 className="py-1 md:py-3 bg-primary md:w-[400px]">Coach</h1>
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg"
              className=" md:h-[400px] md:w-[400px] object-cover object-top relative group-hover:brightness-50"
              alt="consultant"
            />
            <h2 className="absolute top-5 md:top-10 p-5 md:p-10 text-sm md:text-base text-justify tracking-wide invisible group-hover:visible transition duration-700">
              I am a passionate life coach. I have had the opportunity to coach
              professionals in various fields, including politics, education,
              oil and gas, and the creative industries, from artists to fashion
              designers. My coaching philosophy is grounded in the belief that
              personal development should be as normalized as physical training.
              I strive to help my clients raise their standards, set ambitious
              goals, and take decisive action toward achieving their dreams.
            </h2>
          </div>
        </div>
      </div>

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
              className="w-full h-[157px] md:w-[560px] md:h-[315px] pt-3 md:pt-0"
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
            // src="https://res.cloudinary.com/dador6eng/image/upload/v1727245842/yemisi/12_g3do9n.jpg"
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423689/yemisi/PSX_20241008_210120_ak59qj.jpg"
            className=" h-[550px] w-full object-cover object-top relative brightness-50"
          />
        </div>
        <div className=" absolute -top-3 md:-top-6 left-5 md:left-20 md:w-[500px] border-2 border-primary pt-10 md:pt-40 px-7 md:px-14 pb-10 md:pb-20 space-y-1.5 md:space-y-3">
          <div className="w-[175px] md:w-[350px] text-xl md:text-3xl font-bold ">
            <h1 className=" text-lg md:text-2xl font-medium border-t border-primary w-fit">
              As an
            </h1>{" "}
            EXPERIENCED CONSULTANT & LECTURER
          </div>
          <h1 className="w-[200px] md:w-[350px] text-sm font-light">
            I've had the privilege of teaching and consulting for various
            individuals and organizations, guiding them toward their goals with
            tailored strategies that drive growth and foster success. My
            approach focuses on identifying challenges, offering solutions, and
            implementing strategies that deliver measurable results.
          </h1>
        </div>
      </div>

      <div className="p-10 md:p-20">
        <h1 className="text-center text-lg md:text-2xl font-semibold md:py-5">
          Reviews from Clients
        </h1>
        <div className="grid md:grid-cols-2 gap-5 space-y-6 md:space-y-0">
          <div className="grid justify-items-center space-y-2 md:space-y-4 shadow-xl p-3">
            {/* <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
              className=" h-32 md:h-60 w-32 md:w-60 rounded-md object-cover object-top"
            /> */}
            <div className="grid justify-items-center">
              <h1 className="text-lg md:text-2xl font-semibold">
                Oluyemi Odofa, Food NC
              </h1>
              <h1 className="italic ">
                "We had ambitious plans to expand our market but we weren't
                clear where to begin. <strong>Oluwayemisi</strong> provided
                clear, actionable steps to help us break into new markets. Her
                approach to building partnerships was strategic and throughful
                and her guidance in navigating cultural and business differences
                enabled us to succeed faster than we expected"
              </h1>
            </div>
          </div>

          <div className="grid justify-items-center space-y-2 md:space-y-4 shadow-xl p-3">
            <div className="grid justify-items-center">
              <h1 className="text-lg md:text-2xl font-semibold">
                Farijun Faith
              </h1>
              <h1 className="italic">
                "Indeed, life is simple. We just need to live it freely". There
                were one of the statements to me, and they broight clarity to
                some difficult issues I was facing at the time. Thank you,
                <strong>Oluwayemisi Adebayo</strong>
              </h1>
            </div>
          </div>
          <div className="grid justify-items-center space-y-2 md:space-y-4 shadow-xl p-3">
            <div className="grid justify-items-center">
              <h1 className="text-lg md:text-2xl font-semibold">
                Dr. Nuro M,. Tech
              </h1>
              <h1 className="italic">
                Working with <strong>Oluwayemisi Adebayo</strong> has been a
                game changer for our brand. Her understanding of both local and
                international markets is unmatched. She helped us craft a
                tailored strtegy that significantly grew our customerr base
                within the first six months. Her keen insights and practical
                recommendations make her an invaluable partner for brands
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 md:py-14 px-10 md:px-40 border border-black">
        <h1 className="md:text-2xl pb-10">
          Take the opportunity to connect with me by scheduling a FREE 15-minute
          meeting. Let's discuss your goals, ideas, challenges and explore solutions
        </h1>
        <a href="https://calendly.com/oluwayemisiadebayo/15min" className="p-4 bg-black text-white">
          Book Now
        </a>
      </div>

      <div className=" justify-items-center">
        <h1 className="text-lg md:text-2xl font-semibold ">
          <div className="text-center pt-5 md:pt-10">
             Podcasts & News
          </div>

          <div className="grid p-5 md:p-10 md:px-20 space-y-4 space-x-4">
            <div id="1" className="relative group justify-self-center">
              {/* <iframe
                className="pb-3 rounded-md"
                // height="560"
                // width="315"
                height="500"
                width="1500"
                src="https://www.youtube.com/embed/U-CbJHz1PyQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe> */}
              <iframe
                className="pb-3 md:w-[900px] md:h-[400px]"
                src="https://www.youtube.com/embed/U-CbJHz1PyQ?si=hk9NimlhlZZEH60Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {/* <img src="https://res.cloudinary.com/dador6eng/image/upload/v1727349801/20_sipaxb.jpg" className=" rounded-md h-[300px] w-full object-cover" /> */}
              <div className="bg-primary p-3 w-fit rounded-md ">
                <Link to="/media#podcast" className=" text-white">
                  Podcasts
                </Link>
              </div>
            </div>
            <div className="relative grid  gap-4 md:pt-10 no-ml">
              <div id="news">
                <img
                  src="https://res.cloudinary.com/dador6eng/image/upload/v1732305714/yemisi/Project_4_copy_buqez0.jpg"
                  className="h-40 md:h-36 w-full md:w-[250px] object-cover object-top md:float-left rounded-md pr-2"
                />
                <h3 className=" text-start text-lg md:text-xl font-medium ">
                  TTS Initiative Project 100 Schools Activation
                </h3>
                <h1 className="text-start text-zinc-700 text-sm  font-light ">
                  Last week, we had the incredible opportunity to empower
                  another set of teens through our #100SchoolsEmpowerment
                  program. These bright young minds were guided on how to
                  develop their personal brand and harness online opportunities
                  for their growth.Save the date and anticipate more details on
                  how you can actively participate in this transformative
                  mentor-mentee program. TTS Spotlight is not just a gathering;
                  it’s a platform for young individuals dedicated to receiving a
                  positive impact and support for growth and development from
                  those who have gone ahead and are thriving in the chosen
                  field. Stay tuned for an enriching experience that goes beyond
                  the ordinary mentorship programme.
                </h1>
              </div>

              <div id="news" className="pt-5">
                <img
                  src="https://res.cloudinary.com/dador6eng/image/upload/v1732305714/yemisi/DD_daenwg.jpg"
                  className=" h-40 md:h-36 w-full md:w-[250px] object-cover object-top md:float-left rounded-md pr-2"
                />
                <h3 className=" text-start text-lg md:text-xl font-medium">
                  TTS Spotlight Program in December: A Unique Mentor-Mentee
                  Programme Launch
                </h3>
                <h1 className="text-start text-zinc-700 text-sm  font-light ">
                  In an exciting development, January 2024 marks the launch of
                  TTS spotlight, a unique mentor-mentee programme designed to
                  foster guidance and connection within our community. Whether
                  you’re a dedicated supporter, a valued partner, or someone
                  passionate about our cause, this initiative offers a special
                  opportunity to engage, share ideas, and build meaningful
                  connections.
                </h1>
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
          <h1 className="text-2xl md:text-6xl font-bold pb-3">
            Oluwayemisi Newsletter
          </h1>
          <span className="text-sm">
            Stay in the loop with the latest activities. Subscribe now!
          </span>
          <NewsletterForm />
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
