import React from 'react'
import {Link } from "react-router-dom"
export default function Post({post,id}) {
  return (
    <div>
    <Link to={`/post/${id}`}>
    <h2>{post.title}</h2>
    
    </Link>
    <p>{post.body}</p>
    <p>{post.datetime}</p>
    <hr />
  </div>
  )
}
