import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit: React.FormEventHandler = (event) =>
    event.preventDefault();
  return (
    <>
      <div>
        <div id="1" className="relative">
          <div className="relative">
            <img
              src="/img/sideways.jpg"
              className="w-full h-[400px] object-cover brightness-75"
            />

            <div className="absolute top-[150px] left-[100px] text-5xl font-bold text-white">
              <h1>CONTACT OLUWAYEMISI</h1>
              <div className="flex pt-5 justify-center">
                <Link className="text-2xl font-medium" to={"/home"}>Home</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 self-center text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <Link className="text-2xl font-medium" to={"/contact"}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div id="2" className="p-10 pl-20 flex bg-purple-100 h-[500px]">
          {/* <div className="absolute top-0 left-[50px] h-[150px] w-[1px] bg-zinc-400"></div> */}

          <div className="space-y-3 w-1/2">
            <h1 className=" text-3xl font-bold">CONTACT ME</h1>
            <h2>Let's Connect</h2>
            <div className="pb-10">
              <img src="/img/gmail.png" className="w-10" />
              <h6>talktooluwayemisiadebyao.com</h6>
            </div>
            <h3 className=" italic w-[400px]">
              Get in Touch: Let’s work together to turn your vision into
              reality. Feel free to reach out to discuss how we can collaborate
              on your next big project, or simply to share ideas and explore new
              opportunities
            </h3>
          </div>

          <div className="w-[550px] bg-white text-blue-950 p-10 py-5 rounded-md absolute right-10 top-72">
            <form className=" py-4" onSubmit={handleSubmit}>
              <label className="text-sm">Name</label>
              <input
                type="text"
                className="w-full p-2 my-2 bg-zinc-200 border"
              />
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="w-full p-2 my-2 bg-zinc-200 border"
              />
              <label className="text-sm">Phone</label>
              <input
                type="text"
                className="w-full p-2 my-2 bg-zinc-200 border"
              />
              <label className="text-sm">Subject</label>
              <input
                type="text"
                className="w-full p-2 my-2 bg-zinc-200 border"
              />
              <label className="text-sm">Message</label>
              <textarea className="w-full p-2 my-2 bg-zinc-200 border" />
              <button className="  border  border-black rounded-md p-2 my-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div className="bg-[#F7F2E9] px-20 pt-20 w-2/3 ">
          <div className="space-y-3">
            <h1 className=" text-3xl font-bold">CONTACT ME</h1>
            <h2>Let's Connect</h2>
            <h3 className=" italic">
              Get in Touch: Let’s work together to turn your vision into
              reality. Feel free to reach out to discuss how we can collaborate
              on your next big project, or simply to share ideas and explore new
              opportunities
            </h3>
          </div>
          <div>
            <form className=" py-4">
              <label className="text-sm">Name</label>
              <input
                type="text"
                className="w-full p-2 my-2 bg-[#F7F2E9] border"
              />
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="w-full p-2 my-2 bg-[#F7F2E9] border"
              />
              <label className="text-sm">Phone</label>
              <input
                type="text"
                className="w-full p-2 my-2 bg-[#F7F2E9] border"
              />
              <label className="text-sm">Subject</label>
              <input
                type="text"
                className="w-full p-2 my-2 bg-[#F7F2E9] border"
              />
              <label className="text-sm">Message</label>
              <textarea className="w-full p-2 my-2 bg-[#F7F2E9] border" />
              <button className="  border  border-black rounded-md p-2 my-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/3">
          <img src="/img/long.jpg" className="h-full" />
        </div>
      </div> */}
    </>
  );
}
