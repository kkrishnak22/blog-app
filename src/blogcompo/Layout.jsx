import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

import Nav from "./Nav"
import { Outlet } from 'react-router'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
export default function Layout() {
  const {searchText,setSearchText}= useContext(DataContext);
  return (
    <div>
      <Header />
      <Nav  searchText = {searchText} setSearchText={setSearchText} />
      <Outlet/>
      <Footer/>
    </div>
  )
}
