// import { Link } from "react-router-dom";

// export default function Projects() {
//   return (
//     <>
//       <div className="w-full items-center justify-center h-fit relative">
//         <div className="relative">
//           <div className="brightness-75">
//             <img
//               src="/img/sideways.jpg"
//               alt="about"
//               className="h-40 md:h-[600px] w-full object-cover "
//             />
//           </div>
//           {/* <h1 className=" text-2xl md:text-5xl absolute text-white bottom-1/2 pl-10 md:pl-20">
//               My Projects
//             </h1> */}
//           <div className=" p-12 space-y-6 bg-white text-blue-950 absolute  w-[377px] top-20 left-20 ">
//             <h1 className="text-2xl font-semibold">
//               <h2 className=" border-t border-t-primary w-fit">OUR</h2> MISSION
//             </h1>
//             {/* <h2 className="text-sm">Oluwayemisi serves as a catalyst to inspire, educate, and empower the next generation of leaders through dynamic events, workshops, and interactive platforms.</h2> */}
//             <h1 className="text-sm font-light">
//               {" "}
//               Oluwayemisi serves as a powerful catalyst for change, dedicated to
//               inspiring, educating, and empowering the next generation of
//               leaders. Through a diverse array of dynamic events and engaging
//               interactive platforms, she fosters personal growth and
//               professional development, equipping young leaders with the tools
//               and confidence needed to navigate challenges and create lasting
//               impact in their communities and beyond.
//             </h1>
//             <Link to="/contact" className="flex font-semibold">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="size-6 text-primary"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//                 />
//               </svg>
//               <h1 className="text-sm self-center">CONTACT ME</h1>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="px-20 pt-20 pb-10">
//         <h1 className="text-sm py-4">MY PASSION PROJECT</h1>
//         <div className="grid grid-cols-2 space-x-5">
//           <h2 className=" content-center bg-white px-3 rounded-md">
//             Beyond my professional endeavors, I am the proud creator of the TTS
//             Initiative, a non-governmental organization dedicated to empowering
//             teenagers and young adults. The TTS Initiative is more than just a
//             platform; it is a movement that aims to bridge the gap between
//             aspirations and achievements for young people across the globe
//           </h2>
//           <img
//             src="/img/crowd.jpg"
//             className="h-60 w-full object-cover"
//             alt="tts"
//           />
//         </div>
//       </div>
//       <div className="px-20 pt-20 pb-10">
//         <h1 className="text-3xl py-4">Our Mission</h1>
//         <div className="flex">
//           {/* <img src="/img/crowd.jpg" className="h-72  object-cover" alt="tts" /> */}
//           <div className="w-full ">
//             <iframe
//               className="h-60 w-full"
//               src="https://www.youtube.com/embed/RncM7QE6vKI"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//             ></iframe>
//           </div>

//           <h2>
//             To inspire, educate, and empower the next generation of leaders
//             through dynamic events, workshops, and interactive platforms.
//           </h2>
//         </div>
//       </div>
//       <div className="p-20">
//         <h1 className="text-3xl pb-4">What we do</h1>
//         <div className="grid grid-cols-3 gap-3">
//           <div className="px-3 space-y-2">
//             <img src="/img/crowd.jpg" className="" />
//             <h1 className="text-lg">Events</h1>
//             <h2 className="text-sm">
//               Hosting engaging and thought-provoking events that bring together
//               young and established entrepreneurs, students, and professionals
//               from diverse backgrounds.
//             </h2>
//           </div>
//           <div className="px-3 space-y-2">
//             <img src="/img/crowd.jpg" className="" />

//             <h1 className="text-lg">Interactive Platforms</h1>
//             <h2 className="text-sm">
//               {" "}
//               Providing spaces where youth can connect with influential figures,
//               mentors, and thought leaders, gaining insights and forging
//               valuable connections
//             </h2>
//           </div>
//           <div className="px-3 space-y-2">
//             <img src="/img/crowd.jpg" className="" />

//             <h1 className="text-lg">Community Building</h1>
//             <h2 className="text-sm">
//               Fostering a supportive community that encourages growth, learning,
//               and collaboration among its members.
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div id="quote">
//         Through the TTS Initiative, I aim to create a ripple effect of positive
//         change, where young minds are nurtured, empowered, and equipped to
//         tackle the challenges of tomorrow.
//       </div>
//     </>
//   );
// }

