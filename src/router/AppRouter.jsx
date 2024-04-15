import { About, Contact, Home, Projects, Qualification, Skills } from '@/pages'
import React from 'react'
import {Routes, Route} from 'react-router-dom'


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/qualification' element={<Qualification/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  )
}
