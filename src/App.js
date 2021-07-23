import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

export default function App() {
  return (
    <BrowserRouter>
      <Router/>
      <ToastContainer autoClose={2000}/>
    </BrowserRouter>
  )
}
