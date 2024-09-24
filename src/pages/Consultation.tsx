import { PersonalizedHeader } from "./IndexPage";

export default function Consultation() {
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
            <h1 className="text-3xl font-semibold py-40 pl-16 flex">
              <h2 className="border-t border-white ">CON</h2>SULTATION
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
