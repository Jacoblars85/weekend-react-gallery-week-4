import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        setGallery(response.data)
      })
      .catch((error) => {
        console.log('getGallery fail:', error);
      })
  }


    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img height={150} width={150} src="images/goat_small.jpg"/>
        <img height={150} width={150} src="images/EMU1.jpg"/>
        <img height={150} width={150} src="images/newsdetails.jpeg"/>
        <img height={150} width={150} src="images/ww-funny-animal-faces-hippopotamus.webp"/>
        <img height={150} width={150} src="images/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-2.jpg"/>
      </div>
    );
}

export default App;
