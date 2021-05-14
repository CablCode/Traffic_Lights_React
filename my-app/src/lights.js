import { useState } from 'react'

const Colors = () => {
    const [color, pickColor] = useState("")

    return (
        <div className="allLights">
            <div onClick={() => pickColor("red")} className= {`red light ${color === "red" ? "shining" : ""}`} />
            <div onClick={() => pickColor("yellow")} className= {`yellow light ${color === "yellow" ? "shining" : ""}`} />
            <div onClick={() => pickColor("green")} className= {`green light ${color === "green" ? "shining" : ""}`} />
        </div>
    )
}

export default Colors;