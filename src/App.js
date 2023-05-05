// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [formData, setFormData] = useState({
//     email:"",password:"",comments:"",checkBox:true,employment:"",color:""
//   })

//   function handleChange(e){
//      const {type,name,value,checked} =e.target
//     setFormData((prev)=>{
//      return {
//       ...prev ,
//       [name] : type==="checkbox" ? checked : value
//     }
//     })
//   }
//   function handleSubmit(e){
//     e.preventDefault();
//     console.log(formData)
//   }

//   return (
//     <div className="App">

//      <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           placeholder='email'
//           onChange={handleChange}
//           name='email'

//          />
//          <input
//           type='password'
//           placeholder='password'
//           onChange={handleChange}
//           name='password'

//          />
//          <textarea
//           onChange={handleChange}
//           name='comments'
//          />
//          <div>
//          <input type='checkbox' id='check' checked={formData.checkBox}
//          name='checkBox'
//          onChange={handleChange}
//           />
//          <label htmlFor='check'> Are you married </label>
//          </div>
//          <div>
//           <input type='radio'
//             id='unemployed'
//             value='unemployed'
//             name='employment'
//             onChange={handleChange}
//           />
//           <label>Unemployed</label>
//           <input type='radio' id='Part-time' value='part-time'
//             name='employment'
//             onChange={handleChange}
//           />
//           <label>Part-time</label>
//           <input type='radio' id='Full' value='full time'
//             name='employment' onChange={handleChange}
//           />
//           <label>Full-Time</label>
//          </div>
//          <select onChange={handleChange} name='color' >
//             <option value="red">Red</option>
//             <option value="green">Green</option>
//             <option value="blue">Blue</option>
//          </select>
//          <button>Submit</button>
//      </form>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./blogcompo/Home";
import { format } from "date-fns";
import api from "./api/posts";
import Layout from "./blogcompo/Layout";

import About from "./blogcompo/About";
import Missing from "./blogcompo/Missing";
import PostPage from "./blogcompo/PostPage";
import NewPost from "./blogcompo/NewPost";

import Meme from "./Meme";
import ThingsButton from "./components/ThingsButton";
import CheckBoxComponent from "./components/CheckBoxComponent";
import RandomColor from "./components/RandomColor";
import RestApiPractice from "./components/RestApiPractice";
import ToggleRestApiButtons from "./components/ToggleRestApiButtons";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post" element={<NewPost />} />
            <Route path="post/:id" element={<PostPage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}
