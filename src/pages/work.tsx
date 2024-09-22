const PersonalizedHeader = () => {
  return (
    <>
     <div className="flex p-5 w-full justify-between  text-black bg-transparent ">
        <div className=" text-3xl font-bold">OLUWAYEMISI</div>
        <div className="  space-x-10 text-sm  font-medium content-center">
          <a href="/">HOME</a>
          <a href="/work-with-me">WORK WITH ME</a>
          <a href="/projects">PROJECTS</a>
          <a href="/contact">CONTACT</a>
        </div>
        <div className='space-x-4 content-center'>
      <FontAwesomeIcon icon={faEnvelope}  href='talktooluwayemisiadebyao.com' />
      <FontAwesomeIcon icon={faXTwitter} href='https://wwww.x.com/Iamyemisikayode' />
      <FontAwesomeIcon icon={faLinkedin} href='https://www.linkedin.com/in/oluwayemisitopekayode/' />
      <FontAwesomeIcon icon={faFacebook} href='https://www.facebook.com/oluwayemisi.kayode.5' />
      <FontAwesomeIcon icon={faInstagram} href='https://www.instagram.com/iamyemisikayode/' />
      <FontAwesomeIcon icon={faThreads} href='Iamyemisikayode' />
  </div>
      </div>
    </>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faFacebook, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import "../work.css";
export default function Work() {
  return (
    <>
    <PersonalizedHeader/>
      <h1 className=" text-center text-2xl font-bold text-blue-950 pt-5 py-10">
        Ready to Transform Your Life and Business?
      </h1>
      <div className="timeline bg-gray-800 text-white py-10 ">
        <div className="container left w-[550px]">
          <div className="content">
            <h1 className="text-xl medium">Business Consultation Packages </h1>

            <h2 className="text-xl font-medium">Digital Strategy</h2>
            <p className="text-sm font-light">
              In today’s competitive digital marketplace, a well-defined digital
              marketing strategy is essential for achieving your business goals
              and delivering measurable results. By booking this session, you
              will gain:
            </p>
            <ul className="text-sm font-light list-disc pl-5">
              <li>
                <strong>Understanding of Digital Marketing Platforms:</strong> I
                will guide you through how various digital marketing platforms
                operate and the different results they can produce.
              </li>
              <li>
                <strong>Platform Identification:</strong>
                Together, we’ll identify the digital marketing platform that
                best aligns with your business and brand needs.
              </li>
              <li>
                <strong>Results-Driven Strategies: </strong>I will provide you
                with effective strategies designed to guarantee positive
                outcomes for your marketing efforts.
              </li>
              <li>
                <strong>Lead Conversion System:</strong>
                You will receive a proven system for converting leads into
                sales, enhancing your overall profitability.
              </li>
              <li>
                <strong>Effective Management Techniques:</strong>
                Learn how to effectively manage your digital marketing space to
                maximize efficiency and impact.
              </li>
            </ul>
            <h1 className=" font-medium py-4">
              Cost: Starter $100(1 hour) | Advance: $400; Sessions ( 1 Month - 2
              Meetings)
            </h1>
            <div className="flex gap-4">
            <Link to="https://yemisi-booking.vercel.app/digital-strategy" target="_blank" className="px-4 py-2 bg-pink-400 rounded-md" >Book Now- starter</Link>
            <Link to="https://yemisi-booking.vercel.app/digital-strategy-advanced" target="_blank" className="px-4 py-2 bg-pink-400 rounded-md" >Book Now-Advanced</Link>

            </div>
          </div>
        </div>

        <div className="container right w-[550px]">
          <div className="content">
            <h1 className="text-xl medium">Business Consultation Packages </h1>

            <h2 className=" text-xl font-medium">Market Expansion</h2>
            <p className=" text-sm font-light">
              In today’s competitive business landscape, a well-defined market
              expansion strategy is crucial for reaching new customers and
              driving growth. By booking this session, you will gain:
            </p>
            <ul className=" text-sm font-light list-disc pl-5">
              <li>
                <strong> Understanding of New Markets:</strong>I will guide you
                through the process of identifying and evaluating potential
                markets for expansion, helping you understand the unique
                dynamics and opportunities they offer.
              </li>
              <li>
                <strong>Market Selection:</strong>
                Together, we’ll identify the most promising markets that align
                with your business goals and resources, ensuring a strategic and
                successful expansion.
              </li>
              <li>
                <strong>Growth-Oriented Strategies:</strong>I will provide you
                with tailored strategies that will ensure positive outcomes in
                your target markets, helping you scale efficiently.
              </li>
              <li>
                <strong>Customer Acquisition System:</strong>
                You will receive a proven system for attracting and converting
                new customers, increasing your market share and profitability.
              </li>
              <li>
                <strong>Effective Market Management:</strong>
                Learn how to manage your expansion efforts effectively, ensuring
                smooth operations and sustainable growth in new territories.
              </li>
            </ul>
            <h1 className="text-lg font-medium py-4">
              Cost: Starter $100(1 hour) | Advance: $400; Sessions ( 1 Month - 2
              Meetings)
            </h1>
            <div className="flex gap-4">
            <Link to="https://yemisi-booking.vercel.app/market-expansion" target="_blank" className="px-4 py-2 bg-pink-400 rounded-md" >Book Now- starter</Link>
            <Link to="https://yemisi-booking.vercel.app/market-expansion-advanced" target="_blank" className="px-4 py-2 bg-pink-400 rounded-md" >Book Now-Advanced</Link>

            </div>
          </div>
        </div>

        <div className="container left w-[550px]">
          <div className="content">
            <h1 className="text-xl medium"> Life Coaching Packages </h1>
            <h2 className=" text-xl font-medium">Personal Development</h2>
            <p className=" text-sm font-light">
              A well-defined personal development plan is essential for
              unlocking your full potential, achieving your life goals and
              having fulfillment. By booking this session, you will gain:
            </p>
            <ul className=" text-sm font-light list-disc pl-5"> 
              <li>
                {" "}
                <strong>Personal Growth:</strong> I will guide you through the
                key areas of personal development, helping you to improve your
                mindset, habits, and overall well-being.
              </li>
              <li>
                <strong>Self-Assessment and Goal Setting:</strong> Together,
                we’ll identify your strengths, challenges, and aspirations, and
                develop clear, actionable goals that align with your personal
                vision for success.
              </li>
              <li>
                <strong>Results-Driven Strategies:</strong> I will provide you
                with personalized strategies designed to help you achieve
                tangible improvements in your personal life.
              </li>
              <li>
                <strong>Actionable Growth System:</strong> We will create a step
                by step action that will help you achieve long-term personal
                growth.
              </li>
              <li>
                <strong>Overcoming challenges:</strong> You will get help on
                solutions to bypass your current challenges
              </li>
            </ul>
            <h1 className="text-lg font-medium py-4">
              Cost: Starter $100(1 hour) | Advance: $400; Sessions (3 Months - 1 meeting monthly)
            </h1>
            <div className="flex gap-4">
            <Link to="https://yemisi-booking.vercel.app/life-coaching" target="_blank" className="px-4 py-2 bg-pink-400 rounded-md" >Book Now- starter</Link>
            <Link to="https://yemisi-booking.vercel.app/life-coaching-advanced" target="_blank" className="px-4 py-2 bg-pink-400 rounded-md" >Book Now-Advanced</Link>

            </div>
          </div>
        </div>

        {/* <div className="container right w-[550px]">
          <div className="content">
            <h2 className=" text-xl font-medium">
              1 on 1 Coaching (Business/Individual): Schedule a meeting
            </h2>
            <p className=" text-sm font-light">
              If you aim to elevate your brand, refine your marketing
              strategies, or tackle complex business challenges, my expertise
              will provide the clarity and direction needed for meaningful
              growth. Booking a one-on-one session with me means investing in a
              partnership focused on driving your success.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
