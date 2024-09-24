import { PersonalizedHeader } from "./IndexPage";

export default function About() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="/yemisi/11.jpg"
              alt="about"
              className=" h-[600px] w-full object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[377px] h-[377px] top-44 left-20 flex">
            <h1 className="text-3xl font-semibold py-40 pl-16 ">
              <h2 className="border-t border-white  w-fit ">ABOUT</h2>OLWAYEMISI
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 p-20">
        <div id="1" className="pr-5">
          <h1 className="text-3xl font-medium">Oluwayemisi T. Adebayo</h1>
          <h2>
            Welcome to my corner of the web! I am a dedicated Business
            Consultant and Life Coach, deeply passionate about helping
            individuals and organizations achieve their goals and unlock their
            full potential.
          </h2>
          <h1>My Mission</h1>
          <h2>
            My mission is simple: to empower businesses and individuals to
            thrive in today’s fast-paced, competitive landscape. I believe that
            with the right strategies, insights, and support, anyone can
            transform their aspirations into reality.
          </h2>
        </div>
        <div id="2">
          <img src="/yemisi/11.jpg" className="rounded-md" />
        </div>
      </div>
    </>
  );
}
