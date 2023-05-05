import React, { useContext } from 'react'
import { useParams,Link } from 'react-router-dom'
import DataContext from '../context/DataContext';
export default function PostPage() {
  const {id} = useParams();
  const {posts,handleDelete} = useContext(DataContext)
  const singlePoat = posts.find((post)=> id===(post.id).toString());

  return (
    <div>
     <h1>Singlr psot</h1>
     <h2> {singlePoat.title} </h2>
     <p> {singlePoat.body}</p>
     <button 
      onClick={()=>{
        handleDelete(id)
      }}
     >delete post</button>
    </div>
  )
}
