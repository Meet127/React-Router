import { useParams } from "react-router-dom";


function user(){
    const param = useParams();
    const {name} = param;
    console.warn(name)
    return(
        <div>
            <h1>This is {name}'s Page</h1>
        </div>
    )
}

export default user;