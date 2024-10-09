import React from 'react';
import { Header } from '@components/Header/Header';
import { ImageLists } from '@components/ImageLists/Image-lists';
import { ImageProvider } from '@context/ImageProvider';
import { BackgroundLayout } from '@components/BackgroundLayout/Background-layout';

function App() {
  return (
    <BackgroundLayout>
      <ImageProvider>
        <Header />
        <ImageLists />
      </ImageProvider>
    </BackgroundLayout>
  )
}

export default App
