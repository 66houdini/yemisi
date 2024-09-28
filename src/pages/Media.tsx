import { PersonalizedHeader } from "./IndexPage";

export default function Media() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/3-copy_wfdeb2.jpg"
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
                  For over a decade, Legal Climate has overseen the
                  multi-million Naira Estate of E.O. Somoye
                </h3>
                <h1 className=" text-zinc-700 text-sm ">
                  Legal Climate have been involved and been in charge of the
                  Estate of E.O Somoye which ranges in multi-million Naira
                  Estate Management deals for over a decade now, while the
                  offspring of the deceased;
                </h1>
                
              </div>
              <div id="1">
                <img
                  src="https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg"
                  className=" w-full h-[400px] object-cover object-top"
                />
                <h3 className=" py-5  text-base font-medium hover:underline">
                  For over a decade, Legal Climate has overseen the
                  multi-million Naira Estate of E.O. Somoye
                </h3>
                <h1 className=" text-zinc-700 text-sm ">
                  Legal Climate have been involved and been in charge of the
                  Estate of E.O Somoye which ranges in multi-million Naira
                  Estate Management deals for over a decade now, while the
                  offspring of the deceased;
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
