import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import styles from "./Layout.module.scss";

export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <main className={styles.main}>{children}</main>
      <Footer/>
    </div>
  )
}
