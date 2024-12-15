import { Tailwind, Button } from '@react-email/components';

const Welcome = () => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex justify-between">
            <img
              src="https://imgs.search.brave.com/48KjuDlTwtZKoHEPJGwT5c7qc18DC5Asncv1pIZ1Vtk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFX2R3/azdtdncvMS8wLzE2/MDB3L2NhbnZhLWNv/ZmZlZS1ob3VzZS1y/ZXN0YXVyYW50LWxv/Z28tc2xTVGhiSTZF/VHcuanBn"
              alt="Logo"
              className="w-[150px] h-[150px] ml-6"
            />
            <div className="flex justify-center mt-11 mr-10">
              <svg
                fill="#000000"
                width="50px"
                height="50px"
                viewBox="-56.32 -56.32 624.64 624.64"
                id="_x30_1"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                stroke="#000000"
                strokeWidth="0.00512"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="1.024"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90 c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402 H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398 C390.062,392.776,380.839,402,369.46,402z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="w-full h-[100px] bg-slate-400"></div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to Our Website</h1>
            <p className="mt-4 text-gray-600">
              Thank you for joining us! We're excited to have you on board.
            </p>
            <div className="flex justify-center">
              <Button
                href="https://localhost:5173/"
                className="mt-6 bg-brand text-white py-2 px-4 rounded"
              >
                Visit Our Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Tailwind>
  );
};

export default Welcome;
