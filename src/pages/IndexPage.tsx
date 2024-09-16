// import React from "react";
// import { Link } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const slideUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const slideInFromLeft = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0 },
// };

// const slideInFromRight = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0 },
// };

// // Background fill animation
// const fillBackground = {
//   hidden: { backgroundColor: "transparent" },
//   visible: { backgroundColor: "#a0522d" }, // Brown color
// };

// export default function IndexPage() {
//   const aboutControls = useAnimation();
//   const iAmControls = useAnimation();
//   const iAm2Controls = useAnimation();

//   const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
//   const [iAmRef, iAmInView] = useInView({ threshold: 0.5 });
//   const [iAm2Ref, iAm2InView] = useInView({ threshold: 0.5 });

//   React.useEffect(() => {
//     if (aboutInView) {
//       aboutControls.start("visible");
//     } else {
//       aboutControls.start("hidden");
//     }

//     if (iAmInView) {
//       iAmControls.start("visible");
//     } else {
//       iAmControls.start("hidden");
//     }

//     if (iAm2InView) {
//       iAm2Controls.start("visible");
//     } else {
//       iAm2Controls.start("hidden");
//     }
//   }, [
//     aboutInView,
//     aboutControls,
//     iAmInView,
//     iAmControls,
//     iAm2InView,
//     iAm2Controls,
//   ]);

//   return (
//     <>
//       <div
//         id="intro"
//         className="grid grid-cols-2 p-20 bg-cover bg-fixed"
//         style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
//       >
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={slideInFromLeft}
//         ></motion.div>
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={slideInFromRight}
//           className="text-white"
//         >
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
//             className="py-2 px-6 bg-teal-700 text-white rounded-md"
//           >
//             WORK WITH ME
//           </Link>
//         </motion.div>
//       </div>

//       {/* About Section */}
//       <motion.div
//         id="about"
//         ref={aboutRef}
//         initial="hidden"
//         animate={aboutControls}
//         variants={fillBackground}
//         transition={{ duration: 0.2 }}
//         className=" p-10  text-xl w-[450px] ml-auto relative  rounded-md"
//       >
//         <motion.div
//           className="absolute left-0 top-0 h-full w-1 bg-transparent"
//           animate={
//             aboutInView
//               ? { backgroundColor: "#a0522d" }
//               : { backgroundColor: "transparent" }
//           }
//         ></motion.div>
//         <h1 className=" text-base">
//           Oluwayemisi T. Adebayo, a visionary international brand and digital
//           marketing consultant, lecturer, strategist, disruptive content
//           creator, and entrepreneur. With a deep-seated passion for innovation
//           and an unwavering commitment to excellence, I am dedicated to
//           delivering tangible results that not only meet but exceed expectations
//           in today’s fast-paced, ever-evolving digital landscape.
//         </h1>
//       </motion.div>

//       {/* I-Am Section */}
//       <motion.div
//         id="i-am"
//         ref={iAmRef}
//         initial="hidden"
//         animate={iAmControls}
//         variants={fillBackground}
//         transition={{ duration: 0.5 }}
//         className="p-10 text-xl w-[450px] relative rounded-md"
//       >
//         <motion.div
//           className="absolute right-0 top-0 h-full w-1 bg-transparent"
//           animate={
//             iAmInView
//               ? { backgroundColor: "#a0522d" }
//               : { backgroundColor: "transparent" }
//           }
//         ></motion.div>
//         <h1 className="text-base">
//           Over the past decade, I have honed my skills and expertise in the
//           realms of brand development, digital marketing, and strategic
//           planning. My journey has been marked by a relentless pursuit of
//           knowledge and a desire to push boundaries, enabling me to craft
//           innovative solutions that address both challenges and opportunities in
//           the marketplace.
//         </h1>
//       </motion.div>

//       {/* I-Am2 Section */}
//       <motion.div
//         id="i-am2"
//         ref={iAm2Ref}
//         initial="hidden"
//         animate={iAm2Controls}
//         variants={fillBackground}
//         transition={{ duration: 0.5 }}
//         className="p-10 text-xl w-[450px] ml-auto relative rounded-md"
//       >
//         <motion.div
//           className="absolute left-0 top-0 h-full w-1 bg-transparent"
//           animate={
//             iAm2InView
//               ? { backgroundColor: "#a0522d" }
//               : { backgroundColor: "transparent" }
//           }
//         ></motion.div>
//         <h1 className="text-base pt-10">
//           As an experienced lecturer and strategist, I have had the privilege of
//           mentoring countless individuals and organizations, guiding them to
//           achieve their goals through tailored strategies that drive growth and
//           foster success. My approach is rooted in a deep understanding of the
//           digital ecosystem, combined with a creative flair that ensures each
//           project stands out in a crowded marketplace.{" "}
//         </h1>
//       </motion.div>

