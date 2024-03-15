// App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import ViewProfile from './components/ViewProfile';
import Quotation from './components/Quotation';
import BodyPage from './components/Views/Bodypage/Bodypage';
import Footer from './components/Views/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Blog from './components/Blogs/Blog';
import Contact from './components/Contact/Contact';
import ScrollToTopButton from './components/Utilities/ScrollButton/ScrollToTopButton';
import Construction_project from './components/Project/Construction_project/Construction_project';
import Completed_Construction_project from './components/Project/Completed_Construction_project/Completed_Construction_project';
import Raw_building from './components/Quotation/Raw_building/Raw_building';
import Completed_Raw_building from './components/Quotation/Completed_Raw_building/Completed_Raw_building';
import BlogDetail from './components/Blogs/BlogDetail';
import Construction_project_Detail from './components/Project/Construction_project/Construction_project_Detail';
import Completed_Construction_project_Detail from './components/Project/Completed_Construction_project/Completed_Construction_project';
import Rectangle from './components/Utilities/Rectangle/Rectangle';
import NhaCap4 from './components/NhaCap4/NhaCap4';
import NhaCap4Detail from './components/NhaCap4/NhaCap4Detail';
import AboutUs from './components/Views/AboutUs/AboutUs';
import Policy from './components/Views/Privacy/Policy';
import ChangePassword from './components/ChangePassword';
import Dashboard from './components/Authentication/Staff/Dashboard';
import ADashboard from './components/Authentication/Admin/ADashboard';
import PrivateRoute from './components/Authentication/PrivateRoute';
import AdminRoute from './components/Authentication/AdminRoute';
function App() {

  return (
    <div className="App">

      <Router>
        <AuthProvider>

          <Routes>
            <Route path="/admin/*" element={<AdminRoute element={<ADashboard />} />} />
            <Route path="/staff/*" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="*" element={<PageWrapper />} />
          </Routes>

        </AuthProvider>
      </Router>

    </div>
  );
}
function PageWrapper() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<BodyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ViewProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="" element={<BodyPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/BlogDetail/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/du_an_thi_cong" element={<Construction_project />} />
        <Route path="/Construction_project_Detail/:id" element={<Construction_project_Detail />} />
        <Route path="/du_an_da_hoan_thanh" element={<Completed_Construction_project />} />
        <Route path="/Completed_Construction_project_Detail/:id" element={<Completed_Construction_project_Detail />} />
        <Route path="/xay_dung_phan_tho" element={<Raw_building />} />
        <Route path="/hoan_thien_phan_tho" element={<Completed_Raw_building />} />
        <Route path="/NhaCap4" element={<NhaCap4 />} />
        <Route path="/NhaCap4Detail/:id" element={<NhaCap4Detail />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/policy" element={<Policy />} />

        {/* <Route path='*' element={<div className='NotFound'>404 - Not Found</div>} /> */}
      </Routes>
      <Footer />
      <Rectangle />
      <Rectangle phoneNumber="01234567890" />
      <ScrollToTopButton />
    </>
  );
}


export default App;
