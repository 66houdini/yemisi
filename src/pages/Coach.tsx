import { PersonalizedHeader } from "./IndexPage";
import { Link } from "react-router-dom";
export default function Coach() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728572996/yemisi/MO_rizfiu.jpg"
              alt="about"
              className="h-[300px] md:h-[500px] w-full object-top object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[185px] h-[185px] md:w-[277px] md:h-[277px] top-24 md:top-44 left-10 md:left-20 flex">
            <h1 className="text-xl md:text-3xl font-semibold py-20 md:py-40 pl-8 md:pl-16 flex">
              <h2 className="border-t border-white ">COA</h2>CHING
            </h1>
          </div>
        </div>
      </div>

      <div className=" text-black grid md:grid-cols-2 border-b border-b-white">
        <div className="p-10 space-y-4">
          <h1 className="text-2xl font-bold text-primary">LIFE COACH</h1>
          <h2 className="font-light">
            In addition to consulting for businesses, I am also a passionate
            life coach. I’ve had the privilege of coaching individuals at
            different stages of life—teenagers, young adults, adults in their
            30s to 50s, and senior citizens—across various locations. My
            coaching philosophy is grounded in the belief that emotional
            well-being and personal growth should be as normalized as physical
            fitness. I strive to help my clients live fulfilling lives, set
            meaningful goals, and take decisive steps toward happiness in all
            aspects of life.
          </h2>
          <h2 className="font-light">
            My professional coaching training in the United Kingdom and my
            international coaching certifications empower me to guide
            individuals on their journey to self-discovery, growth, and
            fulfillment.
          </h2>
        </div>
        <div className="p-10 py-5 md:p-3 ">
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423694/yemisi/Coaching_o8mvfs.jpg"
            className=" object-cover h-40 md:h-[400px] w-full rounded-lg "
          />
        </div>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/dador6eng/image/upload/v1727482703/MO6_gi8ubm.jpg"
          alt=""
          className="w-full py-5"
        />
      </div>

      <div className="">
        <h1 className="text-center text-2xl font-semibold py-2.5 md:py-5">
          Life Coaching Packages
        </h1>
        <div className="px-10 py-5">
          <div className="container grid md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <img
                src="https://res.cloudinary.com/dador6eng/image/upload/v1729790879/yemisi/pexels-mikhail-nilov-8872482_be6vae.jpg"
                className="h-[300px] w-full object-cover object-left md:h-full md:w-full"
              />
            </div>
            <div className="content py-5 md:py-0 md:px-10 space-y-4">
              {/* <h1 className="text-xl medium">Business Consultation Packages </h1> */}

              <h2 className="text-2xl md:text-4xl font-medium">
                Personal Development
              </h2>
              <p className=" text-sm md:text-lg font-light">
                A well-crafted life plan is crucial for unlocking your full
                potential, reaching your life goals, and experiencing true
                fulfillment. By booking this session, you will gain:
              </p>
              <ul className="text-sm md:text-lg font-light space-y-2">
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>{" "}
                  <strong>Personal Growth:</strong>I will guide you through the
                  key areas of personal development, helping you improve your
                  mindset, habits, and overall well-being.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Self-Assessment and Goal Setting:</strong> Together,
                  we’ll identify your strengths, challenges, and aspirations,
                  and develop clear, actionable goals that align with your
                  personal vision for success.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Results-Driven Strategies: </strong> I will provide
                  you with effective strategies designed to guarantee positive
                  outcomes for your personal growth efforts.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Actionable Growth System:</strong> We will create a
                  step-by-step action plan to help you achieve long-term
                  personal growth.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Overcoming challenges:</strong> You will receive
                  guidance on solutions to bypass your current challenges.
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
              <div className="py-2 md:py-4 text-base md:text-xl italic">
                For partnership and speaking engagements please send us an email
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 pt-10">
        <h1 className="border-b border-black text-3xl"></h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 mt-5 ">
          <div className="pb-3 md:pb-0">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728423694/yemisi/Coaching_o8mvfs.jpg"
              className="h-40 md:h-60 object-cover"
            />
            <a
              href="https://yemisi-booking.vercel.app/mindfulness-session"
              className="flex justify-between text-xs md:text-lg border-b-black border-b pt-2 md:pt-6"
            >
              <h1>1-1 Mindfulness Session </h1>
              <h2>cost: $50</h2>
            </a>
          </div>
          <div className="pb-3 md:pb-0">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728427586/yemisi/pexels-caio-46274_lstihp.jpg"
              className="h-40 md:h-60 w-full object-cover"
            />
            <a
              href="https://yemisi-booking.vercel.app/self-discovery"
              className="flex justify-between text-xs md:text-lg border-b-black border-b pt-2 md:pt-6"
            >
              <h1>Self-Discovery Workbook </h1>
              <h2>cost: $80</h2>
            </a>
          </div>
          <div className="pb-3 md:pb-0">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728423695/yemisi/Group_Coaching_g0zul8.jpg"
              className="h-40 md:h-60 w-full object-cover"
            />
            <a
              href="https://yemisi-booking.vercel.app/group-session"
              className="flex justify-between text-xs md:text-lg border-b-black border-b pt-2 md:pt-6"
            >
              <h1>Group Session </h1>
              <h2>cost: $50</h2>
            </a>
          </div>

          <div className="pb-3 md:pb-0">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728423687/yemisi/Healthy_living_jomrtl.jpg"
              className="h-40 md:h-60 w-full object-cover"
            />
            <a
              href="https://yemisi-booking.vercel.app/healthy-living"
              className="flex justify-between text-xs md:text-lg border-b-black border-b pt-2 md:pt-6"
            >
              <h1>Healthy Living </h1>
              <h2>cost: $100</h2>
            </a>
          </div>
          <div className="pb-3 md:pb-0">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728423687/yemisi/Mental_wellness_kjhlhn.jpg"
              className="h-40 md:h-60 w-full object-cover"
            />
            <a
              href="https://yemisi-booking.vercel.app/mental-wellness"
              className="flex justify-between text-xs md:text-lg border-b-black border-b pt-2 md:pt-6"
            >
              <h1>Mental Wellness </h1>
              <h2>cost: $100</h2>
            </a>
          </div>
          <div className="pb-3 md:pb-0">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1728423690/yemisi/Body_Goals_wbdtbd.jpg"
              className="h-40 md:h-60 w-full object-cover"
            />
            <a
              href="https://yemisi-booking.vercel.app/physical-training"
              className="flex justify-between text-xs md:text-lg border-b-black border-b pt-2 md:pt-6"
            >
              <h1>Physical Training </h1>
              <h2>cost: $100</h2>
            </a>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-20">
        <h1 className="text-center text-lg md:text-2xl font-semibold md:py-5">
          Reviews from Clients
        </h1>
        <div className="grid gap-10 space-y-6 md:space-y-0">
          <div className="grid justify-items-center space-y-2 md:space-y-4 shadow-xl p-3 w-1/2 justify-self-center">
            <div className="grid justify-items-center">
              <h1 className="text-lg md:text-2xl font-semibold">
                Farijun Faith
              </h1>
              <h1 className="italic">
                "Indeed, life is simple. We just need to live it freely". This
                was one of the statements made to me, and it brought clarity to
                some difficult issues I was facing at the time. Thank you,
                <strong>Oluwayemisi Adebayo</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
