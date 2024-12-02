import { Routes, Route } from 'react-router-dom';
import Intro from './pages/intro/Intro';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Market from './pages/market/Market';
import NewsDetail from './pages/newsDetail/NewsDetail';
import Profile from './pages/profile/Profile';
import Header from './components/common/header/Header';
import Register from './pages/register/Register';
import RedirectPage from './components/intro/kakaoLogin/RedirectPage';
import Search from './pages/search/Search';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login/oauth" element={<RedirectPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/market" element={<Market />} />
        <Route path="/newsDetail/:id" element={<NewsDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRouter;
