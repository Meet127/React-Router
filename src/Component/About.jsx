import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <h1>About Page</h1>
        <p>This is About Us Page of our awesome App</p>
        <p>And here we arelearning about roter</p>
        <Link to="/">Go to Home page</Link>


        <li><Link to="/user/anil" state={{name:'anil siddhu'}}>Anil</Link></li>
        <li><Link to="/user/peter">peter</Link></li>
        </>
    )
}

export default About;