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
        </>
    )
}