//       {/* Expertise Section */}
// <motion.div
//   id="expertise"
//   initial="hidden"
//   animate="visible"
//   variants={slideUp}
//   transition={{ delay: 0.8 }}
//   className="p-20 grid grid-cols-3 gap-10 text-center"
// >
//   <div className=" ">
//     {" "}
//     <img src="/img/crowd.jpg" alt="brand-consulting" />
//     <h1 className=" text-xl font-bold">BRAND CONSULTING</h1>
//     Helping businesses create and maintain strong, memorable brands that
//     resonate with their target audience.
//   </div>
//   <div>
//     {" "}
//     <img src="/img/crowd.jpg" alt="brand-consulting" />
//     <h1 className=" text-xl font-bold">DIGITAL MARKETING</h1>
//     Crafting data-driven digital marketing strategies that increase
//     visibility, drive traffic, and convert leads into loyal customers.
//   </div>
//   <div>
//     <img src="/img/crowd.jpg" alt="brand-consulting" />
//     <h1 className=" text-xl font-bold">STRATEGIC PLANNING</h1>
//     Developing long-term strategies that align with business goals and
//     market demands, ensuring sustainable growth.
//   </div>
//   <div>
//     <img src="/img/crowd.jpg" alt="brand-consulting" />
//     <h1 className=" text-xl font-bold">DISRUPTIVE CONTENT CREATION</h1>
//     Designing and delivering content that not only captures attention but
//     also challenges the status quo, driving engagement and fostering
//     innovation.
//   </div>
//   <div>
//     <img src="/img/crowd.jpg" alt="brand-consulting" />
//     <h1 className=" text-xl font-bold">ENTREPRENEURSHIP</h1>
//     Launching and managing successful ventures, with a focus on
//     sustainability, innovation, and social impact.
//   </div>
// </motion.div>

// <div
//   className="grid place-content-center p-20 bg-cover bg-fixed text-white text-center"
//   style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
// >
//   <h1 className="text-xl">Sign Up for</h1>
//   <h1 className="text-6xl font-bold pb-3">Oluwayemisi Newsletter</h1>
//   <span>Stay in the loop with the latest activities. Subscribe now!</span>
//   <form className="py-5">
//     <input
//       type="email"
//       placeholder="Enter your email"
//       className="p-3 w-96 rounded-md"
//     />
//     <button className="p-4 bg-black text-white rounded-md">
//       SUBSCRIBE
//     </button>
//   </form>
// </div>
//     </>
//   );
// }

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
// <div id="about" className="p-20 text-xl">
//   Oluwayemisi T. Adebayo, a visionary international brand and digital
//   marketing consultant, lecturer, strategist, disruptive content creator,
//   and entrepreneur. With a deep-seated passion for innovation and an
//   unwavering commitment to excellence, I am dedicated to delivering
//   tangible results that not only meet but exceed expectations in today’s
//   fast-paced, ever-evolving digital landscape.
// </div>
// <div id="i-am" className="px-20 pb-20 text-xl">
//   Over the past decade, I have honed my skills and expertise in the realms
//   of brand development, digital marketing, and strategic planning. My
//   journey has been marked by a relentless pursuit of knowledge and a
//   desire to push boundaries, enabling me to craft innovative solutions
//   that address both challenges and opportunities in the marketplace.
// </div>
// <div id="i-am2" className="px-20 text-xl">
//   As an experienced lecturer and strategist, I have had the privilege of
//   mentoring countless individuals and organizations, guiding them to
//   achieve their goals through tailored strategies that drive growth and
//   foster success. My approach is rooted in a deep understanding of the
//   digital ecosystem, combined with a creative flair that ensures each
//   project stands out in a crowded marketplace.
// </div>
// <div id="expertise" className="p-20 grid grid-cols-3 gap-10 text-center">
//   <div className=" ">
//     {" "}
//     <h1 className=" text-xl font-bold">BRAND CONSULTING</h1>
//     Helping businesses create and maintain strong, memorable brands that
//     resonate with their target audience.
//   </div>
//   <div>
//     {" "}
//     <h1 className=" text-xl font-bold">DIGITAL MARKETING</h1>
//     Crafting data-driven digital marketing strategies that increase
//     visibility, drive traffic, and convert leads into loyal customers.
//   </div>
//   <div>
//     <h1 className=" text-xl font-bold">STRATEGIC PLANNING</h1>
//     Developing long-term strategies that align with business goals and
//     market demands, ensuring sustainable growth.
//   </div>
//   <div>
//     <h1 className=" text-xl font-bold">DISRUPTIVE CONTENT CREATION</h1>
//     Designing and delivering content that not only captures attention but
//     also challenges the status quo, driving engagement and fostering
//     innovation.
//   </div>
//   <div>
//     <h1 className=" text-xl font-bold">ENTREPRENEURSHIP</h1>
//     Launching and managing successful ventures, with a focus on
//     sustainability, innovation, and social impact.
//   </div>
// </div>
//     </>
//   );
// }

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const slideUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const slideInFromLeft = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0 },
// };

