import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateQuantity } from '../store/slices/ProductSlice';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Cart() {
  const { products, TotalAmount } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handleQuantityChange = (id, quantity) => {
    // Ensure the quantity is a valid number and at least 1
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handlePaymentBtn = async () => {
    try {
      if (TotalAmount !== 0) {
        // Call the backend API to initiate the Razorpay checkout process
        const response = await axios.post('http://localhost:6969/checkout', {
          amount: TotalAmount * 100, // Razorpay expects the amount in paise (smallest currency unit)
        });

        if (response.data.id) {
          // Proceed to open Razorpay checkout
          const options = {
            // key: response.data.key,
            key: 'rzp_test_tk16mbH0Nj51zN',
            amount: response.data.amount,
            currency: 'INR',
            name: 'Learning Ecommerce Payments',
            description: 'Test Transaction',
            image: 'https://your-logo-url.jpg',
            order_id: response.data.id,
            callback_url: 'http://localhost:6969/verify',
            prefill: {
              name: 'Customer Name',
              email: 'customer@example.com',
              contact: '9999999999',
            },
            notes: {
              address: 'Razorpay Corporate Office',
            },
            theme: {
              color: '#3399cc', 
            },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
        }
      } else {
        toast.error('Your cart is empty!');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Error placing order. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500 text-center">Cart</h1>
      {products.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>
              Quantity:
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                className="border p-2"
              />
            </p>
            <p>Total: ${product.price * product.quantity}</p>
            <button onClick={() => handleRemove(product.id)} className="text-red-500">
              Remove
            </button>
            <br />
            <br />
          </div>
        ))
      )}
      <h1 className="text-3xl font-bold text-red-500 text-center">Total Amount: ${TotalAmount}</h1>
      <div
        className="w-28 h-9 bg-slate-200 ml-[45%] mt-10 flex justify-center items-center rounded-md cursor-pointer"
        onClick={handlePaymentBtn}
      >
        Checkout
      </div>
      <Toaster />
    </div>
  );
}
