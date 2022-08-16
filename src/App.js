import './App.css';

import React, { createContext, useState } from 'react';
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
import ForgetPass from './Pages/ForgetPass/ForgetPass.page';
import PassRecovery from './Pages/PassRecovery/PassRecovery.page';


export const userSignInCheck = createContext(null)
function App() {
  const [signCheck, setSignCheck] = useState(false)

  return (
    <>
      <userSignInCheck.Provider value={{ signCheck, setSignCheck }} >
        <NavigationBar />
        <Routes className="App">
          <Route path='/' element={<CategoriesPage />} />
          <Route path='/auth' element={<AuthenticationPage />} />
          <Route path='/shop' element={<MainPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product-manager' element={<ProductManager />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/email-verify' element={<ForgetPass />} />
          <Route path='/pass-recovery' element={<PassRecovery />} />
        </Routes>
        <Footer />
      </userSignInCheck.Provider>
    </>
  );
}

export default App;
