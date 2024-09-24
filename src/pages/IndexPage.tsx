

export const PersonalizedHeader = ({bg}:{bg: string}) => {
  return (
    <>
      <div className={`flex p-5 w-full justify-between  text-white ${bg} absolute top-0 `}>
        <Link to="/" className=" text-2xl font-bold">OLUWAYEMISI ADEBAYO</Link>
        <div className="  space-x-10 text-sm  font-medium content-center flex">
          {/* <a href="/">HOME</a> */}
          <a href="/consulting">CONSULTING</a>
           <a href="/coaching">COACHING</a>
          <h1> <Dropdown/> </h1>
          <a href="/media">MEDIA</a>
          <a href="/contact">CONTACT</a>
        </div>
        <div className="space-x-4 content-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            href="talktooluwayemisiadebyao.com"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            href="https://wwww.x.com/Iamyemisikayode"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            href="https://www.linkedin.com/in/oluwayemisitopekayode/"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            href="https://www.facebook.com/oluwayemisi.kayode.5"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            href="https://www.instagram.com/iamyemisikayode/"
          />
          <FontAwesomeIcon icon={faThreads} href="Iamyemisikayode" />
        </div>
      </div>
    </>
  );
};

import React, { useEffect } from "react";
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



export default function IndexPage() {
  useEffect(() => {
    // JavaScript to handle the scroll animations for the timeline blocks
    function handleScroll() {
      const blocks = document.querySelectorAll(".cd-timeline__block");
      blocks.forEach((block) => {
        const img = block.querySelector(".cd-timeline__img");
        const content = block.querySelector(".cd-timeline__content");
        const blockTop = block.getBoundingClientRect().top;
        const isVisible = blockTop <= window.innerHeight * 0.8;

        if (isVisible) {
          img!.classList.add("cd-timeline__img--bounce-in");
          content!.classList.add("cd-timeline__content--bounce-in");
        } else {
          img!.classList.remove("cd-timeline__img--bounce-in");
          content!.classList.remove("cd-timeline__content--bounce-in");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit: React.FormEventHandler = (event) =>
    event.preventDefault();

  return (
    <>
      <PersonalizedHeader bg="bg-black" />
      <div
        id="intro"
        className="grid grid-cols-2 px-20 pt-20 bg-black"
        // style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
      >
        <div>
          <img src="/yemisi/2.png" />
        </div>
        <div className="text-white">
          <div className="pb-3">
            <h1 className="font-medium">Oluwayemisi T. Adebayo</h1>
            <h2 className="text-5xl font-black my-4 leading-tight">
              I HAVE SUCCESSFULLY DRIVEN RESULTS FOR HUNDREDS OF BRANDS ACROSS
              AFRICA, EUROPE, AND ASIA
            </h2>
            <h3 className="font-medium text-xl">
              Are you ready to enhance your brand's results? If so, let's get to
              work.
            </h3>
          </div>
          <div className="flex space-x-5">
          <Link
            to={"/consulting"}
            className="py-2 px-6 bg-primary text-white rounded-md"
          >
            Book Me- Consultation
          </Link>
          <Link
            to={"/coaching"}
            className="py-2 px-6 bg-primary text-white rounded-md"
          >
            Book Me- Coaching
          </Link>
          </div>
         
        </div>
      </div>


      <div className="p-10 px-20  text-center">
        <h1 className="text-3xl font-bold pb-5">Mission</h1>
        <h2>
        "Oluwayemisi serves as a powerful catalyst for change, dedicated to
              inspiring, educating, and empowering the next generation of
              leaders. Through a diverse array of dynamic events and engaging
              interactive platforms, she fosters personal growth and
              professional development, equipping young leaders with the tools
              and confidence needed to navigate challenges and create lasting
              impact in their communities and beyond."
        </h2>
      </div>

      {/* Other sections of your page */}
      <div className="grid grid-cols-2 space-x-10 h-[350px]  text-white text-center mb-32  mx-20 my-10">
        <div className="">
          <h1 className="py-3 bg-blue-950 ">Consultant</h1>
          <div className="relative group">
            <img
              src="/yemisi/2-copy.jpg"
              className=" h-[400px] w-full object-cover object-top relative group-hover:brightness-50"
              alt="consultant"
            />
            <h2 className="absolute top-10 p-10 text-justify invisible group-hover:visible transition duration-700">
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
        <div>
          <h1 className="py-3 bg-blue-950 ">Coach</h1>
          <div className="relative group">
             <img
            src="/yemisi/3.jpg"
            className=" h-[400px] w-full object-cover object-top relative group-hover:brightness-50"
            alt="consultant"
          />
          <h2 className="absolute top-10 p-10 text-justify invisible group-hover:visible transition duration-700">
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
        <div className="absolute top-0 left-[100px] h-[150px] w-[1px] bg-zinc-400"></div>

        <div className="pt-14 pb-24 px-20 grid grid-cols-2 text-blue-950">
          <div id="1" className="pt-14 px-14 space-y-7 content-end">
            <h1 className="text-3xl font-bold">
              <h2 className="text-2xl font-medium">Over</h2> THE PAST DECADE
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
            <img
              src="/yemisi/4.jpg"
              className=" h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <div>
          <img
            src="/yemisi/9.jpg"
            className=" h-[550px] w-full object-cover relative brightness-50"
          />
        </div>
        <div className=" absolute -top-6 left-20 w-[500px] border-2 border-primary pt-40 px-14 pb-20 space-y-3">
          <div className="w-[350px] text-3xl font-bold ">
            <h1 className=" text-2xl font-medium border-t border-primary w-fit">
              As an
            </h1>{" "}
            EXPERIENCED LECTURER & STRATEGIST
          </div>
          <h1 className="w-[350px] text-sm font-light">
            I have had the privilege of mentoring countless individuals and
            organizations, guiding them to achieve their goals through tailored
            strategies that drive growth and foster success. My approach is
            rooted in a deep understanding of the digital ecosystem, combined
            with a creative flair that ensures each project stands out in a
            crowded marketplace.
          </h1>
        </div>
      </div>

      {/* Vertical Timeline Section */}
      {/* <section className="cd-timeline js-cd-timeline p-5 md:p-20 ">
        <div className="container max-w-lg relative">
          <div className="absolute top-0 left-4 h-full w-1 bg-purple-400"></div>

          <div className="cd-timeline__block flex mb-10 ">
            <div className="cd-timeline__img flex items-center justify-center w-10 h-10 rounded-full bg-purple-400 cd-timeline__img--hidden">
              <img src="/vite.svg" alt="Picture" />
            </div>

            <div className="cd-timeline__content ml-10 cd-timeline__content--hidden bg-purple-400 p-3 rounded-md">
              <h2 className="text-xl font-bold">Oluwayemisi T. Adebayo</h2>
              <img src="/img/crowd.jpg" alt="brand-consulting" />
              <p className="color-contrast-medium text-sm">
                Oluwayemisi T. Adebayo, a visionary international brand and
                digital marketing consultant, lecturer, strategist, disruptive
                content creator, and entrepreneur. With a deep-seated passion
                for innovation and an unwavering commitment to excellence, I am
                dedicated to delivering tangible results that not only meet but
                exceed expectations in today’s fast-paced, ever-evolving digital
                landscape.
              </p>
            </div>
          </div>

          <div className="cd-timeline__block flex mb-10">
            <div className="cd-timeline__img flex items-center justify-center w-10 h-10 rounded-full bg-purple-400 cd-timeline__img--hidden">
              <img src="/vite.svg" alt="Picture" />
            </div>

            <div className="cd-timeline__content ml-10 cd-timeline__content--hidden bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-400 p-3 rounded-md">
              <h2 className="text-xl font-bold">Strategic Planning</h2>
              <img src="/img/crowd.jpg" alt="brand-consulting" />
              <p className="color-contrast-medium text-sm">
                Over the past decade, I have honed my skills and expertise in
                the realms of brand development, digital marketing, and
                strategic planning. My journey has been marked by a relentless
                pursuit of knowledge and a desire to push boundaries, enabling
                me to craft innovative solutions that address both challenges
                and opportunities in the marketplace.
              </p>
            </div>
          </div>

          <div className="cd-timeline__block flex mb-10">
            <div className="cd-timeline__img flex items-center justify-center w-10 h-10 rounded-full bg-purple-400 cd-timeline__img--hidden">
              <img src="/vite.svg" alt="Picture" />
            </div>

            <div className="cd-timeline__content ml-10 cd-timeline__content--hidden bg-purple-400 p-3 rounded-md">
              <img src="/img/crowd.jpg" alt="brand-consulting" />
              <p className="color-contrast-medium text-sm">
                As an experienced lecturer and strategist, I have had the
                privilege of mentoring countless individuals and organizations,
                guiding them to achieve their goals through tailored strategies
                that drive growth and foster success. My approach is rooted in a
                deep understanding of the digital ecosystem, combined with a
                creative flair that ensures each project stands out in a crowded
                marketplace.
              </p>
            </div>
          </div>

        </div>
      </section> */}
      <div className="p-20"></div>
      <div
        className="relative grid place-content-center p-20 bg-cover bg-fixed  text-white text-center"
        style={{ backgroundImage: 'url("/img/sideways.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-brightness-100"></div>
        <div className="z-10">
          <h1 className="text-xl">Sign Up for</h1>
          <h1 className="text-6xl font-bold pb-3">Oluwayemisi Newsletter</h1>
          <span>
            Stay in the loop with the latest activities. Subscribe now!
          </span>
          <form className="py-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-96 rounded-md"
            />
            <button className="p-4 bg-black text-white rounded-md">
              SUBSCRIBE
            </button>
          </form>
          <div className="flex justify-center space-x-5">
            <a href="mailto:talktooluwayemisiadebyao.com" className="">
              <svg
                className="w-8 h-8 text-white hover:bg-blue-950 border-2 p-1 rounded-full "
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
                className="w-8 h-8 text-white hover:bg-blue-950 border-2 p-1 rounded-full "
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
                className="w-8 h-8 text-white hover:bg-blue-950 border-2 p-1 rounded-full"
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
                className="w-8 h-8 text-white hover:bg-blue-950 border-2 p-1 rounded-full"
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
                className="w-8 h-8 text-white hover:bg-blue-950 border-2 p-1 rounded-full"
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
