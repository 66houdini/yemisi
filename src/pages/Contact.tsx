import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Contact() {
  const handleSubmit: React.FormEventHandler = (event) =>
    event.preventDefault();
  return (
    <>
      <div>
        <div id="1" className="relative">
          <div className="relative">
            <img
              src="/yemisi/4.jpg"
              className="w-full h-[500px] object-cover brightness-75"
            />
            <Header/>
            <div className="absolute top-[150px] left-[300px] text-5xl font-bold text-white">
              <h1>CONTACT OLUWAYEMISI</h1>
              <div className="flex pt-5 justify-center">
                <Link className="text-xl font-medium" to={"/home"}>
                  Home
                </Link>
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
                <Link className="text-xl font-medium" to={"/contact"}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="2" className="p-10  flex  h-[500px]">
          {/* <div className="absolute top-0 left-[50px] h-[150px] w-[1px] bg-zinc-400"></div> */}

          <div className=" w-[750px] grid grid-cols-[0.7fr_1.3fr] space-x-3">
            <div className="">
              <img src="/yemisi/3.jpg" className="border-2 " />
              <h1 className="text-2xl text-center pt-5 pb-2">OLUWAYEMISI</h1>
              <div className="flex justify-center space-x-2">
                <a href="mailto:talktooluwayemisiadebyao.com" className="">
                  <svg
                    className="w-8 h-8 text-blue-950 bg-primary border-2 p-1 rounded-full "
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
                    className="w-8 h-8 text-blue-950 bg-primary border-2 p-1 rounded-full "
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
                    className="w-8 h-8 text-blue-950 bg-primary border-2 p-1 rounded-full"
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
                    className="w-8 h-8 text-blue-950 bg-primary border-2 p-1 rounded-full"
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
                    className="w-8 h-8 text-blue-950 bg-primary border-2 p-1 rounded-full"
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
            <div className=" space-y-5 px-3">
              <h2 className="text-2xl font-semibold">Let's Connect</h2>
              <h3 className=" italic  pb-5">
                Get in Touch: Let’s work together to turn your vision into
                reality. Feel free to reach out to discuss how we can
                collaborate on your next big project, or simply to share ideas
                and explore new opportunities
              </h3>
              <Link
                to={"/work-with-me"}
                className="p-3 px-10 bg-primary text-black text-lg font-medium"
              >
                BOOK NOW
              </Link>
            </div>
            {/* <h1 className=" text-3xl font-bold">CONTACT ME</h1> */}
            {/* <div className="pb-10">
              <img src="/img/gmail.png" className="w-10" />
              <h6>talktooluwayemisiadebyao.com</h6>
            </div> */}
          </div>

          <div className="w-[400px] bg-zinc-100 text-blue-950 p-10 py-5 rounded-md absolute right-10 top-72">
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