// const slideInFromRight = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0 },
// };

// export default function IndexPage() {
//   const aboutControls = useAnimation();
//   const iAmControls = useAnimation();
//   const iAm2Controls = useAnimation();

//   const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
//   const [iAmRef, iAmInView] = useInView({ threshold: 0.5 });
//   const [iAm2Ref, iAm2InView] = useInView({ threshold: 0.5 });

//   useEffect(() => {
//     if (aboutInView) {
//       aboutControls.start("visible");
//     } else {
//       aboutControls.start("hidden");
//     }

//     if (iAmInView) {
//       iAmControls.start("visible");
//     } else {
//       iAmControls.start("hidden");
//     }

//     if (iAm2InView) {
//       iAm2Controls.start("visible");
//     } else {
//       iAm2Controls.start("hidden");
//     }
//   }, [aboutInView, aboutControls, iAmInView, iAmControls, iAm2InView, iAm2Controls]);

//   return (
//     <>
//       <div
//         id="intro"
//         className="grid grid-cols-2 p-20 bg-cover bg-fixed"
//         style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
//       >
//         <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}></motion.div>
//         <motion.div initial="hidden" animate="visible" variants={slideInFromRight} className="text-white">
//           <div className="pb-3">
//             <h1 className="font-medium">Oluwayemisi T. Adebayo</h1>
//             <h2 className="text-5xl font-black my-4 leading-tight">
//               I HAVE SUCCESSFULLY DRIVEN RESULTS FOR HUNDREDS OF BRANDS ACROSS AFRICA, EUROPE, AND ASIA
//             </h2>
//             <h3 className="font-medium text-xl">
//               Are you ready to enhance your brand's results? If so, let's get to work.
//             </h3>
//           </div>
//           <Link to={"/work-with-me"} className="py-2 px-6 bg-teal-700 text-white rounded-md">
//             WORK WITH ME
//           </Link>
//         </motion.div>
//       </div>

//       {/* Vertical Timeline Section */}
//       <section className="cd-timeline js-cd-timeline p-20">
//         <div className="container max-w-lg relative">
//           <div className="absolute top-0 left-4 h-full w-1 bg-teal-700"></div>
//           <div className="cd-timeline__block flex mb-10">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0, scale: 0.5 },
//                 visible: { opacity: 1, scale: 1 },
//               }}
//               className="cd-timeline__img flex items-center justify-center w-10 h-10 rounded-full bg-teal-700"
//             >
//               <img src="/img/cd-icon-picture.svg" alt="Picture" />
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="cd-timeline__content ml-10"
//             >
//               <h2 className="text-xl font-bold">Oluwayemisi T. Adebayo</h2>
//               <p className="color-contrast-medium text-lg">
//               Oluwayemisi T. Adebayo, a visionary international brand and digital
//         marketing consultant, lecturer, strategist, disruptive content creator,
//         and entrepreneur. With a deep-seated passion for innovation and an
//         unwavering commitment to excellence, I am dedicated to delivering
//         tangible results that not only meet but exceed expectations in today’s
//         fast-paced, ever-evolving digital landscape.              </p>

//             </motion.div>
//           </div>

