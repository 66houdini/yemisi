import { PersonalizedHeader } from "./IndexPage";


const solutions = [
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg", texts: "Advance HE - Associate Fellowship" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/3-copy_wfdeb2.jpg", texts: "CMrg - Chartered Management Institute UK (CMI)" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245830/yemisi/16_elqfvu.jpg", texts: "Professional Certificate in Strategic Leadership - London School Of Business Administration" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245913/yemisi/17_jcxrog.jpg", texts: "Member - Chartered Management Institute UK (CMI)" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg", texts: "Advance Professional Certificate in Business Management - London School Of Business Administration" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245919/yemisi/5_clgpcc.jpg", texts: "Certified - Management Specialist with Distinction in Time Management, London Graduate School" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245880/yemisi/6-copy_gqgboh.jpg", texts: "Certified - Management Consultant Nigeria (CMC)" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg", texts: "Fellow - Institute of Management Consultants Nigeria (FIMC)" },
  { year: 2023, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245913/yemisi/17_jcxrog.jpg", texts: "M.Sc. - Digital Marketing - University of Bedfordshire, Luton" },
  { year: 2023, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245830/yemisi/16_elqfvu.jpg", texts: "Digital Marketing for CXOs - (SkillUP)" },
  { year: 2022, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/3-copy_wfdeb2.jpg", texts: "PGD Mass communication- National Open University Of Nigeria" },
  { year: 2021, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg", texts: "Associate Fellow Advertising Practitioners Council of Nigeria (APCON)" },
  { year: 2017, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245913/yemisi/17_jcxrog.jpg", texts: "Event Management - Precepts & Mentors Nigeria & Dubai" },
  { year: 2016, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245830/yemisi/16_elqfvu.jpg", texts: "Masters - Digital Marketing - Team7 Project, Nigeria" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/3-copy_wfdeb2.jpg", texts: "Safeguarding Children and Young People - Thirtyone:eight" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg", texts: "Certificate - Equality, Diversity & Inclusion, iHasco" },
  { year: 2024, img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245913/yemisi/17_jcxrog.jpg", texts: "Health and Safety Essentials" },
];



export default function Certifications() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg"
              alt="about"
              className=" h-[600px] w-full object-top object-cover "
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
        <h2 className="font-light">{item.texts}</h2>
      </div>
    ))}
  </div>
    </>
  );
}
