import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Footer from "../src/pages/components/Footer";
import ScrollToTop from "../src/pages/components/ScrollToTop";
const Layout = () => {
    return (
        <div>
            {/* <Header /> */}
            <ScrollToTop />
            <Outlet />
            <Footer />
            
        </div>
    )
}

export default Layout;