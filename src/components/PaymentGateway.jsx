// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const PaymentGateway = () => {
//   const [address, setAddress] = useState({
//     name: "Nikhil Gothwal",
//     type: "HOSPITAL",
//     details: "63/2 SN Krishna Hospital , Teen Batti Freeganj Ujjain (M.P)",
//     mobile: "8827196257",
//     isDefault: true,
//   });

//   const [priceDetails] = useState({
//     totalMRP: 1999,
//     discount: 1000,
//     platformFee: 20,
//     shippingFee: 45000,
//     Hospitalization : 45000,
//     teamcharges : 125000,
//     legalcharges: 17000,
//     miscellaneouscharges : 8000,
//   });

//   const calculateTotalAmount = () => {
//     return priceDetails.shippingFee + priceDetails.teamcharges + priceDetails.platformFee + priceDetails.Hospitalization + priceDetails.legalcharges + priceDetails.miscellaneouscharges;
//   };

//   return (
//     <div className="font-sans mx-auto gap-5 text-gray-900 flex   justify-between mt-16 h-screen">
    
//     {/* left */}
//     <div className=" flex flex-col gap-y-2 w-[60%] "> 

//         <div className="flex justify-between ">
//         <div className="flex  flex-col">
//              <h2 className="text-2xl font-bold mb-5 text-white">Select Delivery Address</h2>
//              <p className="text-white opacity-80">DEFAULT ADDRESS</p>
//         </div>

//         <button  className="bgform text-white h-[3rem] w-[13rem]">Change hospital</button>
//         </div>
    

// <div className="border border-gray-300 rounded-md p-5 mb-5 bg-white ">
//   <input
//     type="radio"
//     id="defaultAddress"
//     name="address"
//     checked={address.isDefault}
//     onChange={() => {}}
//     className="mr-2"
//   />
//   <label htmlFor="defaultAddress" className="font-bold text-lg">
//     {address.name} <span className="text-green-600 font-normal">({address.type})</span>
//   </label>
//   <p className="mt-2 text-sm">{address.details}</p>
//   <p className="text-sm">Mobile: <strong>{address.mobile}</strong></p>
//   <p className="text-sm mt-2">• Pay on Delivery available</p>
//   <div className="flex gap-3 mt-3">
//     <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
//       REMOVE
//     </button>
//     <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
//       EDIT
//     </button>
//   </div>
// </div>

// <button className="text-pink-600 hover:bg-pink-600 hover:text-white font-bold mb-5 bgform py-3">
//   + Add Hospital Address
// </button>

// <div className="flex w-full justify-evenly">

//     <div  className="w-16">
  
//     </div>

//     <div className="w-8">
//     <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><circle cx="-25.926" cy="41.954" r="29.873" fill="#5f259f" transform="rotate(-76.714 -48.435 5.641) scale(8.56802)"/><path d="M372.164 189.203c0-10.008-8.576-18.593-18.584-18.593h-34.323l-78.638-90.084c-7.154-8.577-18.592-11.439-30.03-8.577l-27.17 8.577c-4.292 1.43-5.723 7.154-2.862 10.007l85.8 81.508H136.236c-4.293 0-7.154 2.861-7.154 7.154v14.292c0 10.016 8.585 18.592 18.592 18.592h20.015v68.639c0 51.476 27.17 81.499 72.931 81.499 14.292 0 25.739-1.431 40.03-7.146v45.753c0 12.87 10.016 22.886 22.885 22.886h20.015c4.293 0 8.577-4.293 8.577-8.586V210.648h32.893c4.292 0 7.145-2.861 7.145-7.145v-14.3zM280.65 312.17c-8.576 4.292-20.015 5.723-28.591 5.723-22.886 0-34.324-11.438-34.324-37.176v-68.639h62.915v100.092z" fill="#fff" fill-rule="nonzero"/></svg> 
//     </div>

//     <div className="w-8">
//      <img src="https://img.icons8.com/?size=100&id=5JTcb83oDGrE&format=png&color=000000"/>
//     </div>

//     <div className="w-8">
//      <img src="https://img.icons8.com/?size=100&id=13611&format=png&color=000000"/>
//     </div>

// </div>
//     </div>



