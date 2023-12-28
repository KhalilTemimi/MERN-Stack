import React, {useState} from "react";
const PersonCard = (props) => {
    const [age, setAge] = useState(props.age)
    return(
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <h5>Age: {age}</h5>
            <h5>Hair Color: {props.hairColor}</h5>
            <button onClick={(event) => setAge(age+1)}>Birthday Button for {props.lastName} {props.firstName} </button>
        </div>
    )
}
export default PersonCard