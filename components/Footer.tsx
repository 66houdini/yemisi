import React from "react";

const Footer = () => {
    const d = new Date();
    return (
       <div className=" text-center text-gray-500 font-medium py-4">
       &#169;{d.getFullYear()} OLUWAYEMISI ADEBAYO - ALL RIGHTS RESERVED
       </div>
    )
}

export default Footer;