import React from 'react';
import { Button } from '@react-email/components';

const Welcome = () => {
  return (
    <div
      style={{
        backgroundColor: '#f7fafc',
        padding: '2rem 1rem',
      }}
    >
      <div
        style={{
          maxWidth: '28rem',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img
            src="https://imgs.search.brave.com/48KjuDlTwtZKoHEPJGwT5c7qc18DC5Asncv1pIZ1Vtk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFX2R3/azdtdncvMS8wLzE2/MDB3L2NhbnZhLWNv/ZmZlZS1ob3VzZS1y/ZXN0YXVyYW50LWxv/Z28tc2xTVGhiSTZF/VHcuanBn"
            alt="Logo"
            style={{
              width: '150px',
              height: '150px',
              marginLeft: '1.5rem',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2.75rem',
              marginRight: '2.5rem',
            }}
          >
            <svg
              fill="#000000"
              width="50px"
              height="50px"
              viewBox="-56.32 -56.32 624.64 624.64"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00512"
            >
              <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90 c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402 H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398 C390.062,392.776,380.839,402,369.46,402z"></path>
            </svg>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100px',
            backgroundColor: '#cbd5e1',
          }}
        ></div>
        <div
          style={{
            padding: '1.5rem',
          }}
        >
          <h1
            style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#2d3748',
            }}
          >
            Welcome to Our Website
          </h1>
          <p
            style={{
              marginTop: '1rem',
              color: '#718096',
            }}
          >
            Thank you for joining us! We're excited to have you on board.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              href="https://localhost:5173/"
              style={{
                marginTop: '1.5rem',
                backgroundColor: '#007291',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Visit Our Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
