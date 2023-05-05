import React, { useContext } from 'react'
import Post from './Post';
import DataContext from '../context/DataContext';

export default function Home() {

  const {searchResult}= useContext(DataContext);

  const allposts = searchResult.map((post)=>{
    return (
      <Post key={searchResult.id} post={post} id = {post.id} />
    )
  });
  console.log(searchResult)
return(
    <div>
      <h1>
        Home
      </h1>
      <p>
        {allposts.length ? allposts : "No posts "}
      </p>
    </div>
  )
}
