export default function Projects() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="/img/crowd.jpg"
              alt="about"
              className="h-40 md:h-80  w-full object-cover "
            />
          </div>
          <h1 className=" text-2xl md:text-5xl absolute text-white bottom-1/2 pl-10 md:pl-20">
            My Projects
          </h1>
        </div>
      </div>

      <div className="px-20 pt-20 pb-10">
        <h1 className="text-sm py-4">MY PASSION PROJECT</h1>
        <div className="grid grid-cols-2 space-x-5">
          <h2 className=" content-center bg-white px-3 rounded-md">
            Beyond my professional endeavors, I am the proud creator of the TTS
            Initiative, a non-governmental organization dedicated to empowering
            teenagers and young adults. The TTS Initiative is more than just a
            platform; it is a movement that aims to bridge the gap between
            aspirations and achievements for young people across the globe
          </h2>
          <img
            src="/img/crowd.jpg"
            className="h-60 w-full object-cover"
            alt="tts"
          />
        </div>
      </div>
      <div className="px-20 pt-20 pb-10">
        <h1 className="text-3xl py-4">Our Mission</h1>
        <div className="flex">
          {/* <img src="/img/crowd.jpg" className="h-72  object-cover" alt="tts" /> */}
          <div className="w-full ">
            <iframe
              className="h-60 w-full"
              src="https://www.youtube.com/embed/RncM7QE6vKI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h2>
            To inspire, educate, and empower the next generation of leaders
            through dynamic events, workshops, and interactive platforms.
          </h2>
        </div>
      </div>
      <div className="p-20">
        <h1 className="text-3xl pb-4">What we do</h1>
        <div className="grid grid-cols-3 gap-3">
          <div className="px-3 space-y-2">
            <img src="/img/crowd.jpg" className="" />
            <h1 className="text-lg">Events</h1>
            <h2 className="text-sm">
              Hosting engaging and thought-provoking events that bring together
              young and established entrepreneurs, students, and professionals
              from diverse backgrounds.
            </h2>
          </div>
          <div className="px-3 space-y-2">
          <img src="/img/crowd.jpg" className="" />

            <h1 className="text-lg">Interactive Platforms</h1>
            <h2 className="text-sm">
              {" "}
              Providing spaces where youth can connect with influential figures,
              mentors, and thought leaders, gaining insights and forging
              valuable connections
            </h2>
          </div>
          <div className="px-3 space-y-2">
          <img src="/img/crowd.jpg" className="" />

            <h1 className="text-lg">Community Building</h1>
            <h2 className="text-sm">
              Fostering a supportive community that encourages growth, learning,
              and collaboration among its members.
            </h2>
          </div>
        </div>
      </div>
      <div id="quote">
        Through the TTS Initiative, I aim to create a ripple effect of positive
        change, where young minds are nurtured, empowered, and equipped to
        tackle the challenges of tomorrow.
      </div>
    </>
  );
}
