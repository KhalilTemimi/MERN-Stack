import React from 'react'

const Display = (props) => {
    const {boxColorArray} = props;
  return (
    <div>
        {
            boxColorArray.map((box,index) =>(
                <div key  = {index} style={{
                    display: "inline-block",
                    margin: "20px",
                    height: box.size,
                    width: box.size,
                    backgroundColor: box.color
                }}>
                </div>
            ))
        }
    </div>
  );
}

export default Display;