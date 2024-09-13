// export default function Work() {
//   return (
//     <>
//       <div id="collaboration" className="bg-pink-400 grid">
//         <h1>Let's collaborate</h1>
//         <h2>
// I am always eager to embark on new ventures and projects that align
// with my passion for innovation and results-driven strategies. Whether
// you’re looking to revamp your brand, implement a cutting-edge digital
// marketing strategy, or develop disruptive content that speaks to your
// audience, I am here to help.
//         </h2>
//       </div>
//       <div id="consultation" className="bg-red-400 grid">
//         <h1>Brand Consultation: </h1>
//         Schedule a meeting With over a decade of experience in B2B and B2C brand
//         consultation, I will bring a unique blend of strategic insight,
//         creativity, and actionable solutions tailored to your business needs. My
//         proven track record spans multiple industries, helping brands achieve
//         sustainable growth, increased market share, and stronger loyalty. I
//         offer comprehensive services from brand positioning to digital
//         marketing, ensuring your brand stays ahead in a competitive market. By
//         prioritizing your business goals and adopting a forward-thinking
//         approach, I’m committed to elevating your brand and driving measurable
//         success.
//       </div>
//       <div id="book-me" className="bg-green-400 grid">
//         <h1>
//           Event Guest, Facilitator or Appearance - Book Oluwayemisi Adedayo
//         </h1>
//         Leveraging my extensive experience working with hundreds of brands
//         across Africa and Europe, I deliver deep industry insights and
//         actionable strategies tailored to diverse audiences. My dynamic
//         presentation style, combined with a comprehensive understanding of the
//         latest marketing and brand development trends, ensures that your
//         audience will gain valuable, practical takeaways that drive business
//         growth and inspire meaningful change
//       </div>
//       <div id="coaching" className=" bg-blue-400 grid">
//         <h1>1 on 1 Coaching (Business/Individual) - Schedule a meeing</h1>
//         If you aim to elevate your brand, refine your marketing strategies, or
//         tackle complex business challenges, my expertise will provide the
//         clarity and direction needed for meaningful growth. Booking a one-on-one
//         session with me means investing in a partnership focused on driving your
//         success.
//       </div>
//       <div id="free-mentorship" className="bg-fuchsia-400 grid">
//         <h1>Free Engagement & Mentorship - Schedule 15 minutes</h1>I am
//         passionate about supporting young individuals and emerging businesses. I
//         dedicate time to mentor and guide them, helping them grow and achieve
//         success with tailored advice and strategic insights.
//       </div>
//     </>
//   );
// }

// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// interface SectionType {
//   id: string;
//   title: string;
//   bgColor: string;
//   description: string;
// }

// const sections = [
//   {
//     id: "collaboration",
//     title: "Let's collaborate",
//     bgColor: "bg-pink-400",
//     description: "I am always eager to embark on new ventures and projects that align with my passion for innovation and results-driven strategies. Whether you’re looking to revamp your brand,implement a cutting-edge digital marketing strategy, or develop disruptive content that speaks to your audience, I am here to help.",
//   },
//   {
//     id: "consultation",
//     title: "Brand Consultation: Schedule a meeting",
//     bgColor: "bg-red-400",
//     description: "With over a decade of experience in B2B and B2C brand consultation, I bring a unique blend of strategic insight, creativity, and actionable solutions s tailored to your business needs. My proven track record spans multiple industries, helping brands achieve sustainable growth, increased market share, and stronger loyalty. I offer comprehensive services from brand positioning to digital marketing, ensuring your brand stays ahead in a competitive market. By prioritizing your business goals and adopting a forward-thinking approach, I’m committed to elevating your brand and driving measurable success.",
//   },
//   {
//     id: "book-me",
//     title: "Event Guest, Facilitator or Appearance: Book Oluwayemisi Adedayo",
//     bgColor: "bg-green-400",
//     description: "Leveraging my extensive experience working with hundreds of brands across Africa and Europe, I deliver deep industry insights and actionable strategies s tailored to diverse audiences. My dynamic presentation style, combined with a comprehensive understanding of the latest marketing and brand development trends, ensures that your audience will gain valuable, practical takeaways that drive business growth and inspire meaningful change.",
//   },
//   {
//     id: "coaching",
//     title: "1 on 1 Coaching (Business/Individual): Schedule a meeting",
//     bgColor: "bg-blue-400",
//     description: "If you aim to elevate your brand, refine your marketing strategies, or tackle complex business challenges, my expertise will provide the clarity and direction needed for meaningful growth. Booking a one-on-one session with me means investing in a partnership focused on driving your success.",
//   },
//   {
//     id: "free-mentorship",
//     title: "Free Engagement & Mentorship: Schedule 15 minutes",
//     bgColor: "bg-fuchsia-400",
//     description: "I am passionate about supporting young individuals and emerging businesses. I dedicate time to mentor and guide them, helping them grow and achieve success with tailored advice and strategic insights.",
//   },
// ];

