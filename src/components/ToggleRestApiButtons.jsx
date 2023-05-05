import React, { useEffect, useState } from "react";

export default function ToggleRestApiButtons() {
  const API_URL = "https://jsonplaceholder.typicode.com"

  const [button, setButton] = useState([
    {
      id: 1,
      selected: true,
      backgroundColor: "white",
      color: "black",
      text: "users",
     
    },
    {
      id: 2,
      selected: false,
      backgroundColor: "white",
      color: "black",
      text: "posts",
     
    },
    {
      id: 3,
      selected: false,
      backgroundColor: "white",
      color: "black",
      text: "comments",
     
    },
  ]);

  const [apiData, setapiData] = useState([]);
  const [clickedText , setClickedText] = useState("users")

  const userData = apiData.map((user)=>{
    return <ul>
      <li>{JSON.stringify(user)}</li>
    </ul>
  })
  
  useEffect(()=>{
    async function getData(){
      try{
        const res = await fetch(`${API_URL}/${clickedText}`);
        console.log(`${API_URL}/${clickedText}`)
        const data = await res.json();
        setapiData(data)
      
      }catch(err){
        console.log(err)
      }
    }
    getData();
  },[clickedText])

  function handleClick(id) {
    setClickedText(button.find((but)=> id===but.id).text)
    setButton((prev) => {
      return prev.map((but) => {
        return id === but.id
          ? {
              ...but,
              selected: true,
            }
          : {
              ...but,
              selected: false,
            };
      });
    });
  }



  const allButtons = button.map((but) => {
    return (
      <div>
        <button
          key={but.id}
          style={{
            backgroundColor: but.selected ? "black" : "white",
            color: but.selected ? "white" : "black",
          }}
          onClick={() => {
            handleClick(but.id);
          }}
        >
          {but.text}
        </button>
      </div>
    );
  });
  return (
    
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",
        }}
      >
      {allButtons}
        {
          <div>
            <h1>{`All ${clickedText}`} </h1>
            <p>
              {userData}
            </p>
          </div>
        }
      </div>
    
  );
}