// {/* right */}
//      <div className="bgform text-white h-[80%] w-[25rem] flex flex-col justify-center p-4 ">
//      <div className=" border-gray-300 ">
//         <h3 className="text-2xl font-bold mb-2 text-green-600">Delivery Estimates</h3>
//         <p className="text-sm mb-4">
//           Estimated delivery by <strong>5 Dec 2024</strong>
//         </p>
//         <h3 className="text-lg font-bold mb-2">Total Charges</h3>

//         <div className="flex flex-col gap-y-2">

//         {/* <p className="text-sm mb-1">Hospitalization & Surgical Charges: ₹{priceDetails.Hospitalization}</p> */}
//         <div className="flex justify-between">
//           <p className="text-sm mb-1">Hospitalization <br></br> & Surgical Charges:</p>
//           <p className="text-sm mb-1">₹{priceDetails.Hospitalization}</p>
//         </div>

        
//         <div className="flex justify-between">
//           <p className="text-sm mb-1">Medical Team Fees:</p>
//           <p className="text-sm mb-1">₹{priceDetails.teamcharges}</p>
//         </div>

        
//         <div className="flex justify-between">
//           <p className="text-sm mb-1">Platform Fee:</p>
//           <p className="text-sm mb-1">₹{priceDetails.platformFee}</p>
//         </div>
       
//         <div className="flex justify-between">
//           <p className="text-sm mb-1">Shipping Fee:</p>
//           <p className="text-sm mb-1">₹{priceDetails.shippingFee}</p>
//         </div>
        
//         <div className="flex justify-between">
//           <p className="text-sm mb-1">Legal & <br/> Administrative Costs:</p>
//           <p className="text-sm mb-1">₹{priceDetails.legalcharges}</p>
//         </div>
        
//         <div className="flex justify-between">
//           <p className="text-sm mb-1">Miscellaneous Charges :</p>
//           <p className="text-sm mb-1">₹{priceDetails.miscellaneouscharges}</p>
//         </div>
//         </div>

//         <h3 className="text-lg font-bold mb-5 bg-white text-black rounded-md px-2 py-2">Total-Charges: ₹{calculateTotalAmount()}</h3>
//         <Link to="/paymentgatwaymethod">
//           <button className="w-full py-3 bg-pink-600 text-white rounded-md font-bold hover:bg-pink-700">
//             CONTINUE
//           </button>
//         </Link>
//       </div>

//       <div className="text-center mt-10">
//         <p className="text-sm">
//           Need Help?{" "}
//           <a href="#" className="text-pink-600 hover:underline">
//             Contact Us
//           </a>
//         </p>
//       </div>
//      </div>


//     </div>
//   );
// };

// export default PaymentGateway;




import React, { useState } from "react";
import { Link } from "react-router-dom";


