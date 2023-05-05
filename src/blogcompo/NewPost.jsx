import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

export default function NewPost() {
  const {handleSubmit,postTitle,postBody,setPostTitle,setPostBody}=useContext(DataContext)
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <h2>Create a Post Here</h2>
      <input 
        type='text'
        placeholder='title'
        autoFocus
        value={postTitle}
        onChange={(e)=> setPostTitle(e.target.value) }
       />
       <textarea 
        type='text'
        placeholder='body'
        
        value={postBody}
        onChange={(e)=> setPostBody(e.target.value) }

       />
       <button>submit</button>
      </form>
    </div>
  )
}
