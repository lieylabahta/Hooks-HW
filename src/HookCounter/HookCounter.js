import React, {useState, useEffect} from "react";
function HookCounter(){
    const[counter, setCount] = useState(0);
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName]= useState("");
    useEffect(()=>{
        console.log("something Changed");
    })
    useEffect(( )=>{
   console.log("Mounted")
    }, []);
    useEffect(()=>{
console.log("firstName Updated")
    }, [firstName, lastName])
    function setCounter(){
        console.log("Counter")
        setCount(counter +1)
    }
    function submit(event){
        event.preventDefault();
        console.log("first Name: ", firstName)
        console.log("last Name: ", lastName)

    }
    return(
        <div>
            <button onClick={setCounter}>Click Me</button>
            <h3>{counter}</h3>
            <input type="text" value={firstName}onChange={(e) =>setFirstName (e.target.value)} />
            <input type="text" value={lastName}onChange={(e) =>setLastName (e.target.value)} />
            <button onClick={submit}> submit </button>

        </div>
    )
}
export default HookCounter;

