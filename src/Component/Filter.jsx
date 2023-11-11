import { useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParams,setSearchParams] = useSearchParams();
    console.warn(searchParams.get("age"));
    console.warn(searchParams.get("city"));
    const age = (searchParams.get("age"));
    const city = (searchParams.get("city"));
    return(
        <>
        <h1>This is Filter Page</h1>
        <h3>My age is {age}</h3>
        <h3>My city is {city}</h3>
        <input type="text" onChange={(e)=>{setSearchParams({text:e.target.value,age:10})}} placeholder="Set Text in Query Params"  />
        <button onClick={()=>{setSearchParams({age:40})}}>Set age in query params</button>
        </>
    )
}

export default Filter;