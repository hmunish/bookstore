import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </main>
  );
}

export default App;
