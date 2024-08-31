export default function Contact() {
  return (
    <div className="flex">
      <div className="bg-[#F7F2E9] px-20 pt-20 w-2/3 ">
      <div className="space-y-3">
        <h1 className=" text-3xl font-bold">CONTACT ME</h1>
        <h2>Let's Connect</h2>
        <h3 className=" italic">
             Get in Touch: Let’s work together to turn your vision into reality. Feel
        free to reach out to discuss how we can collaborate on your next big
        project, or simply to share ideas and explore new opportunities
        </h3>
      </div>
      <div>
        <form className=" py-4">
            <label className="text-sm">Name</label>
            <input type="text"  className="w-full p-2 my-2 bg-[#F7F2E9] border" />
            <label className="text-sm">Email</label>
            <input type="email"  className="w-full p-2 my-2 bg-[#F7F2E9] border" />
            <label className="text-sm">Phone</label>
            <input type="text"  className="w-full p-2 my-2 bg-[#F7F2E9] border" />
            <label className="text-sm">Subject</label>
            <input type="text"  className="w-full p-2 my-2 bg-[#F7F2E9] border" />
            <label className="text-sm">Message</label>
            <textarea  className="w-full p-2 my-2 bg-[#F7F2E9] border" />
            <button className="  border-2 border-black p-2 my-2">Submit</button>
        </form>
      </div>
        
       
      </div>
      <div className="w-1/3">
      <img src="/img/long.jpg" className="h-full" />
      </div>
    </div>
  );
}