//           <div className="cd-timeline__block flex mb-10">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0, scale: 0.5 },
//                 visible: { opacity: 1, scale: 1 },
//               }}
//               className="cd-timeline__img flex items-center justify-center w-10 h-10 rounded-full bg-teal-700"
//             >
//               <img src="/img/cd-icon-picture.svg" alt="Picture" />
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="cd-timeline__content ml-10"
//             >
//               <h2 className="text-xl font-bold">Strategic Planning</h2>
//               <p className="color-contrast-medium text-lg">
//               Over the past decade, I have honed my skills and expertise in the realms
//         of brand development, digital marketing, and strategic planning. My
//         journey has been marked by a relentless pursuit of knowledge and a
//         desire to push boundaries, enabling me to craft innovative solutions
//         that address both challenges and opportunities in the marketplace.
//                     </p>

//             </motion.div>
//           </div>

//           <div className="cd-timeline__block flex mb-10">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0, scale: 0.5 },
//                 visible: { opacity: 1, scale: 1 },
//               }}
//               className="cd-timeline__img flex items-center justify-center w-10 h-10 rounded-full bg-teal-700"
//             >
//               <img src="/img/cd-icon-picture.svg" alt="Picture" />
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="cd-timeline__content ml-10"
//             >
//               {/* <h2 className="text-xl font-bold">Strategic Planning</h2> */}
//               <p className="color-contrast-medium text-lg">
//               As an experienced lecturer and strategist, I have had the privilege of
//         mentoring countless individuals and organizations, guiding them to
//         achieve their goals through tailored strategies that drive growth and
//         foster success. My approach is rooted in a deep understanding of the
//         digital ecosystem, combined with a creative flair that ensures each
//         project stands out in a crowded marketplace.   </p>

//             </motion.div>
//           </div>

//           {/* Add more blocks as needed */}
//         </div>
//       </section>

//       {/* Other sections of your page */}
//       <motion.div
//         id="expertise"
//         initial="hidden"
//         animate="visible"
//         variants={slideUp}
//         transition={{ delay: 0.8 }}
//         className="p-20 grid grid-cols-3 gap-10 text-center"
//       >
//         <div className=" ">
//           {" "}
//           <img src="/img/crowd.jpg" alt="brand-consulting" />
//           <h1 className=" text-xl font-bold">BRAND CONSULTING</h1>
//           Helping businesses create and maintain strong, memorable brands that
//           resonate with their target audience.
//         </div>
//         <div>
//           {" "}
//           <img src="/img/crowd.jpg" alt="brand-consulting" />
//           <h1 className=" text-xl font-bold">DIGITAL MARKETING</h1>
//           Crafting data-driven digital marketing strategies that increase
//           visibility, drive traffic, and convert leads into loyal customers.
//         </div>
//         <div>
//           <img src="/img/crowd.jpg" alt="brand-consulting" />
//           <h1 className=" text-xl font-bold">STRATEGIC PLANNING</h1>
//           Developing long-term strategies that align with business goals and
//           market demands, ensuring sustainable growth.
//         </div>
//         <div>
//           <img src="/img/crowd.jpg" alt="brand-consulting" />
//           <h1 className=" text-xl font-bold">DISRUPTIVE CONTENT CREATION</h1>
//           Designing and delivering content that not only captures attention but
//           also challenges the status quo, driving engagement and fostering
//           innovation.
//         </div>
//         <div>
//           <img src="/img/crowd.jpg" alt="brand-consulting" />
//           <h1 className=" text-xl font-bold">ENTREPRENEURSHIP</h1>
//           Launching and managing successful ventures, with a focus on
//           sustainability, innovation, and social impact.
//         </div>
//       </motion.div>

