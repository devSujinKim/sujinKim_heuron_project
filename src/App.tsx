import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import GalleryPage from './pages/gallery';
import ImageDetailPage from './pages/gallery/detail';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/:id" element={<ImageDetailPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
