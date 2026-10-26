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
          <h1 className="pr-5 md:pr-0">
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

import { useState } from "react";
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
import HorizontalScroller from "./components/HorizontalScroller";

const credentialLogos = [
  { name: "Advance HE", img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Logo_2_qrarga.png" },
  { name: "London School of Business Administration", img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900459/ebconcept/Logo_jqrgfb.png" },
  { name: "Chartered Management Institute UK", img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900460/ebconcept/Logo_6_hpn7c3.png" },
  { name: "Certified Management Consultant Nigeria", img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900458/ebconcept/Logo_5_fbggaq.png" },
  { name: "University of Bedfordshire", img: "https://res.cloudinary.com/dador6eng/image/upload/v1729807605/yemisi/niversity_of_Beds_lyy9rp.jpg" },
  { name: "APCON", img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Logo_4_v5clmr.png" },
  { name: "Institute of Management Consultants Nigeria", img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900461/ebconcept/Logo_8_wl1l2q.png" },
  { name: "The Coaching Academy UK", img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Logo_1_n9nnlm.png" },
];

const categoryCards = [
  {
    title: "Consulting",
    to: "/consulting",
    text: "Transforming operations, fostering sustainable growth and achieving strategic objectives.",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1727480409/C_C_6385_1_l7g9lc.jpg",
  },
  {
    title: "Coaching",
    to: "/coaching",
    text: "Personal development that helps you set ambitious goals and take decisive action.",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg",
  },
  {
    title: "Projects",
    to: "/projects",
    text: "Initiatives and engagements delivered with brands and communities.",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1727482703/MO3_jirgza.jpg",
  },
  {
    title: "Media",
    to: "/media",
    text: "Podcasts, interviews and news featuring Oluwayemisi.",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1732305714/yemisi/Project_4_copy_buqez0.jpg",
  },
  {
    title: "Certifications",
    to: "/certifications",
    text: "Qualifications and memberships from the UK and Nigeria.",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245874/yemisi/11_e3l1bf.jpg",
  },
  {
    title: "About",
    to: "/about",
    text: "The story, experience and philosophy behind the work.",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245918/yemisi/2_yf9z5n.jpg",
  },
];

const testimonials = [
  {
    name: "Oluyemi Odofa, Food NC",
    quote:
      "“We had ambitious plans to expand our market but we weren't clear where to begin. Oluwayemisi provided clear, actionable steps to help us break into new markets. Her approach to building partnerships was strategic and thoughtful and her guidance in navigating cultural and business differences enabled us to succeed faster than we expected.”",
  },
  {
    name: "Farijun Faith",
    quote:
      "“Indeed, life is simple. We just need to live it freely.” This was one of the statements made to me, and it brought clarity to some difficult issues I was facing at the time. Thank you, Oluwayemisi Adebayo.",
  },
  {
    name: "Dr. Nuro M, Tech",
    quote:
      "“Working with Oluwayemisi Adebayo has been a game changer for our brand. Her understanding of both local and international markets is unmatched. She helped us craft a tailored strategy that significantly grew our customer base within the first six months. Her keen insights and practical recommendations make her an invaluable partner for brands.”",
  },
];
export default function IndexPage() {
  return (
    <main className="bg-black text-white">
      <PersonalizedHeader bg="bg-black" />

      {/* Hero */}
      <div
        id="intro"
        className="relative flex min-h-screen flex-col bg-black overflow-hidden"
      >
        {/* Image layer behind the text */}
        <img
          src="https://res.cloudinary.com/dador6eng/image/upload/v1727245918/yemisi/2_yf9z5n.jpg"
          alt="Oluwayemisi Tope Adebayo"
          className="absolute inset-0 z-10 h-full w-full md:left-auto md:right-0 md:w-3/5 object-cover object-top opacity-80"
        />
        {/* Gradient so the text stays readable over the photo */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        {/* Name stacked in front of the image */}
        <div className="relative z-20 flex flex-1 items-center px-10 md:px-20 pt-24 md:pt-28 pb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight">
            Oluwayemisi
            <br />
            Tope
            <br />
            <span className="text-primary-light">Adebayo</span>
          </h1>
        </div>
        <a
          href="#mission"
          className="relative z-20 flex flex-col items-center gap-1 pb-8 text-primary-light uppercase tracking-widest text-sm font-semibold"
        >
          Scroll Down
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>

      {/* Credentials + mission */}
      <section
        id="mission"
        className="px-10 md:px-20 py-16 md:py-24 text-center"
      >
        <p className="text-primary-light uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
          Consultant &middot; Coach &middot; Lecturer
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-3xl md:text-5xl font-black uppercase leading-tight">
          Empowering businesses and individuals to thrive
        </h2>
        <div className="mx-auto my-6 h-[2px] w-16 bg-primary-light"></div>
        <p className="mx-auto max-w-3xl text-sm md:text-lg text-zinc-300">
          To empower businesses and individuals to thrive in today’s competitive
          and evolving world. With the right strategies, insights, and support,
          I believe anyone can turn their aspirations into reality.
        </p>
        <a
          href="https://calendly.com/oluwayemisiadebayo/15min"
          className="mt-8 inline-block rounded-md bg-primary-light px-8 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-white"
        >
          Book a Free 15-Minute Call
        </a>
      </section>

      {/* Credential logos strip */}
      <section className="border-y border-zinc-800 bg-zinc-950 py-8">
        <p className="mb-6 text-center text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-400">
          Certified &amp; recognised by
        </p>
        <div className="marquee overflow-hidden">
          <div className="marquee-track gap-6 pr-6">
            {[...credentialLogos, ...credentialLogos].map((logo, index) => (
              <div
                key={index}
                className="flex h-20 w-40 md:h-24 md:w-52 shrink-0 items-center justify-center rounded-md bg-white p-3"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About split: video + bio */}
      <section className="grid items-center gap-8 md:gap-16 px-10 md:px-20 py-16 md:py-24 md:grid-cols-2">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/46xMLEqNz8E?si=eyoQFz2uCADO3eIt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="space-y-5">
          <p className="text-primary-light uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            Over the past decade
          </h2>
          <p className="text-sm md:text-base font-light text-zinc-300">
            I have honed my skills and expertise in the realms of brand
            development, digital marketing, and strategic planning. My journey
            has been marked by a relentless pursuit of knowledge and a desire to
            push boundaries, enabling me to craft innovative solutions that
            address both challenges and opportunities in the marketplace.
          </p>
          <p className="text-sm md:text-base font-light text-zinc-300">
            With over 9 years of experience, I have had the privilege of working
            with hundreds of businesses across various sectors—from dynamic
            start-ups to established enterprises.
          </p>
          <Link
            to="/about"
            className="inline-block border-b-2 border-primary-light pb-1 font-semibold uppercase tracking-wide text-primary-light transition hover:text-white"
          >
            Read my story →
          </Link>
        </div>
      </section>

      {/* Closing pitch banner */}
      <section className="relative isolate overflow-hidden">
        <img
          src="https://res.cloudinary.com/dador6eng/image/upload/v1728423689/yemisi/PSX_20241008_210120_ak59qj.jpg"
          alt="Oluwayemisi Tope Adebayo lecturing"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top brightness-50"
        />
        <div className="px-10 md:px-20 py-20 md:py-32 md:max-w-3xl space-y-5">
          <p className="text-primary-light uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
            As an experienced consultant &amp; lecturer
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-tight">
            Let’s turn your goals into results
          </h2>
          <p className="text-sm md:text-lg font-light text-zinc-200">
            I’ve had the privilege of teaching and consulting for various
            individuals and organizations, guiding them toward their goals with
            tailored strategies that drive growth and foster success. Take the
            opportunity to connect with me by scheduling a FREE 15-minute
            meeting.
          </p>
          <a
            href="https://calendly.com/oluwayemisiadebayo/15min"
            className="inline-block rounded-md bg-primary px-8 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-primary-light hover:text-black"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Category cards */}
      <section className="px-10 md:px-20 py-16 md:py-24">
        <h2 className="pb-8 md:pb-12 text-center text-3xl md:text-5xl font-black uppercase">
          Explore
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group relative block aspect-[4/5] overflow-hidden rounded-md border border-zinc-800"
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 md:p-6">
                <h3 className="text-2xl font-black uppercase">{card.title}</h3>
                <p className="text-sm font-light text-zinc-300">{card.text}</p>
                <span className="inline-block border-b border-primary-light pb-0.5 text-sm font-semibold uppercase tracking-wide text-primary-light">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials: horizontal scroll */}
      <section className="px-5 md:px-20 pb-16 md:pb-24">
        <h2 className="pb-8 md:pb-12 text-center text-3xl md:text-5xl font-black uppercase">
          What people say
        </h2>
        <HorizontalScroller>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-4 rounded-md border border-zinc-800 bg-zinc-950 p-6 md:w-[420px]"
            >
              <blockquote className="italic text-zinc-300">
                {t.quote}
              </blockquote>
              <figcaption className="font-semibold text-primary-light">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </HorizontalScroller>
      </section>

      <div className=" justify-items-center">
        <h1 className="text-lg md:text-2xl font-semibold ">
          <div className="text-center pt-5 md:pt-10 uppercase tracking-wide">
            Podcasts & News
          </div>

          <div className="grid p-5 md:p-10 md:px-20 space-y-4 space-x-4">
            <div id="1" className="relative group justify-self-center">
              <iframe
                className="pb-3 md:w-[900px] md:h-[400px]"
                src="https://www.youtube.com/embed/U-CbJHz1PyQ?si=hk9NimlhlZZEH60Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
                <h1 className="text-start text-zinc-400 text-sm  font-light ">
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
                <h1 className="text-start text-zinc-400 text-sm  font-light ">
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

      <div className="relative grid place-content-center p-10 md:p-20 bg-black border-t border-zinc-800 text-white text-center">
        <div className="z-10">
          <h1 className="md:text-xl">Sign Up for</h1>
          <h1 className="text-2xl md:text-6xl font-bold pb-3">
            Oluwayemisi Newsletter
          </h1>
          <span className="text-sm text-zinc-300">
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
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
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
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
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
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

