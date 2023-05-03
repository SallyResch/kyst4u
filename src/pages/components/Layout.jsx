import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";


export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
