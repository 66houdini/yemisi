import { PersonalizedHeader } from "./IndexPage";

export default function Media() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727482704/MO2_n8hiaq.jpg"
              alt="about"
              className=" h-[600px] w-full object-top object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[377px] h-[377px] top-44 left-20 flex">
            <h1 className="text-3xl font-semibold py-40 pl-16">
              <h2 className="border-t border-white ">MEDIA</h2>
            </h1>
          </div>
        </div>
      </div>
      <div className=" justify-items-center p-20">
        <h1 className="text-lg md:text-2xl font-semibold text-center">
          PODCASTS
          <div className="grid p-5 md:p-10 space-y-4 space-x-4">
            <div id="podcast" className="relative group justify-self-center">
              <iframe
                className="pb-3 rounded-md"
                height="560"
                width="315"
                src="https://www.youtube.com/embed/U-CbJHz1PyQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <img src="https://res.cloudinary.com/dador6eng/image/upload/v1727349801/20_sipaxb.jpg" className=" rounded-md h-[300px] w-full object-cover" /> */}
            </div>
            <div>
              <h1 className=" py-5">NEWS</h1>
              <div className="relative grid md:grid-cols-2 gap-4">
                <div id="news">
                  <img
                    src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
                    className=" w-full h-[400px] object-cover object-top"
                  />
                  <h3 className=" py-5  text-base font-medium hover:underline">
                    TTS Initiative Project 100 Schools Activation
                  </h3>
                  <h1 className=" text-zinc-700 text-sm ">
                    Last week, we had the incredible opportunity to empower
                    another set of teens through our #100SchoolsEmpowerment
                    program. These bright young minds were guided on how to
                    develop their personal brand and harness online
                    opportunities for their growth.
                  </h1>
                </div>
                <div id="1">
                  <img
                    src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
                    className=" w-full h-[400px] object-cover object-top"
                  />
                  <h3 className=" py-5  text-base font-medium hover:underline">
                    TTS Spotlight Program in December: A Unique Mentor-Mentee
                    Programme Launch
                  </h3>
                  <h1 className=" text-zinc-700 text-sm ">
                    In an exciting development, January 2024 marks the launch of
                    TTS spotlight, a unique mentor-mentee programme designed to
                    foster guidance and connection within our community. Whether
                    you’re a dedicated supporter, a valued partner, or someone
                    passionate about our cause, this initiative offers a special
                    opportunity to engage, share ideas, and build meaningful
                    connections.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
    </>
  );
}
