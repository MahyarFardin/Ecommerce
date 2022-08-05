import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage.page';
import NavigationBar from './Components/Navigation/Navigation.component';
import AuthenticationPage from './Pages/AuthenticationPage/Auth.page';
import MainPage from './Pages/MainShopPage/MainShopPage.page';
import ProductPage from './Pages/ProductPage/ProductPage.component';
import Profile from "./Pages/Profile/Profile.page"
import ProductManager from './Pages/ProductManager/ProductManager.page';
import AddProduct from './Pages/AddProduct/AddProduct.page';
import Footer from './Components/Footer/Footer.component';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes className="App">
        <Route path='/' element={<CategoriesPage />} />
        <Route path='/auth' element={<AuthenticationPage />} />
        <Route path='/shop' element={<MainPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/product-manager' element={<ProductManager />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
