import { PersonalizedHeader } from "./IndexPage";
import HorizontalScroller from "./components/HorizontalScroller";

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

      <section className="bg-black text-white px-5 md:px-20 pt-12 md:pt-20 pb-8">
        <p className="text-primary-light uppercase tracking-widest text-sm font-semibold">
          Credentials
        </p>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight pb-6 md:pb-10">
          Qualifications &amp; Memberships
        </h1>
        <HorizontalScroller>
          {sortedSolutions.map((item, index) => (
            <CertCard key={index} item={item} />
          ))}
        </HorizontalScroller>
      </section>

      <section className="bg-black text-white px-5 md:px-20 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="mb-6 md:mb-10 border-t border-zinc-800 pt-8 md:pt-12">
          <p className="text-primary-light uppercase tracking-widest text-sm font-semibold">
            More
          </p>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
            Other Certifications
          </h2>
        </div>
        <HorizontalScroller>
          {sortedOthers.map((item, index) => (
            <CertCard key={index} item={item} />
          ))}
        </HorizontalScroller>
      </section>
    </>
  );
}

function CertCard({ item }: { item: { year: number; img: string; texts: string } }) {
  return (
    <div className="w-64 md:w-72 shrink-0 snap-start overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 transition hover:border-primary-light">
      <div className="flex h-44 md:h-52 items-center justify-center bg-white p-4">
        <img
          src={item.img}
          alt={item.texts}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="space-y-2 p-4">
        <span className="text-primary-light font-semibold">{item.year}</span>
        <h3 className="font-light text-sm md:text-base text-zinc-200">
          {item.texts}
        </h3>
      </div>
    </div>
  );
}
