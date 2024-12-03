// import React from "react";
// import myQr from "../assets/myQr.png"

// const PhonePeUI = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen b">
//       <div className="bg-white rounded-lg shadow-lg w-[350px] md:w-[400px] p-6">
//         <h1 className="text-lg font-semibold text-center mb-6">
//           Scan & Pay via PhonePe
//         </h1>
//         <div className="flex items-center justify-center bg-gray-100 border border-dashed rounded-lg h-40 mb-6">
//           <div className="text-center">
//             <img
//               src={myQr} // Placeholder for the QR code
//               alt="QR Code"
//               className="mx-auto w-24 h-24"
//             />
//             <button className="mt-2 bg-purple-600 text-white font-medium px-4 py-1 rounded-full">
//               SHOW CODE
//             </button>
//           </div>
//         </div>
//         <div className="text-center mb-6">
//           <span className="block text-gray-500 font-medium text-sm">OR</span>
//         </div>
//         <form>
//           <label
//             htmlFor="mobile"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Enter your mobile number
//           </label>
//           <div className="flex items-center border rounded-lg p-2 mb-4">
//             <span className="text-gray-600 text-sm font-medium">+91</span>
//             <input
//               type="tel"
//               id="mobile"
//               placeholder="00000 00000"
//               className="ml-2 flex-1 text-sm text-gray-700 outline-none"
//             />
//           </div>
//           <p className="text-xs text-gray-500 mb-4">
//             By generating OTP, you are agreeing to PhonePe's{" "}
//             <a href="#" className="text-purple-600 underline">
//               Terms & conditions
//             </a>
//             .
//           </p>
//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white font-medium py-2 rounded-lg"
//           >
//             SEND OTP
//           </button>
//         </form>
//         <div className="flex justify-center items-center mt-6 gap-2 text-sm text-gray-500">
//           <img
//             src="https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text-thumbnail.png" // Replace with actual logos
//             alt="UPI"
//             className="w-8"
//           />
//           <img
//             src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-1024.png" // Replace with actual logos
//             alt="RuPay"
//             className="w-8"
//           />
//           <img
//             src="data:image/png;base64,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" // Replace with actual logos
//             alt="Visa"
//             className="w-8"
//           />
//           <img
//             src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-4640,resizemode-75,msid-114697609/tech/technology/bharatpe-renames-12-club-as-invest-bharatpe-enters-larger-wealth-management-play.jpg" // Replace with actual logos
//             alt="MasterCard"
//             className="w-8"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhonePeUI;




import React, { useState, useEffect } from "react";
import myQr from "../assets/myQr.png";
import { Link } from "react-router-dom";

const PhonePeUI = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(true);
    }, 10000); // 10 seconds timer

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {showSuccess ? (
        <div className=" flex flex-col gap-y-6">
        <div className="bg-green-500 text-white text-center rounded-lg shadow-lg w-[350px] h-[3rem] flex justify-center items-center p-6">
          <h1 className="text-2xl font-bold">Payment Successful</h1>
        </div>
        <Link to="/ordertracking">
        <div className=" bgform text-white text-center rounded-lg shadow-lg w-[350px] h-[3rem] flex justify-center items-center p-6">Processed To Track</div>
        </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg w-[350px] md:w-[400px] p-6">
          <h1 className="text-lg font-semibold text-center mb-6">
            Scan & Pay via PhonePe
          </h1>
          <div className="flex items-center justify-center bg-gray-100 border border-dashed rounded-lg h-40 mb-6">
            <div className="text-center">
              <img
                src={myQr}
                alt="QR Code"
                className="mx-auto w-24 h-24"
              />
              <button className="mt-2 bg-purple-600 text-white font-medium px-4 py-1 rounded-full">
                SHOW CODE
              </button>
            </div>
          </div>
          <div className="text-center mb-6">
            <span className="block text-gray-500 font-medium text-sm">OR</span>
          </div>
          <form>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter your mobile number
            </label>
            <div className="flex items-center border rounded-lg p-2 mb-4">
              <span className="text-gray-600 text-sm font-medium">+91</span>
              <input
                type="tel"
                id="mobile"
                placeholder="00000 00000"
                className="ml-2 flex-1 text-sm text-gray-700 outline-none"
              />
            </div>
            <p className="text-xs text-gray-500 mb-4">
              By generating OTP, you are agreeing to PhonePe's{" "}
              <a href="#" className="text-purple-600 underline">
                Terms & conditions
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-medium py-2 rounded-lg"
            >
              SEND OTP
            </button>
          </form>
          <div className="flex justify-center items-center mt-6 gap-2 text-sm text-gray-500">
            <img
              src="https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text-thumbnail.png"
              alt="UPI"
              className="w-8"
            />
            <img
              src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-1024.png"
              alt="Google Pay"
              className="w-8"
            />
           

            <img
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-4640,resizemode-75,msid-114697609/tech/technology/bharatpe-renames-12-club-as-invest-bharatpe-enters-larger-wealth-management-play.jpg"
              alt="MasterCard"
              className="w-8"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhonePeUI;