const PaymentGateway = () => {
  const [address, setAddress] = useState({
    name: "Nikhil Gothwal",
    type: "HOSPITAL",
    details: "63/2 SN Krishna Hospital, Teen Batti Freeganj, Ujjain (M.P)",
    mobile: "8827196257",
    isDefault: true,
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [editedAddress, setEditedAddress] = useState({ ...address }); // Editable address

  const [priceDetails] = useState({
    totalMRP: 1999,
    discount: 1000,
    platformFee: 20,
    shippingFee: 45000,
    Hospitalization: 45000,
    teamcharges: 125000,
    legalcharges: 17000,
    miscellaneouscharges: 8000,
  });

  const calculateTotalAmount = () => {
    return (
      priceDetails.shippingFee +
      priceDetails.teamcharges +
      priceDetails.platformFee +
      priceDetails.Hospitalization +
      priceDetails.legalcharges +
      priceDetails.miscellaneouscharges
    );
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedAddress({ ...editedAddress, [name]: value });
  };

  const saveEditedAddress = () => {
    setAddress(editedAddress);
    setIsEditing(false);
  };

  return (
    <div className="font-sans mx-auto gap-5 text-gray-900 flex justify-between mt-16 h-screen">
      {/* Left */}
      <div className="flex flex-col gap-y-2 w-[60%]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-5 text-white">Select Delivery Address</h2>
            <p className="text-white opacity-80">DEFAULT ADDRESS</p>
          </div>
          <button className="bgform text-white h-[3rem] w-[13rem]">Change hospital</button>
        </div>

        {!isEditing ? (
          <div className="border border-gray-300 rounded-md p-5 mb-5 bg-white">
            <input
              type="radio"
              id="defaultAddress"
              name="address"
              checked={address.isDefault}
              onChange={() => {}}
              className="mr-2"
            />
            <label htmlFor="defaultAddress" className="font-bold text-lg">
              {address.name} <span className="text-green-600 font-normal">({address.type})</span>
            </label>
            <p className="mt-2 text-sm">{address.details}</p>
            <p className="text-sm">
              Mobile: <strong>{address.mobile}</strong>
            </p>
            <p className="text-sm mt-2">• Pay on Delivery available</p>
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                REMOVE
              </button>
              <button
                className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
                onClick={() => setIsEditing(true)}
              >
                EDIT
              </button>
            </div>
          </div>
        ) : (
          <div className="border border-gray-300 rounded-md p-5 mb-5 bg-white">
            <h3 className="text-lg font-bold mb-3">Edit Address</h3>
            <input
              type="text"
              name="name"
              value={editedAddress.name}
              onChange={handleEditChange}
              className="w-full mb-3 p-2 border rounded-md"
              placeholder="Name"
            />
            <input
              type="text"
              name="type"
              value={editedAddress.type}
              onChange={handleEditChange}
              className="w-full mb-3 p-2 border rounded-md"
              placeholder="Type"
            />
            <textarea
              name="details"
              value={editedAddress.details}
              onChange={handleEditChange}
              className="w-full mb-3 p-2 border rounded-md"
              placeholder="Address Details"
            ></textarea>
            <input
              type="text"
              name="mobile"
              value={editedAddress.mobile}
              onChange={handleEditChange}
              className="w-full mb-3 p-2 border rounded-md"
              placeholder="Mobile Number"
            />
            <div className="flex gap-3">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md"
                onClick={saveEditedAddress}
              >
                SAVE
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setIsEditing(false)}
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        <button className="text-pink-600 hover:bg-pink-600 hover:text-white font-bold mb-5 bgform py-3">
          + Add Hospital Address
        </button>

        <div className="flex w-full justify-evenly">

    <div  className="w-16">
    <svg class="main-header__logo-image" fill="#A1A1A1" role="presentation" viewBox="0 0 435.97 173.13" xmlns="http://www.w3.org/2000/svg"><path d="M206.2,84.58v50.75H190.1V10h42.7a38.61,38.61,0,0,1,27.65,10.85A34.88,34.88,0,0,1,272,47.3a34.72,34.72,0,0,1-11.55,26.6q-11.2,10.68-27.65,10.67H206.2Zm0-59.15V69.18h27a21.28,21.28,0,0,0,15.93-6.48,21.36,21.36,0,0,0,0-30.63,21,21,0,0,0-15.93-6.65h-27Z" fill="#5f6368"/><path d="M309.1,46.78q17.85,0,28.18,9.54T347.6,82.48v52.85H332.2v-11.9h-.7q-10,14.7-26.6,14.7-14.17,0-23.71-8.4a26.82,26.82,0,0,1-9.54-21q0-13.31,10.06-21.17t26.86-7.88q14.34,0,23.62,5.25V81.25A18.33,18.33,0,0,0,325.54,67,22.8,22.8,0,0,0,310,61.13q-13.49,0-21.35,11.38l-14.18-8.93Q286.17,46.78,309.1,46.78Zm-20.83,62.3a12.86,12.86,0,0,0,5.34,10.5,19.64,19.64,0,0,0,12.51,4.2,25.67,25.67,0,0,0,18.11-7.52q8-7.53,8-17.67-7.53-6-21-6-9.81,0-16.36,4.73C290.46,100.52,288.27,104.41,288.27,109.08Z" fill="#5f6368"/><path d="M436,49.58,382.24,173.13H365.62l19.95-43.23L350.22,49.58h17.5l25.55,61.6h.35l24.85-61.6Z" fill="#5f6368"/><path d="M141.14,73.64A85.79,85.79,0,0,0,139.9,59H72V86.73h38.89a33.33,33.33,0,0,1-14.38,21.88v18h23.21C133.31,114.08,141.14,95.55,141.14,73.64Z" fill="#4285f4"/><path d="M72,144c19.43,0,35.79-6.38,47.72-17.38l-23.21-18C90.05,113,81.73,115.5,72,115.5c-18.78,0-34.72-12.66-40.42-29.72H7.67v18.55A72,72,0,0,0,72,144Z" fill="#34a853"/><path d="M31.58,85.78a43.14,43.14,0,0,1,0-27.56V39.67H7.67a72,72,0,0,0,0,64.66Z" fill="#fbbc04"/><path d="M72,28.5A39.09,39.09,0,0,1,99.62,39.3h0l20.55-20.55A69.18,69.18,0,0,0,72,0,72,72,0,0,0,7.67,39.67L31.58,58.22C37.28,41.16,53.22,28.5,72,28.5Z" fill="#ea4335"/></svg>
     </div>

    <div className="w-8">
   <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><circle cx="-25.926" cy="41.954" r="29.873" fill="#5f259f" transform="rotate(-76.714 -48.435 5.641) scale(8.56802)"/><path d="M372.164 189.203c0-10.008-8.576-18.593-18.584-18.593h-34.323l-78.638-90.084c-7.154-8.577-18.592-11.439-30.03-8.577l-27.17 8.577c-4.292 1.43-5.723 7.154-2.862 10.007l85.8 81.508H136.236c-4.293 0-7.154 2.861-7.154 7.154v14.292c0 10.016 8.585 18.592 18.592 18.592h20.015v68.639c0 51.476 27.17 81.499 72.931 81.499 14.292 0 25.739-1.431 40.03-7.146v45.753c0 12.87 10.016 22.886 22.885 22.886h20.015c4.293 0 8.577-4.293 8.577-8.586V210.648h32.893c4.292 0 7.145-2.861 7.145-7.145v-14.3zM280.65 312.17c-8.576 4.292-20.015 5.723-28.591 5.723-22.886 0-34.324-11.438-34.324-37.176v-68.639h62.915v100.092z" fill="#fff" fill-rule="nonzero"/></svg> 
    </div>

    <div className="w-8">
     <img src="https://img.icons8.com/?size=100&id=5JTcb83oDGrE&format=png&color=000000"/>
     </div>

     <div className="w-8">
      <img src="https://img.icons8.com/?size=100&id=13611&format=png&color=000000"/>
     </div>

 </div>

      </div>

      {/* Right */}
      <div className="bgform text-white h-[80%] w-[25rem] flex flex-col justify-center p-4">
        <div className="border-gray-300">
          <h3 className="text-2xl font-bold mb-2 text-green-600">Delivery Estimates</h3>
          <p className="text-sm mb-4">
            Estimated delivery by <strong>5 Dec 2024</strong>
          </p>
          <h3 className="text-lg font-bold mb-2">Total Charges</h3>
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-between">
              <p className="text-sm mb-1">Hospitalization & Surgical Charges:</p>
              <p className="text-sm mb-1">₹{priceDetails.Hospitalization}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm mb-1">Medical Team Fees:</p>
              <p className="text-sm mb-1">₹{priceDetails.teamcharges}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm mb-1">Platform Fee:</p>
              <p className="text-sm mb-1">₹{priceDetails.platformFee}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm mb-1">Shipping Fee:</p>
              <p className="text-sm mb-1">₹{priceDetails.shippingFee}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm mb-1">Legal & Administrative Costs:</p>
              <p className="text-sm mb-1">₹{priceDetails.legalcharges}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm mb-1">Miscellaneous Charges:</p>
              <p className="text-sm mb-1">₹{priceDetails.miscellaneouscharges}</p>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-5 bg-white text-black rounded-md px-2 py-2">
            Total-Charges: ₹{calculateTotalAmount()}
          </h3>
          <Link to="/paymentgatwaymethod">
            <button className="w-full py-3 bg-pink-600 text-white rounded-md font-bold hover:bg-pink-700">
              CONTINUE
            </button>
          </Link>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm">
            Need Help?{" "}
            <a href="#" className="text-pink-600 hover:underline">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
