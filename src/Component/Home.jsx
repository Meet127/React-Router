import { Link,useNavigate } from "react-router-dom";

function Home() {
    const navigate= useNavigate();
    const navtopage = (url) =>{
            navigate(url)
    }

    return (
        <>
            <h1>Home Page.</h1>
            <p>This is a Home Page of our awesome App</p>
            <p>And here we arelearning about roter</p>
            <Link to="/about">Go to about page</Link>
            <br />
            <button onClick={()=>navtopage('/about')}>Go to About Page</button><br />
            <button onClick={()=>navtopage('/filter')}>Go to Filter Page</button>
        </>
    )
}

export default Home;