// export default function Work() {
//   return (
//     <div className="relative">
//       {/* Vertical Timeline Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400"></div>

//       {sections.map((section, index) => (
//         <Section key={section.id} section={section} isEven={index % 2 === 0} />
//       ))}
//     </div>
//   );
// }

// function Section({
//   section,
//   isEven,
// }: {
//   section: SectionType;
//   isEven: boolean;
// }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.5 });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, backgroundColor: "transparent" },
//         visible: { opacity: 1, backgroundColor: section.bgColor },
//       }}
//       transition={{ duration: 0.9 }}
//       className={`grid p-10 mb-10 w-1/2 ${isEven ? "ml-auto" : "mr-auto"} ${
//         section.bgColor
//       }`}
//       id={section.id}
//     >
//       <h1 className="font-semibold">{section.title}</h1>
//       <h1 className="text-black">{section.description}</h1>
//     </motion.div>
//   );
// }

import React, { useState} from "react";
import  "../work.css"
export default function Work() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation logic here
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.service) {
      alert("Please fill in all fields.");
      return;
    }

    // Submit the booking (e.g., send to a backend server)
    console.log("Booking Data:", formData);
    // After submission, you can show a success message or redirect the user
  };

  return (
    <>
    <h1 className=" text-center text-2xl font-bold text-blue-950 py-10">Want to work together?</h1>
     <div className="timeline bg-gray-800 text-white py-10 ">
      <div className="container left w-[550px]">
        <div className="content">
          <h2 className="text-xl font-medium">Let's collaborate</h2>
          <p className="text-sm font-light">
            I am always eager to embark on new ventures and projects that align
            with my passion for innovation and results-driven strategies.
            Whether you’re looking to revamp your brand, implement a
            cutting-edge digital marketing strategy, or develop disruptive
            content that speaks to your audience, I am here to help{" "}
          </p>
        </div>
      </div>

      <div className="container right w-[550px]">
        <div className="content">
          <h2 className=" text-xl font-medium">Brand Consultation: Schedule a meeting</h2>
          <p className=" text-sm font-light">
            With over a decade of experience in B2B and B2C brand consultation,
            I bring a unique blend of strategic insight, creativity, and
            actionable solutions tailored to your business needs. My proven
            track record spans multiple industries, helping brands achieve
            sustainable growth, increased market share, and stronger loyalty. I
            offer comprehensive services from brand positioning to digital
            marketing, ensuring your brand stays ahead in a competitive market.
            By prioritizing your business goals and adopting a forward-thinking
            approach, I’m committed to elevating your brand and driving
            measurable success.
          </p>
        </div>
      </div>

      <div className="container left w-[550px]">
        <div className="content">
          <h2 className=" text-xl font-medium">
            Event Guest, Facilitator or Appearance: Book Oluwayemisi Adedayo
          </h2>
          <p className=" text-sm font-light">
            Leveraging my extensive experience working with hundreds of brands
            across Africa and Europe, I deliver deep industry insights and
            actionable strategies tailored to diverse audiences. My dynamic
            presentation style, combined with a comprehensive understanding of
            the latest marketing and brand development trends, ensures that your
            audience will gain valuable, practical takeaways that drive business
            growth and inspire meaningful change.
          </p>
        </div>
      </div>

      <div className="container right w-[550px]">
        <div className="content">
          <h2 className=" text-xl font-medium">1 on 1 Coaching (Business/Individual): Schedule a meeting</h2>
          <p className=" text-sm font-light">
            If you aim to elevate your brand, refine your marketing strategies,
            or tackle complex business challenges, my expertise will provide the
            clarity and direction needed for meaningful growth. Booking a
            one-on-one session with me means investing in a partnership focused
            on driving your success.
          </p>
        </div>
      </div>
    </div>
    <div className="w-[420px] h-full mt-10 p-4 bg-slate-100 text-black rounded-md self-center">
      <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select a service</option>
            <option value="Consultation">Consultation</option>
            <option value="Strategy Session">Strategy Session</option>
            <option value="1-on-1 Coaching">1-on-1 Coaching</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded-md"
        >
          Book Now
        </button>
      </form>
    </div>
  
    </>
   
  );
}
