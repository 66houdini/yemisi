import { PersonalizedHeader } from "./IndexPage";
import { Link } from "react-router-dom";
import "../work.css"


export default function Consultation() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/3-copy_wfdeb2.jpg"
              alt="about"
              className=" h-[600px] w-full object-top object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[377px] h-[377px] top-44 left-20 flex">
            <h1 className="text-3xl font-semibold py-40 pl-16 flex">
              <h2 className="border-t border-white ">CON</h2>SULTATION
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white grid md:grid-cols-2 border-b border-b-white">
        <div className="p-10 space-y-4">
          <h1 className="text-2xl font-bold text-orange-300">BUSINESS CONSULTING EXPERTISE</h1>
          <h2 className="font-light">
            As a business consultant, I specialize in transforming operations,
            fostering sustainable growth, and achieving strategic objectives.
            With over 9 years of experience, I have had the privilege of working
            with hundreds of businesses across various sectors—from dynamic
            start-ups to established enterprises. My approach is rooted in
            delivering actionable insights, developing innovative strategies,
            and providing personalized solutions that drive measurable success.
          </h2>
          <h2 className="font-light">
            I am a certified expert in Management Consulting, Strategic
            Leadership, Business Management and holds a masters in Digital
            Marketing, with credentials from both the United Kingdom and
            Nigeria. I have worked in different executive positions in companies
            in the UK and Nigeria, also lecturing business management in
            universities in London, United Kingdom. This diverse background
            equips me with a unique perspective on the global market, enabling
            me to tailor solutions that meet your specific needs and challenges.
          </h2>
        </div>
        <div className="p-3 ">
          <img src="https://res.cloudinary.com/dador6eng/image/upload/v1727245831/yemisi/19_p5d5ru.jpg" className=" object-cover h-full rounded-lg "/>
        </div>
      </div>

      <div className="">
        <h1 className="text-center text-2xl font-semibold py-5">Business Consultation Packages</h1>
        <div className="timeline bg-primary text-white py-10 ">
        <div className="container left w-[550px]">
          <div className="content">
            {/* <h1 className="text-xl medium">Business Consultation Packages </h1> */}

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
            <Link to="https://yemisi-booking.vercel.app/digital-strategy" target="_blank" className="px-4 py-2 bg-primary text-white rounded-md" >Book Now- starter</Link>
            <Link to="https://yemisi-booking.vercel.app/digital-strategy-advanced" target="_blank" className="px-4 py-2 bg-primary text-white rounded-md" >Book Now-Advanced</Link>

            </div>
          </div>
        </div>

        <div className="container right w-[550px]">
          <div className="content">
            {/* <h1 className="text-xl medium">Business Consultation Packages </h1> */}

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
            <Link to="https://yemisi-booking.vercel.app/market-expansion" target="_blank" className="px-4 py-2 bg-primary text-white rounded-md" >Book Now- starter</Link>
            <Link to="https://yemisi-booking.vercel.app/market-expansion-advanced" target="_blank" className="px-4 py-2 bg-primary text-white rounded-md" >Book Now-Advanced</Link>

            </div>
          </div>
        </div>

        

      </div>
      </div>

      <div>
        <h1 className="text-center text-2xl font-semibold py-5">Consultation Sessions</h1>
        <h2 className="text-center">Pictures here</h2>
      </div>
    </>
  );
}