import React from 'react';
import { Header } from '@components/Header/Header';
import { ImageLists } from '@components/ImageLists/Image-lists';
import { ImageProvider } from '@context/ImageProvider';
import '@/App.css'

function App() {
  return (
    <ImageProvider>
      <Header />
      <ImageLists />
    </ImageProvider>
  )
}

export default App