//       <div
//         className="grid place-content-center p-20 bg-cover bg-fixed text-white text-center"
//         style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
//       >
//         <h1 className="text-xl">Sign Up for</h1>
//         <h1 className="text-6xl font-bold pb-3">Oluwayemisi Newsletter</h1>
//         <span>Stay in the loop with the latest activities. Subscribe now!</span>
//         <form className="py-5">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="p-3 w-96 rounded-md"
//           />
//           <button className="p-4 bg-black text-white rounded-md">
//             SUBSCRIBE
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div
        id="intro"
        className="grid grid-cols-2 px-20 pt-20 bg-cover bg-fixed"
        style={{ backgroundImage: 'url("/img/crowd.jpg")' }}
      >
        <div>
          <img src="/img/qwerty.png" />
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
          <Link
            to={"/work-with-me"}
            className="py-2 px-6 bg-teal-700 text-white rounded-md"
          >
            WORK WITH ME
          </Link>
        </div>
      </div>

      {/* Other sections of your page */}
      <div
        id="expertise"
        className="p-20 grid grid-cols-3 gap-10 text-center text-sm"
      >
        <div className=" space-y-5">
          <img
            src="/img/man.png"
            alt="brand-consulting"
            className="h-20 inline"
          />
          <h1 className="text-lg font-semibold text-blue-950">
            BRAND CONSULTING
          </h1>
          <h1 className="text-justify text-zinc-500">
            Helping businesses create and maintain strong, memorable brands that
            resonate with their target audience.
          </h1>
        </div>
        <div className="space-y-5">
          <img
            src="/img/responsive.png"
            alt="brand-consulting"
            className="h-20 inline"
          />
          <h1 className="text-lg font-semibold text-blue-950">
            DIGITAL MARKETING
          </h1>
          <h1 className="text-justify text-zinc-500">
            Crafting data-driven digital marketing strategies that increase
            visibility, drive traffic, and convert leads into loyal customers.
          </h1>
        </div>
        <div className="space-y-5">
          <img
            src="/img/task.png"
            alt="brand-consulting"
            className="h-20 inline"
          />
          <h1 className="text-lg font-semibold text-blue-950">
            STRATEGIC PLANNING
          </h1>
          <h1 className="text-justify text-zinc-500">
            Developing long-term strategies that align with business goals and
            market demands, ensuring sustainable growth.
          </h1>
        </div>
        <div className="space-y-5">
          <img
            src="/img/creative.png"
            alt="brand-consulting"
            className="h-20 inline"
          />
          <h1 className="text-lg font-semibold text-blue-950">
            DISRUPTIVE CONTENT CREATION
          </h1>
          <h1 className="text-justify text-zinc-500">
            Designing and delivering content that not only captures attention
            but also challenges the status quo, driving engagement and fostering
            innovation.
          </h1>
        </div>
        <div className="space-y-5">
          <img
            src="/img/investment.png"
            alt="brand-consulting"
            className="h-20 inline"
          />
          <h1 className="text-lg font-semibold text-blue-950">
            ENTREPRENEURSHIP
          </h1>
          <h1 className="text-justify text-zinc-500">
            Launching and managing successful ventures, with a focus on
            sustainability, innovation, and social impact.
          </h1>
        </div>
      </div>
      {/*just added*/}
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="/img/flipped.jpg"
              alt="about"
              className="h-40 md:h-[500px] w-full object-cover "
            />
          </div>
          {/* <h1 className=" text-2xl md:text-5xl absolute text-white bottom-1/2 pl-10 md:pl-20">
              My Projects
            </h1> */}
          <div className=" p-12 space-y-6 bg-white text-blue-950 absolute  w-[377px] top-20 right-20 ">
            <h1 className="text-2xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit">OLUWAYEMISI</h2>{" "}
              T. ADEBAYO
            </h1>
            {/* <h2 className="text-sm">Oluwayemisi serves as a catalyst to inspire, educate, and empower the next generation of leaders through dynamic events, workshops, and interactive platforms.</h2> */}
            <h1 className="text-sm font-light">
              {" "}
              A visionary international brand and digital marketing consultant,
              lecturer, strategist, disruptive content creator, and
              entrepreneur. With a deep-seated passion for innovation and an
              unwavering commitment to excellence, I am dedicated to delivering
              tangible results that not only meet but exceed expectations in
              today’s fast-paced, ever-evolving digital landscape.
            </h1>
          </div>
        </div>
      </div>

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
              src="/img/sideways.jpg"
              className=" h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <div>
          <img
            src="/img/sideways.jpg"
            className=" h-[550px] w-full object-cover relative"
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
            I have had the privilege
            of mentoring countless individuals and organizations, guiding them
            to achieve their goals through tailored strategies that drive growth
            and foster success. My approach is rooted in a deep understanding of
            the digital ecosystem, combined with a creative flair that ensures
            each project stands out in a crowded marketplace.
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
        className="grid place-content-center p-20 bg-cover bg-fixed text-white text-center"
        style={{ backgroundImage: 'url("/img/sideways.jpg")' }}
      >
        <h1 className="text-xl">Sign Up for</h1>
        <h1 className="text-6xl font-bold pb-3">Oluwayemisi Newsletter</h1>
        <span>Stay in the loop with the latest activities. Subscribe now!</span>
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
    </>
  );
}
