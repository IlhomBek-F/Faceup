import { Header } from './components/Header/Header'
import './App.css'
import { ImageCollections } from './components/ImageCollections/Image-collections'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}> 
      <Header />
      <ImageCollections />
    </QueryClientProvider>
    </>
  )
}

export default App
