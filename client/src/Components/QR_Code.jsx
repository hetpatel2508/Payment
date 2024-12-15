import React from 'react';
import QrCode from 'qrcode';

export default function QR_Code() {
  const [url, setUrl] = React.useState('');
  const [qrCode, setQrCode] = React.useState(null);

  const GenerateQR = () => {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${url}`)
      .then((res) => res.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setQrCode(imageUrl);
      });

    // QrCode.toDataURL(url, {
    //   width: 240,
    //   height: 240,
    //   color: {
    //     dark: '#000000FF',
    //     light: '#00000000',
    //   },
    // }).then((url) => {
    //   setQrCode(url);
    // });
  };
  return (
    <>
      <div className="h-[100vh] w-full flex flex-col items-center mt-8 ">
        <div className="w-[35%] h-[18%]  flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">QR Code Generator</div>
          <div className="mt-3">
            <input
              className="border-2  border-black rounded-md mr-4 text-center"
              placeholder="eg: https://google.com"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              type="text"
            />
            <button className="px-3 py-1.5 bg-black text-white rounded-md" onClick={GenerateQR}>
              Generate
            </button>
          </div>
        </div>
        {qrCode && (
          <div className="w-[35%] h-[60%]  flex flex-col items-center  relative">
            <div className="w-[250px] h-[250px] mt-14">
              <img className="w-[240px] h-[240px] object-contain" src={qrCode} alt="" />
            </div>
            <a
              href={qrCode}
              download="qr-code.png"
              className="px-3 py-1.5 cursor-pointer bg-black text-white rounded-md absolute bottom-8"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </>
  );
}
