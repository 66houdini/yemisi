import { PersonalizedHeader } from "./IndexPage";
import { Link } from "react-router-dom";
export default function Coach() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
              alt="about"
              className=" h-[600px] w-full object-top object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[377px] h-[377px] top-44 left-20 flex">
            <h1 className="text-3xl font-semibold py-40 pl-16 flex">
              <h2 className="border-t border-white ">COA</h2>CHING
            </h1>
          </div>
        </div>
      </div>

      <div className=" text-black grid md:grid-cols-2 border-b border-b-white">
        <div className="p-10 space-y-4">
          <h1 className="text-2xl font-bold text-orange-300">
            LIFE COACHING JOURNEY
          </h1>
          <h2 className="font-light">
            In addition to my consulting work, I am a passionate life coach. I
            have had the opportunity to coach professionals in various fields,
            including politics, education, oil and gas, and the creative
            industries, from artists to fashion designers. My coaching
            philosophy is grounded in the belief that personal development
            should be as normalized as physical training. I strive to help my
            clients raise their standards, set ambitious goals, and take
            decisive action toward achieving their dreams.
          </h2>
          <h2 className="font-light">
            My professional coaching training in the United Kingdom and my
            international coaching certifications empower me to guide
            individuals on their journey to self-discovery, growth, and
            fulfillment.
          </h2>
        </div>
        <div className="p-3 ">
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1727245848/yemisi/8_lyxp3f.jpg"
            className=" object-cover h-[400px] rounded-lg "
          />
        </div>
      </div>

      <div className="">
        <h1 className="text-center text-2xl font-semibold py-5">
          Life Coaching Packages
        </h1>
        <div className="px-10 py-5">
          <div className="container grid grid-cols-[0.8fr_1.2fr]">
            <div>
              <img
                src="https://res.cloudinary.com/dador6eng/image/upload/v1727283235/yemisi/23_y8wmo8.jpg"
                className="h-full w-full"
              />
            </div>
            <div className="content px-10 space-y-4">
              {/* <h1 className="text-xl medium">Business Consultation Packages </h1> */}

              <h2 className="text-4xl font-medium">Personal Development</h2>
              <p className=" text-lg font-light">
                A well-defined personal development plan is essential for
                unlocking your full potential, achieving your life goals and
                having fulfillment. By booking this session, you will gain:
              </p>
              <ul className="text-lg font-light space-y-2">
                <li>
                  <span className="text-primary text-3xl mr-2">✓</span>{" "}
                  <strong>Personal Growth:</strong> I will guide you through the
                  key areas of personal development, helping you to improve your
                  mindset, habits, and overall well-being.
                </li>
                <li>
                  <span className="text-primary text-3xl mr-2">✓</span>
                  <strong>Self-Assessment and Goal Setting:</strong> Together,
                  we’ll identify your strengths, challenges, and aspirations,
                  and develop clear, actionable goals that align with your
                  personal vision for success.
                </li>
                <li>
                  <span className="text-primary text-3xl mr-2">✓</span>
                  <strong>Results-Driven Strategies: </strong>I will provide you
                  with effective strategies designed to guarantee positive
                  outcomes for your marketing efforts.
                </li>
                <li>
                  <span className="text-primary text-3xl mr-2">✓</span>
                  <strong>Actionable Growth System:</strong> We will create a
                  step by step action that will help you achieve long-term
                  personal growth.
                </li>
                <li>
                  <span className="text-primary text-3xl mr-2">✓</span>
                  <strong>Overcoming challenges:</strong> You will get help on
                  solutions to bypass your current challenges
                </li>
              </ul>
              <div className=" font-medium py-4">
                <div className="flex space-x-3 py-2">
                  <h1 className=" content-center">
                    Cost: Starter $100(1 hour)
                  </h1>
                  <Link
                to="https://yemisi-booking.vercel.app/life-coaching"
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
                to="https://yemisi-booking.vercel.app/life-coaching-advanced"
                target="_blank"
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                Book Now-Advanced
              </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="">
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
              Cost: Starter $100(1 hour) | Advance: $400; Sessions (3 Months - 1
              meeting monthly)
            </h1>
            <div className="flex gap-4">
              <Link
                to="https://yemisi-booking.vercel.app/life-coaching"
                target="_blank"
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                Book Now- starter
              </Link>
              <Link
                to="https://yemisi-booking.vercel.app/life-coaching-advanced"
                target="_blank"
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                Book Now-Advanced
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
