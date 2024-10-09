import React from 'react';
import { Header } from '@components/Header/Header';
import { ImageLists } from '@components/ImageLists/Image-lists';
import { ImageProvider } from '@context/ImageProvider';
import { BackgroundLayout } from '@components/BackgroundLayout/Background-layout';
import { FloatButton } from 'antd';

function App() {
  return (
    <BackgroundLayout>
      <ImageProvider>
        <Header />
        <ImageLists />
        <FloatButton.BackTop />
      </ImageProvider>
    </BackgroundLayout>
  )
}

export default App
