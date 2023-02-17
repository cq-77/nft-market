import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Market, Create, Connect, NftDetails, Profile } from '../pages';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to = '/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/market' element={<Market/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/market/:id' element={<NftDetails/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default Routers