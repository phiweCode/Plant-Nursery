import { useState } from 'react'
import './App.css'
import { 
createBrowserRouter, 
RouterProvider, 
Route,
createRoutesFromElements
} from 'react-router' 

import Checkout from './layouts/Checkout'; 
import LandingPage from './layouts/LandingPage'; 
import ProductsListing from './layouts/ProductsListing'; 
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Plant-Nursery/' element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="products" element={<ProductsListing/>} /> 
      <Route path='checkout' element={<Checkout/>} /> 
    </Route>
  )
)

function App() {


  return <RouterProvider router={router} />
}

export default App
