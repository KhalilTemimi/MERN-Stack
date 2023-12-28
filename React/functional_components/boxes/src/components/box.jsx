import React, {useState} from 'react'

const Box = (props) => {

    const{boxColorArray, setBoxColorArray} = props;
    const[color, setColor] = useState("");
    const[size, setSize] = useState(100);

    const submitHandler = (event) =>{
        event.preventDefault();
        setBoxColorArray([...boxColorArray,{color:color,size:size + "px"}]);
        setColor("");
        setSize(100);
    }
  return (
    <div>
        <h1>Box Generator</h1>
        <form onSubmit={submitHandler}>
            <label className="space" htmlFor="color">Color</label>{}
            <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <label className="space" htmlFor="size">Size</label>{}
            <input type="text" name="size" onChange={(e) => setSize(e.target.value)}/>
            <input className="space" type="submit" value="Add"/>
        </form>

    </div>
  )
}

export default Box;