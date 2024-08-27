import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

// Background fill animation
const fillBackground = {
  hidden: { backgroundColor: "transparent" },
  visible: { backgroundColor: "#a0522d" }, // Brown color
};

export default function IndexPage() {
  const aboutControls = useAnimation();
  const iAmControls = useAnimation();
  const iAm2Controls = useAnimation();

  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [iAmRef, iAmInView] = useInView({ threshold: 0.5 });
  const [iAm2Ref, iAm2InView] = useInView({ threshold: 0.5 });

  React.useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    } else {
      aboutControls.start("hidden");
    }

    if (iAmInView) {
      iAmControls.start("visible");
    } else {
      iAmControls.start("hidden");
    }

    if (iAm2InView) {
      iAm2Controls.start("visible");
    } else {
      iAm2Controls.start("hidden");
    }
  }, [
    aboutInView,
    aboutControls,
    iAmInView,
    iAmControls,
    iAm2InView,
    iAm2Controls,
  ]);

  return (
    <>
      <div
        id="intro"
        className="grid grid-cols-2 p-20 bg-cover bg-fixed"
        style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
        ></motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          className="text-white"
        >
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
          <Link
            to={"/work-with-me"}
            className="py-2 px-6 bg-teal-700 text-white rounded-md"
          >
            WORK WITH ME
          </Link>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        id="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        variants={fillBackground}
        transition={{ duration: 0.2 }}
        className=" p-10  text-xl w-[450px] ml-auto relative  rounded-md"
      >
        <motion.div
          className="absolute left-0 top-0 h-full w-1 bg-transparent"
          animate={
            aboutInView
              ? { backgroundColor: "#a0522d" }
              : { backgroundColor: "transparent" }
          }
        ></motion.div>
        <h1 className=" text-base">
          Oluwayemisi T. Adebayo, a visionary international brand and digital
          marketing consultant, lecturer, strategist, disruptive content
          creator, and entrepreneur. With a deep-seated passion for innovation
          and an unwavering commitment to excellence, I am dedicated to
          delivering tangible results that not only meet but exceed expectations
          in today’s fast-paced, ever-evolving digital landscape.
        </h1>
      </motion.div>

      {/* I-Am Section */}
      <motion.div
        id="i-am"
        ref={iAmRef}
        initial="hidden"
        animate={iAmControls}
        variants={fillBackground}
        transition={{ duration: 0.5 }}
        className="p-10 text-xl w-[450px] relative rounded-md"
      >
        <motion.div
          className="absolute right-0 top-0 h-full w-1 bg-transparent"
          animate={
            iAmInView
              ? { backgroundColor: "#a0522d" }
              : { backgroundColor: "transparent" }
          }
        ></motion.div>
        <h1 className="text-base">
          Over the past decade, I have honed my skills and expertise in the
          realms of brand development, digital marketing, and strategic
          planning. My journey has been marked by a relentless pursuit of
          knowledge and a desire to push boundaries, enabling me to craft
          innovative solutions that address both challenges and opportunities in
          the marketplace.
        </h1>
      </motion.div>

      {/* I-Am2 Section */}
      <motion.div
        id="i-am2"
        ref={iAm2Ref}
        initial="hidden"
        animate={iAm2Controls}
        variants={fillBackground}
        transition={{ duration: 0.5 }}
        className="p-10 text-xl w-[450px] ml-auto relative rounded-md"
      >
        <motion.div
          className="absolute left-0 top-0 h-full w-1 bg-transparent"
          animate={
            iAm2InView
              ? { backgroundColor: "#a0522d" }
              : { backgroundColor: "transparent" }
          }
        ></motion.div>
        <h1 className="text-base pt-10">
          As an experienced lecturer and strategist, I have had the privilege of
          mentoring countless individuals and organizations, guiding them to
          achieve their goals through tailored strategies that drive growth and
          foster success. My approach is rooted in a deep understanding of the
          digital ecosystem, combined with a creative flair that ensures each
          project stands out in a crowded marketplace.{" "}
        </h1>
      </motion.div>

      {/* Expertise Section */}
      <motion.div
        id="expertise"
        initial="hidden"
        animate="visible"
        variants={slideUp}
        transition={{ delay: 0.8 }}
        className="p-20 grid grid-cols-3 gap-10 text-center"
      >
        <div className=" ">
          {" "}
          <img src="/img/crowd.jpg" alt="brand-consulting" />
          <h1 className=" text-xl font-bold">BRAND CONSULTING</h1>
          Helping businesses create and maintain strong, memorable brands that
          resonate with their target audience.
        </div>
        <div>
          {" "}
          <img src="/img/crowd.jpg" alt="brand-consulting" />
          <h1 className=" text-xl font-bold">DIGITAL MARKETING</h1>
          Crafting data-driven digital marketing strategies that increase
          visibility, drive traffic, and convert leads into loyal customers.
        </div>
        <div>
          <img src="/img/crowd.jpg" alt="brand-consulting" />
          <h1 className=" text-xl font-bold">STRATEGIC PLANNING</h1>
          Developing long-term strategies that align with business goals and
          market demands, ensuring sustainable growth.
        </div>
        <div>
          <img src="/img/crowd.jpg" alt="brand-consulting" />
          <h1 className=" text-xl font-bold">DISRUPTIVE CONTENT CREATION</h1>
          Designing and delivering content that not only captures attention but
          also challenges the status quo, driving engagement and fostering
          innovation.
        </div>
        <div>
          <img src="/img/crowd.jpg" alt="brand-consulting" />
          <h1 className=" text-xl font-bold">ENTREPRENEURSHIP</h1>
          Launching and managing successful ventures, with a focus on
          sustainability, innovation, and social impact.
        </div>
      </motion.div>

      <div
        className="grid place-content-center p-20 bg-cover bg-fixed text-white text-center"
        style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
      >
        <h1 className="text-xl">Sign Up for</h1>
        <h1 className="text-6xl font-bold pb-3">Oluwayemisi Newsletter</h1>
        <span>Stay in the loop with the latest activities. Subscribe now!</span>
        <form className="py-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-96 rounded-md"
          />
          <button className="p-4 bg-black text-white rounded-md">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </>
  );
}

