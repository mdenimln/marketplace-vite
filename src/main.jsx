import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404';
import ProductsPage from './pages/products';
import ProfilePage from './pages/profile';
import DetailProductsPage from './pages/detailProduct';
import { Provider } from 'react-redux';
import  store  from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Halaman sles</h1>,
    errorElement: < ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/user',
    element: <ProfilePage/>
  },
  {
    path: '/product/:id',
    element: <DetailProductsPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
