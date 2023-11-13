import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div> <h1>Contact</h1>
      <h2>Hear we have some ohter business</h2>
      <Link to="company">Company</Link><br/>
      <Link to="channel">Channel</Link><br/>
      <Link to="other">Other</Link><br/>
      <Outlet/>
    </div>
  )
}

export default Contact;