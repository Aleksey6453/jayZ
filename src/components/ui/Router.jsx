import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../screens/home/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<div>Not found</div>} path='*'/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
