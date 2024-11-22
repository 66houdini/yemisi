import { PersonalizedHeader } from "./IndexPage";

const solutions = [
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Logo_2_qrarga.png",
    texts: "Advance HE - Associate Fellowship",
  },
  // {
  //   year: 2024,
  //   img: "https://res.cloudinary.com/dador6eng/image/upload/v1727245905/yemisi/3-copy_wfdeb2.jpg",
  //   texts: "CMrg - Chartered Management Institute UK (CMI)",
  // },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900459/ebconcept/Logo_jqrgfb.png",
    texts:
      "Professional Certificate in Strategic Leadership - London School Of Business Administration",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900460/ebconcept/Logo_6_hpn7c3.png",
    texts: "Member - Chartered Management Institute UK (CMI)",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900458/ebconcept/Logo_5_fbggaq.png",
    texts: "Certified - Management Consultant Nigeria (CMC)",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1729807605/yemisi/london_graduate_school_logo_cvzkdr.jpg",
    texts:
      "Certified - Management Specialist with Distinction in Time Management, London Graduate School",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900459/ebconcept/Logo_jqrgfb.png",
    texts:
      "Advance Professional Certificate in Business Management - London School Of Business Administration",
  },

  {
    year: 2016,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Team7_project_ggotvm.png",
    texts: "Masters - Digital Marketing - Team7 Project, Nigeria",
  },

  {
    year: 2023,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1729807605/yemisi/niversity_of_Beds_lyy9rp.jpg",
    texts: "M.Sc. - Digital Marketing - University of Bedfordshire, UK",
  },
  {
    year: 2023,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/CXS_training_image_c0x20j.png",
    texts: "Digital Marketing for CXOs",
  },
  {
    year: 2022,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900461/ebconcept/Logo_10_wtu1jn.png",
    texts: "PGD Mass communication- National Open University Of Nigeria",
  },
  {
    year: 2021,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Logo_4_v5clmr.png",
    texts:
      "Associate Fellow Advertising Practitioners Council of Nigeria (APCON)",
  },
  {
    year: 2017,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900458/ebconcept/Logo_7_zkmawq.png",
    texts: "Event Management - Precepts & Mentors Nigeria & Dubai",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900461/ebconcept/Logo_8_wl1l2q.png",
    texts: "Fellow - Institute of Management Consultants Nigeria (FIMC)",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Logo_1_n9nnlm.png",
    texts: "TheCoaching Academy UK"
  }
];

const others = [
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Ihasco_x2c6fe.png",
    texts: "Certificate - Equality, Diversity & Inclusion, iHasco",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900460/ebconcept/Logo_11_pxwiyz.png",
    texts: "Safeguarding Children and Young People - Thirtyone:eight",
  },
  {
    year: 2024,
    img: "https://res.cloudinary.com/dador6eng/image/upload/v1730900462/ebconcept/Ihasco_x2c6fe.png",
    texts: "Health and Safety Essentials",
  },
];

const sortedSolutions = solutions.sort((a, b) => b.year - a.year);
const sortedOthers = others.sort((a, b) => b.year - a.year);
export default function Certifications() {
  return (
    <>
      <div className="w-full items-center justify-center h-fit relative ">
        <div className="relative">
          <div className="brightness-75">
            <img
              src="https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg"
              alt="about"
              className="h-[300px] md:h-[600px] w-full object-top object-cover "
            />
          </div>
          {/* <Header/> */} <PersonalizedHeader bg="bg-transparent" />
          <div className=" border border-white text-white absolute w-[185px] h-[185px] md:w-[377px] md:h-[377px] top-24 md:top-44 left-10 md:left-20 flex">
            <h1 className="text-xl md:text-3xl font-semibold py-20 md:py-40 pl-8 md:pl-16 flex">
              <h2 className="border-t border-white  w-fit ">CERT</h2>IFICATIONS
            </h1>
          </div>
        </div>
      </div>

      <div className="p-7 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-14 bg-black text-white">
        {sortedSolutions.map((item, index) => (
          <div key={index} className="text-center py-4 space-y-2">
            <img
              src={item.img}
              className="md:h-60  md:w-auto rounded-sm object-cover"
              alt={item.texts}
            />
            <h1>{item.year}</h1>
            <h2 className="font-light text-sm md:text-base">{item.texts}</h2>
          </div>
        ))}
      </div>

      <div className="p-7 md:p-20 pt-0 bg-black text-white">
        <h1 className=" py-3 text-3xl font-light border-b border-white">
          OTHER CERTIFICATIONS
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 bg-black text-white">
          {sortedOthers.map((item, index) => (
            <div key={index} className="text-center py-4 space-y-2">
              <img
                src={item.img}
                className="md:h-60 w-60 rounded-sm object-cover object-top"
                alt={item.texts}
              />
              <h1>{item.year}</h1>
              <h2 className="font-light">{item.texts}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
