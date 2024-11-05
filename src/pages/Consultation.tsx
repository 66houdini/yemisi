import { PersonalizedHeader } from "./IndexPage";
import { Link } from "react-router-dom";
import "../work.css";

export default function Consultation() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className=" brightness-50">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1729791362/yemisi/MO1_dm8uox.jpg"
              alt="about"
              className=" h-[300px] md:h-[600px] w-full  object-cover object-left "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[185px] h-[185px] md:w-[377px] md:h-[377px] top-24 md:top-44 left-10 md:left-20 flex">
            <h1 className="text-xl md:text-3xl font-semibold py-20 md:py-40 pl-8 md:pl-16 flex">
              <h2 className="border-t border-white ">CON</h2>SULTATION
            </h1>
          </div>
        </div>
      </div>

      <div className=" text-black grid md:grid-cols-2 border-b border-b-white">
        <div className="p-10 space-y-4">
          <h1 className="text-2xl font-bold text-primary">
            BUSINESS CONSULTING
          </h1>
          <h2 className="font-light">
            As a business consultant, I specialize in transforming operations,
            fostering sustainable growth, and achieving strategic objectives.
            With over 9 years of experience, I have had the privilege of working
            with hundreds of businesses across various sectors—from dynamic
            startups to established enterprises. My approach is rooted in
            delivering actionable insights, developing innovative strategies,
            and providing personalized solutions that drive measurable success.
          </h2>
          <h2 className="font-light">
            I am certified in Business Research, Management Consulting,
            Strategic Leadership, and Business Management, and I hold a master’s
            in Digital Marketing, with credentials from both the United Kingdom
            and Nigeria. I have worked in different executive positions in
            companies in the UK and Nigeria, and I have also lectured in
            Business Management at universities in London, United Kingdom. This
            diverse background equips me with a unique perspective on the global
            market, enabling me to tailor solutions that meet your specific
            needs and challenges.
          </h2>
        </div>
        <div className="px-10 py-3 ">
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423695/yemisi/Business_consultation_emoae2.jpg"
            className=" object-cover object-top h-40 w-full md:h-[400px] rounded-lg "
          />
        </div>
      </div>

      <div className="text-black">
        <h1 className="text-center text-2xl font-semibold py-5 md:py-10">
          Business Consultation Packages
        </h1>
        <div className=" p-5  md:p-10 space-y-5 md:space-y-10">
          <div className="container grid md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <img
                src="https://res.cloudinary.com/dador6eng/image/upload/v1728423689/yemisi/Digital_Strategy_gnjbji.jpg"
                className="h-[300px] w-full object-cover object-left md:h-full md:w-full"
              />
            </div>
            <div className="content px-5 md:px-10 space-y-2 md:space-y-4">
              {/* <h1 className="text-xl medium">Business Consultation Packages </h1> */}

              <h2 className="text-2xl md:text-4xl font-medium">
                Digital Strategy
              </h2>
              <p className=" text-sm md:text-lg font-light">
                In today’s competitive digital marketplace, a well-defined
                digital marketing strategy is essential for achieving business
                goals and delivering measurable results. By booking this
                session, you will gain:
              </p>
              <ul className="text-sm md:text-lg font-light space-y-2">
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Understanding of Digital Marketing Platforms:</strong>{" "}
                  I will guide you through how various digital marketing
                  platforms operate and the different results they can produce.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Platform Identification: </strong>
                  Together, we’ll identify the digital marketing platform that
                  best aligns with your business and brand needs.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Results-Driven Strategies: </strong>I will provide you
                  with effective strategies designed to guarantee positive
                  outcomes for your marketing efforts.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Lead Conversion System: </strong>
                  You will receive a proven system for converting leads into
                  sales, enhancing your overall profitability.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Effective Management Techniques: </strong>
                  Learn how to effectively manage your digital marketing space
                  to maximize efficiency and impact.
                </li>
              </ul>
              <div className=" font-medium py-2 md:py-4">
                <div className="flex space-x-3 py-2">
                  <h1 className=" content-center">
                    Cost: Starter $100(1 hour)
                  </h1>
                  <Link
                    to="https://yemisi-booking.vercel.app/digital-strategy"
                    target="_blank"
                    className="px-2 md:px-4 py-1 md:py-2 bg-primary text-white rounded-md text-sm md:text-base"
                  >
                    Book Now- starter
                  </Link>
                </div>
                <div className="flex space-x-3 py-2">
                  <h1 className=" content-center ">
                    Advance: $400; Sessions ( 1 Month - 2 Meetings)
                  </h1>
                  <Link
                    to="https://yemisi-booking.vercel.app/digital-strategy-advanced"
                    target="_blank"
                    className="px-2 md:px-4 py-1 md:py-2 bg-primary text-white rounded-md text-sm md:text-base"
                  >
                    Book Now-Advanced
                  </Link>
                </div>
              </div>
              <div className="py-2 md:py-4 text-base md:text-xl italic">
                Who needs this: Individuals - Executives - Political leaders -
                Aspirants - Public Figures - Influencers
              </div>
            </div>
          </div>

          <div className=" grid md:grid-cols-[1.2fr_0.8fr]  md:pt-20">
            <div className="content   py-5 px-5 md:px-10 space-y-4">
              {/* <h1 className="text-xl medium">Business Consultation Packages </h1> */}

              <h2 className="text-2xl md:text-4xl font-medium">
                Market Expansion
              </h2>
              <p className="text-sm md:text-lg font-light">
                In today’s competitive business landscape, a well-defined market
                expansion strategy is crucial for reaching new customers and
                driving growth. By booking this session, you will gain:
              </p>
              <ul className=" text-sm md:text-lg font-light space-y-2">
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong> Understanding of New Markets: </strong>I will guide
                  you through the process of identifying and evaluating
                  potential markets for expansion, helping you understand the
                  unique dynamics and opportunities they offer.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Market Selection: </strong>
                  Together, we’ll identify the most promising markets that align
                  with your business goals and resources, ensuring a strategic
                  and successful expansion.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Growth-Oriented Strategies: </strong>I will provide
                  you with tailored strategies that will ensure positive
                  outcomes in your target markets, helping you scale
                  efficiently.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Customer Acquisition System: </strong>
                  You will receive a proven system for attracting and converting
                  new customers, increasing your market share and profitability.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Effective Market Management: </strong>
                  Learn how to manage your expansion efforts effectively,
                  ensuring smooth operations and sustainable growth in new
                  territories.
                </li>
              </ul>
              <div className=" font-medium py-2 md:py-4">
                <div className="flex space-x-3 py-2">
                  <h1 className=" content-center">
                    Cost: Starter $100(1 hour)
                  </h1>
                  <Link
                    to="https://yemisi-booking.vercel.app/market-expansion"
                    target="_blank"
                    className="px-4 py-2 bg-primary text-white rounded-md"
                  >
                    Book Now- starter
                  </Link>
                </div>
                <div className="flex space-x-3 py-2">
                  <h1 className=" content-center">
                    Advance: $400; Sessions ( 1 Month - 2 Meetings)
                  </h1>
                  <Link
                    to="https://yemisi-booking.vercel.app/market-expansion-advanced"
                    target="_blank"
                    className="px-4 py-2 bg-primary text-white rounded-md"
                  >
                    Book Now-Advanced
                  </Link>
                </div>
              </div>
              <div className="py-2 md:py-4 text-base md:text-xl italic">
                Who needs this: CEOs, Executive, Market Representatives.
              </div>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dador6eng/image/upload/v1728423689/yemisi/Market_expansion_muezco.jpg"
                className="h-[300px] w-full object-cover object-left md:h-full md:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-20">
        <h1 className="text-center text-lg md:text-2xl font-semibold md:py-5">
          Reviews from Clients
        </h1>
        <div className="grid md:grid-cols-2 gap-5 space-y-6 md:space-y-0">
          <div className="grid justify-items-center space-y-2 md:space-y-4 shadow-xl p-3">
            <div className="grid justify-items-center">
              <h1 className="text-lg md:text-2xl font-semibold">
                Oluyemi Odofa, Food NC
              </h1>
              <h1 className="italic ">
                "We had ambitious plans to expand our market but we weren't
                clear where to begin. <strong>Oluwayemisi</strong> provided
                clear, actionable steps to help us break into new markets. Her
                approach to building partnerships was strategic and thoughtful
                and her guidance in navigating cultural and business differences
                enabled us to succeed faster than we expected"
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
                tailored strategy that significantly grew our customer base
                within the first six months. Her keen insights and practical
                recommendations make her an invaluable partner for brands.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
