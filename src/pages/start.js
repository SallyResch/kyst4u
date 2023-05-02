import Navbar from "./components/Navbar";
import User from "./components/User";
import Admin from "./components/Admin";

export default function start() {
  return (
    <div>
      <Navbar/>
      <User/>
      <Admin/>
    </div>
  )
}
