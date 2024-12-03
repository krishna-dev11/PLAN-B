import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const PaymentGatewayMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState("Cash on Delivery (Cash/UPI)");
  const [upiOptions, setUpiOptions] = useState([]);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showEmiForm, setShowEmiForm] = useState(false);
  const [showPayNowButton, setShowPayNowButton] = useState(false);

  const paymentModes = [
    "Cash on Delivery (Cash/UPI)",
    "UPI (Pay via any App)",
    "Credit/Debit Card",
    "EMI",
    "Pay Later",
    "Wallets",
    "Net Banking",
  ];

  const upiApps = [
    { name: "PhonePe", logo: "https://w7.pngwing.com/pngs/332/615/png-transparent-phonepe-india-unified-payments-interface-india-purple-violet-text-thumbnail.png" },
    { name: "Google Pay", logo: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-1024.png" },
    { name: "Paytm", logo: "data:image/png;base64,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" },
    { name: "BharatPe", logo: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-4640,resizemode-75,msid-114697609/tech/technology/bharatpe-renames-12-club-as-invest-bharatpe-enters-larger-wealth-management-play.jpg" },
  ];

  const emiOptions = [
    { name: "IDFC First Bank Credit Card EMI", offer: "1 Offer", minOrder: "₹2500" },
    { name: "HDFC Credit Card EMI", minOrder: "₹3000" },
    { name: "HDFC Debit Card EMI", minOrder: "₹5000" },
    { name: "ICICI Credit Card EMI", minOrder: "₹1500" },
    { name: "Axis Credit Card EMI", minOrder: "₹2500" },
    { name: "SBI Credit Card EMI", minOrder: "₹2500" },
    { name: "Kotak Credit Card EMI", minOrder: "₹2500" },
  ];

  const handlePaymentSelection = (mode) => {
    setSelectedPayment(mode);
    setShowPayNowButton(false);

    // Toggle UPI, Card Form, or EMI based on mode
    if (mode === "UPI (Pay via any App)") {
      setUpiOptions(upiApps);
      setShowCardForm(false);
      setShowEmiForm(false);
    } else if (mode === "Credit/Debit Card") {
      setShowCardForm(true);
      setUpiOptions([]);
      setShowEmiForm(false);
    } else if (mode === "EMI") {
      setShowEmiForm(true);
      setUpiOptions([]);
      setShowCardForm(false);
    } else {
      setUpiOptions([]);
      setShowCardForm(false);
      setShowEmiForm(false);
    }
  };

  const handleUpiAppClick = () => {
    setShowPayNowButton(true);
  };

  const priceDetails = {
    // totalMRP: 1999,
    // discount: 1000,
    // platformFee: 20,
    // shippingFee: 0,
    totalMRP: 1999,
    discount: 1000,
    platformFee: 20,
    shippingFee: 45000,
    Hospitalization: 45000,
    teamcharges: 125000,
    legalcharges: 17000,
    miscellaneouscharges: 8000,
  };

  const calculateTotalAmount = () => {
    return (
      priceDetails.shippingFee +
      priceDetails.teamcharges +
      priceDetails.platformFee +
      priceDetails.Hospitalization +
      priceDetails.legalcharges +
      priceDetails.miscellaneouscharges
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans  text-white w-screen">

      <h2 className="text-2xl font-bold mb-6  ">Choose Payment Mode</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Payment Mode List */}
        <div className="flex-1 border border-gray-300 rounded-md p-4 bg-white text-black ">
          <ul className="space-y-4">
            {paymentModes.map((mode, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-3 border-b ${
                  index !== paymentModes.length - 1 ? "border-gray-300" : ""
                } cursor-pointer hover:bg-green-500 hover:text-white  hover:scale-105 ${
                  selectedPayment === mode ? "bg-gray-100 font-semibold" : ""
                }`}
                onClick={() => handlePaymentSelection(mode)}
              >
                <span>{mode}</span>
                {index === 0 && <span className="text-pink-500 ">Recommended</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Payment Option */}
        <div className="flex-1 border border-gray-300 rounded-md p-4 bgform">
          <h3 className="text-lg font-semibold mb-4 text-green-600">Recommended Payment Options</h3>

          {/* UPI Options */}
          {upiOptions.length > 0 && (
            <div className="space-y-4">
              {upiOptions.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-cente w-[80%] mx-auto justify-between translate-y-10 cursor-pointer"
                  onClick={handleUpiAppClick} 
                >
                  <img src={app.logo} alt={app.name} className="w-10 h-10 rounded-full" />
                  <span className="text-white">{app.name}</span>
                </div>
              ))}
              {showPayNowButton && (
                <Link to="/Qrsection" >
                <button
                  className="w-full py-2 mt-4 bg-pink-500 text-white rounded-md text-lg translate-y-12 hover:bg-pink-600 transition"
                  onClick={() => toast.success("Payment Process Initiated")}
                >
                  PAY NOW
                </button>
                </Link>
              )}
            </div>
          )}

          {/* Credit/Debit Card Form */}
          {showCardForm && (
            <form className="space-y-4 text-black ">
              <div className="bg-gray-100 p-4 rounded-md">
                <p>
                  <strong>Get 5% Cashback</strong> with your HDFC Bank Millennia Credit Card. TCA
                  <a href="#" className="text-blue-500 ml-2">
                    Know More
                  </a>
                </p>
              </div>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Name on card"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Valid Thru (MM/YY)"
                  className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button
                type="button"
                className="w-full py-2 bg-pink-500 text-white rounded-md text-lg hover:bg-pink-600 transition"
              >
                PAY NOW
              </button>
            </form>
          )}

          {/* EMI Options */}
          {showEmiForm && (
            <div className="space-y-6">
              <h4 className="text-md font-bold">Select EMI Option</h4>
              {emiOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="p-3 border rounded-md flex flex-col gap-2 hover:bg-gray-100 hover:text-black cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{option.name}</span>
                    {option.offer && <span className="text-green-500 text-sm">{option.offer}</span>}
                  </div>
                  <p className="text-gray-500 text-sm">Available on min. order of {option.minOrder}</p>
                </div>
              ))}
            </div>
          )}

          {/* Default Message */}
          {upiOptions.length === 0 && !showCardForm && !showEmiForm && (
            <div className="text-gray-600">{selectedPayment}</div>
          )}
        </div>
      </div>

      {/* Price Details */}
      <div className="mt-8 border-t border-gray-300 pt-6">

        <h3 className="text-lg font-semibold mb-4">Price Details</h3>

        <p className="flex justify-between">
          <span>Hospitalization & Surgical Charges:</span> <span>₹{priceDetails.Hospitalization}</span>
        </p>
        <p className="flex justify-between">
          <span>Medical Team Fees:</span> <span className="text-green-500">-₹{priceDetails.teamcharges}</span>
        </p>
        <p className="flex justify-between">
          <span>Platform Fee:</span> <span>₹{priceDetails.platformFee}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping Fee:</span> <span className="text-green-500">{priceDetails.shippingFee}</span>
        </p>
        <p className="flex justify-between">
          <span>Legal & Administrative Costs:</span> <span className="text-green-500">-₹{priceDetails.legalcharges}</span>
        </p>
        <p className="flex justify-between">
          <span>Miscellaneous Charges:</span> <span className="text-green-500">-₹{priceDetails.miscellaneouscharges}</span>
        </p>
        <hr className="my-4" />
        <p className="flex justify-between text-lg font-semibold">
          <span>Total Amount:</span> <span>₹{calculateTotalAmount()}</span>
        </p>
      </div>
    </div>
  );
};

export default PaymentGatewayMethod;



