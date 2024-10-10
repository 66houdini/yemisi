import { PersonalizedHeader } from "./IndexPage";
import { Link } from "react-router-dom";
export default function Coach() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727482704/MO2_n8hiaq.jpg"
              alt="about"
              className="h-[300px] md:h-[600px] w-full object-top object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[185px] h-[185px] md:w-[377px] md:h-[377px] top-24 md:top-44 left-10 md:left-20 flex">
            <h1 className="text-xl md:text-3xl font-semibold py-20 md:py-40 pl-8 md:pl-16 flex">
              <h2 className="border-t border-white ">COA</h2>CHING
            </h1>
          </div>
        </div>
      </div>

      <div className=" text-black grid md:grid-cols-2 border-b border-b-white">
        <div className="p-10 space-y-4">
          <h1 className="text-2xl font-bold text-primary">
            LIFE COACH
          </h1>
          <h2 className="font-light">
            In addition to consulting for businesses, I am also a passionate
            life coach. I’ve had the privilege of coaching individuals at
            different stages of life, teenagers, young adults, adults in their
            30s to 50s, and senior citizens, across various locations. My
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
                src="https://res.cloudinary.com/dador6eng/image/upload/v1728423690/yemisi/Lecturing_Arden_hokfhz.jpg"
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
                  <strong>Personal Growth:</strong> I will guide you through the
                  key areas of personal development, helping you to improve your
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
                  <strong>Results-Driven Strategies: </strong>I will provide you
                  with effective strategies designed to guarantee positive
                  outcomes for your marketing efforts.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
                  <strong>Actionable Growth System:</strong> We will create a
                  step by step action that will help you achieve long-term
                  personal growth.
                </li>
                <li>
                  <span className="text-primary text-xl md:text-3xl mr-2">
                    ✓
                  </span>
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
              <div className="py-2 md:py-4 text-base md:text-xl italic">
                For partnership and speaking engagements please send us an email
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
      
      <div className="px-10 md:px-20 pt-10" >
        <h1 className="border-b border-black text-3xl"></h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-5 ">
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423694/yemisi/Coaching_o8mvfs.jpg"
            className="h-60"
          />
          <a href="https://yemisi-booking.vercel.app/mindfulness-session" className="flex justify-between text-lg border-b-black border-b pt-6">
            <h1>1-1 Mindfulness session </h1>
            <h2>cost: $50</h2>
          </a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423695/yemisi/Group_Coaching_g0zul8.jpg"
            className="h-60 w-full object-cover"
          />
          <a href="https://yemisi-booking.vercel.app/group-session" className="flex justify-between text-lg border-b-black border-b pt-6">
            <h1>Group Session </h1>
            <h2>cost: $50</h2>
          </a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728427586/yemisi/pexels-caio-46274_lstihp.jpg"
            className="h-60"
          />
          <a href="https://yemisi-booking.vercel.app/self-discovery" className="flex justify-between text-lg border-b-black border-b pt-6">
            <h1>Self-Discovery Workbook </h1>
            <h2>cost: $80</h2>
          </a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423687/yemisi/Healthy_living_jomrtl.jpg"
            className="h-60"
          />
          <a href="https://yemisi-booking.vercel.app/healthy-living" className="flex justify-between text-lg border-b-black border-b pt-6">
            <h1>Healthy Living </h1>
            <h2>cost: $100</h2>
          </a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423687/yemisi/Mental_wellness_kjhlhn.jpg"
            className="h-60 w-full object-cover"
          />
          <a href="https://yemisi-booking.vercel.app/mental-wellness" className="flex justify-between text-lg border-b-black border-b pt-6">
            <h1>Mental wellness </h1>
            <h2>cost: $100</h2>
          </a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dador6eng/image/upload/v1728423690/yemisi/Body_Goals_wbdtbd.jpg"
            className="h-60"
          />
          <a href="https://yemisi-booking.vercel.app/physical-training" className="flex justify-between text-lg border-b-black border-b pt-6">
            <h1>Physical training </h1>
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
    </>
  );
}
