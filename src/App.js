import './App.css';

import { Route, Routes } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage.page';
import NavigationBar from './Components/Navigation/Navigation.component';
import AuthenticationPage from './Pages/AuthenticationPage/Auth.page';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes className="App">
        <Route path='/' element={<CategoriesPage />} />
        <Route path='/auth' element={<AuthenticationPage />} />
      </Routes>
    </>
  );
}

export default App;
