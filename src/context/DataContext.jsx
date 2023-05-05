import { createContext,useState,useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import { format } from "date-fns";
import api from "../api/posts";


const DataContext = createContext({});

export const DataProvider = ({children}) =>{
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
  
    useEffect(() => {
      async function fetchPosts() {
        try {
          const res = await api.get("/posts");
          setPosts(res.data);
        } catch (error) {
          console.log(error.message);
          console.log(error.response.data);
        }
      }
      fetchPosts();
    }, []);
    useEffect(() => {
      const filterPosts = posts.filter((post) => {
        return (
          post.body.toLowerCase().includes(searchText.toLowerCase()) ||
          post.title.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setSearchResult(filterPosts.reverse());
    }, [searchText, posts]);
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  
      const datetime = format(new Date(), "MMMM dd,yyyy pp");
      const newPost = {
        id: id,
        title: postTitle,
        body: postTitle,
        datetime: datetime,
      };
      try {
        const res = await api.post("/posts", newPost);
        setPosts((prev) => {
          return [...prev, res.data];
        });
        setPostBody("");
        setPostTitle("");
        navigate("/");
      } catch (error) {}
    }
    async function handleDelete(id) {
      try {
        await api.delete(`/posts/${id}`);
        const postList = posts.filter((post) => post.id.toString() !== id);
        console.log(`post list is ${JSON.stringify(postList)}`);
        setPosts(postList);
        navigate("/");
      } catch (error) {}
    }
    return (
        <DataContext.Provider value={{
            setSearchText,searchText,
            searchResult,setSearchResult,
            posts,postBody,postTitle,setPostTitle,setPostBody,
            handleDelete,handleSubmit
            
        }} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext ;