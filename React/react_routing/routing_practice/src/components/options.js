import React from "react";
import { useParams } from "react-router-dom";

const Options = (props) => {
    const {entry, color, bgColor} = useParams();
    return(
        <div>
            {
                isNaN(entry)?
                <h1 style={
                    color?
                    {color: color, backgroundColor: bgColor}
                    :null
                }
                >The word is: {entry}</h1>
                :
                <h1>The number is : {entry}</h1>

            }
        </div>
    );
}
export default Options;