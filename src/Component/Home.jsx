import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <h1>Home Page.</h1>
        <p>This is a Home Page of our awesome App</p>
        <p>And here we arelearning about roter</p>
        <Link to="/about">Go to about page</Link>
        </>
    )
}

export default Home;