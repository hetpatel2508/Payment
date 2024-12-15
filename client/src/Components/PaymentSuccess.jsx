import React from 'react';
import { useSearchParams } from 'react-router-dom'; // Make sure to import from 'react-router-dom'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams(); // Destructure the array to get the searchParams object

  const referenceId = searchParams.get('reference'); // Get the reference parameter from the URL

  return (
    <div className="h-[100vh] w-full flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[35%] h-[70%] rounded-full bg-green-500 text-white">
        <div className="text-3xl font-bold">Order Placed Successfully</div>
        <div className=" mt-2 ">Reference ID: &nbsp;{referenceId}</div>
      </div>
    </div>
  );
}
