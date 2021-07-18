import React from 'react'
import Router from './Router'
import Header from './components/Header'
import Promotional from './components/Promotional'
import Navibar from './components/Navibar'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

export default function App() {
  return (
    <div>
      <div>
      <Promotional/>
      </div>
      <div>
        <Header/>
      </div>
      <div>
        <Navibar/>
      </div>
      <Router/>
      <ToastContainer autoClose={3000}/>
    </div>
  )
}
