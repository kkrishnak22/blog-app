import React from "react";
import {Link} from "react-router-dom"
export default function Nav({searchText,setSearchText}) {
  const listStyle = {
    margin: "0 10px",
    cursor: "pointer",
    color: "white",
  };
  const ulStyle = {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    margin: "0",
    padding: "0",
  };
  return (
    <div
      style={{
        backgroundColor: "#8e44ad",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
      }}
    >
      <input
        type="text"
        placeholder="Search...!"
        style={{
          padding: "5px",
          border: "none",
          borderRadius: "5px",
          outline: "none",
        }}
        value={searchText}
        onChange={(e)=> setSearchText(e.target.value) }
      />
      <ul style={ulStyle}>
        <li style={listStyle} >
          <Link to="/">Home</Link>
        </li>
        <li style={listStyle} >
        <Link to="/post">Create Post</Link>
        </li>
        <li style={listStyle} >
        <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
