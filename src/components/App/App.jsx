import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../galleryList/GalleryList';

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
      <div data-testid="app" >
        <header>
          <h1>React Gallery</h1>
        </header>

        <h3>The gallery goes here!</h3>
        <div>
        <GalleryList gallery={gallery} getGallery={getGallery}/>
        </div>
      </div>
    );
}

export default App;