// export default function IndexPage() {
//   return (
//     <>
//       <div
//         id="intro"
//         className="grid grid-cols-2 p-20 bg-cover bg-fixed"
//         style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
//       >
//         <div></div>
//         <div className="text-white">
//           <div className="pb-3">
//             <h1 className="font-medium">Oluwayemisi T. Adebayo</h1>
//             <h2 className="text-5xl font-black my-4 leading-tight">
//               I HAVE SUCCESSFULLY DRIVEN RESULTS FOR HUNDREDS OF BRANDS ACROSS
//               AFRICA, EUROPE, AND ASIA
//             </h2>
//             <h3 className="font-medium text-xl">
//               Are you ready to enhance your brand's results? If so, let's get to
//               work.
//             </h3>
//           </div>
//           <Link
//             to={"/work-with-me"}
//             className=" py-2 px-6 bg-black text-white rounded-md"
//           >
//             WORK WITH ME
//           </Link>
//         </div>
//       </div>
//       <div id="about" className="p-20 text-xl">
//         Oluwayemisi T. Adebayo, a visionary international brand and digital
//         marketing consultant, lecturer, strategist, disruptive content creator,
//         and entrepreneur. With a deep-seated passion for innovation and an
//         unwavering commitment to excellence, I am dedicated to delivering
//         tangible results that not only meet but exceed expectations in today’s
//         fast-paced, ever-evolving digital landscape.
//       </div>
//       <div id="i-am" className="px-20 pb-20 text-xl">
//         Over the past decade, I have honed my skills and expertise in the realms
//         of brand development, digital marketing, and strategic planning. My
//         journey has been marked by a relentless pursuit of knowledge and a
//         desire to push boundaries, enabling me to craft innovative solutions
//         that address both challenges and opportunities in the marketplace.
//       </div>
//       <div id="i-am2" className="px-20 text-xl">
//         As an experienced lecturer and strategist, I have had the privilege of
//         mentoring countless individuals and organizations, guiding them to
//         achieve their goals through tailored strategies that drive growth and
//         foster success. My approach is rooted in a deep understanding of the
//         digital ecosystem, combined with a creative flair that ensures each
//         project stands out in a crowded marketplace.
//       </div>
//       <div id="expertise" className="p-20 grid grid-cols-3 gap-10 text-center">
//         <div className=" ">
//           {" "}
//           <h1 className=" text-xl font-bold">BRAND CONSULTING</h1>
//           Helping businesses create and maintain strong, memorable brands that
//           resonate with their target audience.
//         </div>
//         <div>
//           {" "}
//           <h1 className=" text-xl font-bold">DIGITAL MARKETING</h1>
//           Crafting data-driven digital marketing strategies that increase
//           visibility, drive traffic, and convert leads into loyal customers.
//         </div>
//         <div>
//           <h1 className=" text-xl font-bold">STRATEGIC PLANNING</h1>
//           Developing long-term strategies that align with business goals and
//           market demands, ensuring sustainable growth.
//         </div>
//         <div>
//           <h1 className=" text-xl font-bold">DISRUPTIVE CONTENT CREATION</h1>
//           Designing and delivering content that not only captures attention but
//           also challenges the status quo, driving engagement and fostering
//           innovation.
//         </div>
//         <div>
//           <h1 className=" text-xl font-bold">ENTREPRENEURSHIP</h1>
//           Launching and managing successful ventures, with a focus on
//           sustainability, innovation, and social impact.
//         </div>
//       </div>
//     </>
//   );
// }
