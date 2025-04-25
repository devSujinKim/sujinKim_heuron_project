import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import GalleryPage from './pages/gallery';
import ImageDetailPage from './pages/gallery/detail';
import CardGame from './pages/cardgame';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/:id" element={<ImageDetailPage />} />
          <Route path="/cardgame" element={<CardGame />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
