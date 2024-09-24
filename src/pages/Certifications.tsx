import { PersonalizedHeader } from "./IndexPage";


const solutions = [
  { year: 2024, img: "/yemisi/11.jpg", texts: "Advance HE - Associate Fellowship" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "CMrg - Chartered Management Institute UK (CMI)" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Professional Certificate in Strategic Leadership - London School Of Business Administration" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Member - Chartered Management Institute UK (CMI)" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Advance Professional Certificate in Business Management - London School Of Business Administration" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Certified - Management Specialist with Distinction in Time Management, London Graduate School" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Certified - Management Consultant Nigeria (CMC)" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Fellow - Institute of Management Consultants Nigeria (FIMC)" },
  { year: 2023, img: "/yemisi/11.jpg", texts: "M.Sc. - Digital Marketing - University of Bedfordshire, Luton" },
  { year: 2023, img: "/yemisi/11.jpg", texts: "Digital Marketing for CXOs - (SkillUP)" },
  { year: 2022, img: "/yemisi/11.jpg", texts: "PGD Mass communication- National Open University Of Nigeria" },
  { year: 2021, img: "/yemisi/11.jpg", texts: "Associate Fellow Advertising Practitioners Council of Nigeria (APCON)" },
  { year: 2017, img: "/yemisi/11.jpg", texts: "Event Management - Precepts & Mentors Nigeria & Dubai" },
  { year: 2016, img: "/yemisi/11.jpg", texts: "Masters - Digital Marketing - Team7 Project, Nigeria" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Safeguarding Children and Young People - Thirtyone:eight" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Certificate - Equality, Diversity & Inclusion, iHasco" },
  { year: 2024, img: "/yemisi/11.jpg", texts: "Health and Safety Essentials" },
];



export default function Certifications() {
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
            <h1 className="text-3xl font-semibold py-40 pl-16 flex ">
              <h2 className="border-t border-white  w-fit ">CERT</h2>IFICATIONS
            </h1>
          </div>
        </div>
      </div>

      <div className="p-20 grid grid-cols-4 gap-4 bg-black text-white">
    {solutions.map((item, index) => (
      <div key={index} className="text-center py-4 space-y-2">
        <img src={item.img} className="h-60 w-60 rounded-full object-cover" alt={item.texts} />
        <h1>{item.year}</h1>
        <h2>{item.texts}</h2>
      </div>
    ))}
  </div>
    </>
  );
}
