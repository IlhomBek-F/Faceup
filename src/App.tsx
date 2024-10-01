import React from 'react';
import { Header } from '@components/Header/Header';
import { ImageLists } from '@components/ImageLists/Image-lists';
import { ImageProvider } from '@context/ImageProvider';
import { BackgroundLayout } from '@components/BackgroundLayout/Background-layout';
import '@/App.css'
import { UpAction } from './components/UpAction/Up-action';

function App() {
  return (
    <BackgroundLayout>
      <ImageProvider>
        <Header />
        <ImageLists />
        <UpAction />
      </ImageProvider>
    </BackgroundLayout>
  )
}

export default App