import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="/img/sideways.jpg"
              alt="about"
              className="h-40 md:h-[600px] w-full object-cover "
            />
          </div>
          {/* <h1 className=" text-2xl md:text-5xl absolute text-white bottom-1/2 pl-10 md:pl-20">
              My Projects
            </h1> */}
          <div className=" p-12 space-y-6 bg-white text-blue-950 absolute  w-[377px] top-20 left-20 ">
            <h1 className="text-2xl font-semibold">
              <h2 className=" border-t border-t-primary w-fit">OUR</h2> MISSION
            </h1>
            {/* <h2 className="text-sm">Oluwayemisi serves as a catalyst to inspire, educate, and empower the next generation of leaders through dynamic events, workshops, and interactive platforms.</h2> */}
            <h1 className="text-sm font-light">
              {" "}
              Oluwayemisi serves as a powerful catalyst for change, dedicated to
              inspiring, educating, and empowering the next generation of
              leaders. Through a diverse array of dynamic events and engaging
              interactive platforms, she fosters personal growth and
              professional development, equipping young leaders with the tools
              and confidence needed to navigate challenges and create lasting
              impact in their communities and beyond.
            </h1>
            <Link to="/contact" className="flex font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <h1 className="text-sm self-center">CONTACT ME</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-[100px] h-[150px] w-[1px] bg-zinc-400"></div>

        <div className="pt-14 pb-24 px-20 grid grid-cols-2 text-blue-950">
          <div id="1" className="pt-14 px-14 space-y-7 content-end">
            <h1 className="text-3xl font-bold">
              <h2 className="text-2xl font-medium">WE</h2> HOST EVENTS
            </h1>
            <h1 className="font-light text-sm">
              Hosting engaging and thought-provoking events that bring together
              young and established entrepreneurs, students, and professionals
              from diverse backgrounds.
            </h1>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              <h1 className="text-sm font-semibold self-center">IMPACT</h1>
            </div>
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
        <div className=" absolute -top-6 left-20 w-[500px] border-2 border-primary pt-40 px-14 pb-20 space-y-6">
          <div className="w-[300px] text-3xl font-bold py-4">
            <h1 className=" text-2xl font-medium border-t border-primary w-fit">
              WE GROW
            </h1>{" "}
            COMMUNITIES
          </div>
          <h1 className="w-[300px] text-sm font-light">
            Fostering a vibrant and supportive community that serves as a
            foundation for continuous growth, learning, and collaboration among
            its members. By creating an inclusive environment where individuals
            can connect, share ideas, and support one another, we encourage the
            exchange of knowledge, skills, and experiences.
          </h1>
        </div>
      </div>

      {/* <div className="px-10 py-20 grid grid-cols-[1.8fr_1.2fr] text-blue-950">
        <img
          src="/img/sideways.jpg"
          className=" h-[500px] py-8 w-full object-cover "
        />
        <div className="py-20 px-10  border-2 border-primary space-y-5">
          <div className=" text-2xl font-bold py-4">
            <h1 className=" text-xl font-medium border-t border-primary w-fit">
              WE PROVIDE
            </h1>{" "}
            INTERACTIVE PLATFORMS
          </div>
          <h1 className=" text-sm font-light">
            Providing dynamic and engaging spaces where youth have the
            opportunity to connect with influential figures, mentors, and
            thought leaders from a variety of fields. These spaces foster
            meaningful interactions, allowing young individuals to gain
            invaluable insights into their areas of interest, while also
            equipping them with the tools and knowledge needed for personal and
            professional growth.
          </h1>
        </div>
      </div> */}
      <div className="px-10 py-20 grid grid-cols-[2fr_1fr] text-blue-950 relative">
        <img
          src="/img/sideways.jpg"
          className="h-[500px] py-8 w-full object-cover relative z-0"
        />
        <div className="py-20 px-10 border-2 border-primary space-y-5 relative z-10 -ml-16 ">
          <div className="text-2xl font-bold py-4 pl-12">
            <h1 className="text-xl font-medium border-t border-primary w-fit">
              WE PROVIDE
            </h1>
            INTERACTIVE PLATFORMS
          </div>
          <h1 className="text-sm font-light pl-12">
            Providing dynamic and engaging spaces where youth have the
            opportunity to connect with influential figures, mentors, and
            thought leaders from a variety of fields. These spaces foster
            meaningful interactions, allowing young individuals to gain
            invaluable insights into their areas of interest, while also
            equipping them with the tools and knowledge needed for personal and
            professional growth.
          </h1>
        </div>
      </div>

      <div
        className="bg-cover object-center h-[400px] text-white relative"
        style={{ backgroundImage: 'url("/img/sideways.jpg")' }}
      >
        <div className="absolute inset-0  backdrop-filter backdrop-brightness-50  z-0"></div>

        <div className="bg-white text-blue-950 z-10 absolute top-20 left-10 w-[600px] p-10 space-y-3">
          <h1 className="text-2xl font-medium  w-fit flex">
            {" "}
            <h2 className="border-t border-primary mr-3">MY </h2>{" "} PASSION PROJECT
          </h1>
          <h2 className="text-sm font-light">
            Beyond my professional endeavors, I am the proud creator of the TTS
            Initiative, a non-governmental organization dedicated to empowering
            teenagers and young adults. The TTS Initiative is more than just a
            platform; it is a movement that aims to bridge the gap between
            aspirations and achievements for young people across the globe
          </h2>
          <Link to="/contact" className="flex font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            <h1 className="text-sm self-center">TTS Initiative</h1>
          </Link>
        </div>
      </div>

      {/* <div id="quote">
        Through the TTS Initiative, I aim to create a ripple effect of positive
        change, where young minds are nurtured, empowered, and equipped to
        tackle the challenges of tomorrow.
      </div> */}
    </>
  );
}
