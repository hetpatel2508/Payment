import React from 'react';
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Products from './Components/Products.jsx';
import Product from './Components/Product.jsx';
import Cart from './Components/Cart.jsx';
import PaymentSuccess from './Components/PaymentSuccess.jsx';
import QR_Code from './Components/QR_Code.jsx';
import Invoice from './Components/Invoice.jsx';

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={<h1 className="text-3xl font-bold text-red-500 text-center">This is home</h1>}
          />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>
          <Route path="/qrcode" element={<QR_Code />}></Route>
          <Route path="/invoice" element={<Invoice />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
