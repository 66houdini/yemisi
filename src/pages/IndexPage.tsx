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
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logos.white}
            alt="Oluwayemisi Adebayo logo"
            className="h-6 md:h-8 w-auto max-w-[180px] md:max-w-none"
          />
          <span className="hidden xl:block text-[11px] uppercase tracking-[0.2em] text-zinc-300">
            {tagline}
          </span>
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
          } col-span-2 grid md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-10 mt-5 md:mt-0 text-sm font-medium items-center`}
        >
          <Link to="/">HOME</Link>
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
import {
  beyondTheWork,
  calendlyUrl,
  firstStatement,
  images,
  logos,
  roleCards,
  secondStatement,
  shortStatement,
  tagline,
  testimonials,
} from "../content/site";

const roleLine = "Strategist | Entrepreneur | Lecturer | Investor | Coach | Disciple of God";

const ttsNews = [
  {
    title: "TTS Initiative Project 100 Schools Activation",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1732305714/yemisi/Project_4_copy_buqez0.jpg",
    text: "Last week, we had the incredible opportunity to empower another set of teens through our #100SchoolsEmpowerment program. These bright young minds were guided on how to develop their personal brand and harness online opportunities for their growth. Save the date and anticipate more details on how you can actively participate in this transformative mentor-mentee program. TTS Spotlight is not just a gathering; it’s a platform for young individuals dedicated to receiving a positive impact and support for growth and development from those who have gone ahead and are thriving in the chosen field. Stay tuned for an enriching experience that goes beyond the ordinary mentorship programme.",
  },
  {
    title: "TTS Spotlight Program in December: A Unique Mentor-Mentee Programme Launch",
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1732305714/yemisi/DD_daenwg.jpg",
    text: "In an exciting development, January 2024 marks the launch of TTS spotlight, a unique mentor-mentee programme designed to foster guidance and connection within our community. Whether you’re a dedicated supporter, a valued partner, or someone passionate about our cause, this initiative offers a special opportunity to engage, share ideas, and build meaningful connections.",
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
        <img
          src={images.stage}
          alt="Oluwayemisi Adebayo speaking on stage"
          className="absolute inset-0 z-10 h-full w-full object-cover object-[80%_center] md:object-center opacity-70"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-black/10 md:bg-gradient-to-r md:from-black md:via-black/70 md:to-black/10"></div>

        <div className="relative z-20 flex flex-1 flex-col justify-center px-6 md:px-20 pt-28 pb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight">
            Oluwayemisi
            <br />
            <span className="text-primary-light">Adebayo</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm md:text-lg uppercase tracking-[0.2em] text-zinc-200">
            {tagline}
          </p>
        </div>
        <a
          href="#statement"
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

      {/* First statement */}
      <section
        id="statement"
        data-statement="first"
        className="mx-auto max-w-4xl space-y-6 px-6 md:px-10 py-16 md:py-24 text-base md:text-lg font-light leading-relaxed text-zinc-200"
      >
        <div className="h-[2px] w-16 bg-primary-light"></div>
        {firstStatement.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </section>

      {/* Second statement */}
      <section
        data-statement="second"
        className="grid items-start gap-10 md:gap-16 border-t border-zinc-800 px-6 md:px-20 py-16 md:py-24 md:grid-cols-2"
      >
        <img
          src="https://res.cloudinary.com/dador6eng/image/upload/v1728423689/yemisi/PSX_20241008_210120_ak59qj.jpg"
          alt="Oluwayemisi Adebayo lecturing"
          loading="lazy"
          className="w-full rounded-md object-cover object-top md:sticky md:top-24 md:max-h-[80vh]"
        />
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
            {secondStatement.title}
          </h2>
          {secondStatement.paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="text-sm md:text-base font-light leading-relaxed text-zinc-300"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Short statement */}
      <section className="bg-zinc-950 border-y border-zinc-800 px-6 md:px-20 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          {shortStatement.map((line, i) => (
            <p
              key={line.slice(0, 40)}
              className={
                i === shortStatement.length - 1
                  ? "text-2xl md:text-4xl font-black uppercase italic text-primary-light"
                  : "text-xl md:text-3xl font-bold leading-snug"
              }
            >
              {line}
            </p>
          ))}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-md bg-primary-light px-8 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-white"
          >
            Contact Oluwayemisi Adebayo
          </a>
        </div>
      </section>

      {/* Role cards */}
      <section className="px-6 md:px-20 py-16 md:py-24">
        <h2 className="pb-8 md:pb-12 text-center text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-primary-light">
          {roleLine}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roleCards.map((card) => (
            <div
              key={card.title}
              data-role-card
              className="group relative aspect-[4/5] overflow-hidden rounded-md border border-zinc-800"
            >
              <img
                src={card.img}
                alt={`Oluwayemisi Adebayo, ${card.title}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 md:p-6">
                <h3 className="text-2xl font-black uppercase">{card.title}</h3>
                <p className="text-sm font-light text-zinc-200">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond The Work */}
      <section className="border-t border-zinc-800 px-6 md:px-20 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-black uppercase">
          {beyondTheWork.title}
        </h2>
        {beyondTheWork.paragraphs.map((p) => (
          <p
            key={p.slice(0, 40)}
            className="mt-6 max-w-3xl text-base md:text-lg font-light text-zinc-300"
          >
            {p}
          </p>
        ))}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {ttsNews.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-950"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-56 w-full object-cover object-top"
              />
              <div className="space-y-3 p-5">
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-zinc-400">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What People Say */}
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
              <blockquote className="italic text-zinc-300">{t.quote}</blockquote>
              <figcaption className="font-semibold text-primary-light">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </HorizontalScroller>
      </section>

      {/* Podcast */}
      <section className="border-t border-zinc-800 px-6 md:px-20 py-16 text-center">
        <h2 className="pb-8 text-3xl md:text-5xl font-black uppercase">Podcast</h2>
        <iframe
          className="mx-auto aspect-video w-full max-w-4xl"
          src="https://www.youtube.com/embed/U-CbJHz1PyQ?si=hk9NimlhlZZEH60Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <Link
          to="/media#podcast"
          className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-white"
        >
          More podcasts
        </Link>
      </section>


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

