import { Link } from "react-router-dom"

function Page404(){
    return(
        <div>
            <h1>Page 404</h1>
            <h2>This URL is dones not Exitst</h2>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}

export default Page404