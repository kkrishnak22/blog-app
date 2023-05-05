import React,{useState} from "react";

export default function RandomColor() {
    const [color, setColor] = useState("");
    const styles = {
        border: "1px solid black",
        width : "250px",
        height: "250px",
        textAlign: "center",
        backgroundColor: color 
    }
  return (
    <div>
      <div style={styles}
      >
      {color?color:"enter text"}
      </div>
      <input 
        type="text" 
        placeholder="color"
        onChange={(e)=> setColor(e.target.value) }
        value={color}
        autoFocus
      />
    </div>
  );
}
