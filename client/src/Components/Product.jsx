import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from '../store/slices/ProductSlice';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for product quantity

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity };
    dispatch(addProduct(productToAdd));
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <a href="#" className="hover:underline hover:text-gray-600">
            Home
          </a>
          <span>{'>'}</span>
          <a href="#" className="hover:underline hover:text-gray-600">
            Electronics
          </a>
          <span>{'>'}</span>
          <span>{product.title}</span>
        </div>

        <div className="flex flex-col md:flex-row mt-6">
          <div className="md:flex-1 px-4">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <img src={product.thumbnail} alt={product.title} />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-500">
              By{' '}
              <a href="#" className="text-indigo-600">
                {product.brand}
              </a>
            </p>

            <div className="flex items-center space-x-4 my-4">
              <div className="flex py-2 px-3 rounded-lg bg-gray-100">
                <span className="text-indigo-400 mr-1 mt-1">$</span>
                <span className="font-bold text-indigo-600 text-3xl">{product.price}</span>
              </div>
            </div>

            <p className="text-gray-500">{product.description}</p>

            <div className="flex py-4 space-x-4">
              <div className="relative">
                <div className="text-xs uppercase text-gray-400 tracking-wide font-semibold">
                  Qty
                </div>
                <select
                  className="rounded-xl border border-gray-200 pl-5 pr-8 h-10 flex items-end"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
