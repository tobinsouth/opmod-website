import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Interface from './modules/Interface';
import Model from './pages/Model';
import Models from './pages/Models';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
// import VerifyEmail from './pages/VerifyEmail';
// import Join from './pages/Join';
// import Login from './pages/Login';

// Firebase User Auth
// import {onAuthStateChanged} from 'firebase/auth'
// import {auth} from './modules/firebase'
// import {AuthProvider} from './modules/AuthContext'

function App() {

  // const [currentUser, setCurrentUser] = useState(null)
  // const [timeActive, setTimeActive] = useState(false)

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user)
  //   })
  // }, [])

  return (
    <BrowserRouter>
     <Routes>
      {/* <AuthProvider value={{currentUser, timeActive, setTimeActive}}> */}
        <Route path="/" element={<Interface />}>
          {/* Passed into Outlet in Interface */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/model/:creator/:name" element={<Model/>} />
          <Route path="/models" element={<Models/>} />

          {/* <Route path='/verify-email' element={<VerifyEmail/>} />  */}
          {/* <Route path='/not-found' element={<NotFound/>} /> */}
          {/* <Route path="/join" element={
            !currentUser?.emailVerified 
            ? <Join/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="*" element={<NotFound />} /> */}
          
        </Route>
      {/* </AuthProvider> */}
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
