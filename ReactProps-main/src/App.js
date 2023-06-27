import logo from './logo.svg';
import './App.css';
import ProfileList from './components/ProfileList';
import React, { Component } from "react";


function App() {

const myStyle = {
  backgroundImage: "url('https://wallpaperaccess.com/full/270156.jpg')",
  height: "100vh",
  
  
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

  return (
     <div style={myStyle}>
         <ProfileList />
          <footer  > Copyright 2022 all rights reserved</footer>
      </div>
   
 ) };
export default App;
