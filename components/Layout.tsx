import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Footer from "../src/pages/components/Footer";
const Layout = () => {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
            <Footer />
            
        </div>
    )
}

export default Layout;