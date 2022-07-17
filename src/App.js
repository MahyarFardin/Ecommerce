import './App.css';

import { Route, Routes } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage.page';
import NavigationBar from './Components/Navigation/Navigation.component';
import AuthenticationPage from './Pages/AuthenticationPage/Auth.page';
import MainPage from './Pages/MainShopPage/MainShopPage.page';
import ProductPage from './Pages/ProductPage/ProductPage.component';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes className="App">
        <Route path='/' element={<CategoriesPage />} />
        <Route path='/auth' element={<AuthenticationPage />} />
        <Route path='/shop' element={<MainPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
