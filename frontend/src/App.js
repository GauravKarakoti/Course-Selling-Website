import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminLogin';
import AdminSignup from './components/Admin/AdminSignup';
import CreateCourse from './components/Admin/CreateCourse';
import UpdateCourse from './components/Admin/UpdateCourse';
import ViewCourses from './components/Admin/ViewCourses';
import UserLogin from './components/User/UserLogin';
import UserSignup from './components/User/UserSignup';
import PurchaseCourse from './components/User/PurchaseCourse';
import ViewPurchases from './components/User/ViewPurchases';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/create-course" element={<CreateCourse />} />
        <Route path="/admin/update-course" element={<UpdateCourse />} />
        <Route path="/admin/view-courses" element={<ViewCourses />} />

        {/* User Routes */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/purchase-course" element={<PurchaseCourse />} />
        <Route path="/user/view-purchases" element={<ViewPurchases />} />
      </Routes>
    </Router>
  );
};

export default App;
