
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();

    const response = await fetch("https://trinity-demo.vercel.app/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Thank you for subscribing!");
        setEmail("");
    } else {
      const data = await response.json();
      alert(`Error: ${data.message}`);
    }
  };

  return (
    <form className="py-5 text-black" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className="p-1.5 md:p-3 w-96 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="p-2 md:p-4 bg-black text-white rounded-md">
        SUBSCRIBE
      </button>
    </form>
  );
};

export default NewsletterForm;
