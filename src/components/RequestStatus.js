// import React, { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

// const RequestStatus = ({ requests, onNavigate }) => {
//   const [updatedRequests, setUpdatedRequests] = useState(
//     requests.map((request) => ({ ...request, status: "Request Raised" }))
//   );
//   const [activeDonor, setActiveDonor] = useState(null); // State to store activated donor details

//   useEffect(() => {
//     // Simulate "Request Accepted" status after 30 seconds
//     const timer = setTimeout(() => {
//       setUpdatedRequests((prevRequests) =>
//         prevRequests.map((request) => ({
//           ...request,
//           status: "Request Accepted", // Update status to accepted
//         }))
//       );
//     }, 10000); // 30 seconds

//     // Clean up the timer when component unmounts or when requests change
//     return () => clearTimeout(timer);
//   }, []);

//   const handleActivate = (request) => {
//     // Remove the activated donor from the list and display their details
//     setUpdatedRequests((prevRequests) =>
//       prevRequests.filter((r) => r.donorName !== request.donorName)
//     );
//     setActiveDonor(request); // Save the selected donor's details
//     toast.success(`Details saved for ${request.donorName}`);
//   };

  
   

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 className="text-white text-3xl mb-6">Request Status</h1>

//       {/* Donor Requests List */}
//       {updatedRequests.length > 0 ? (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {updatedRequests.map((request, index) => (
//             <li
//               key={index}
//               style={{
//                 border: "1px solid #ccc",
//                 padding: "10px",
//                 margin: "10px 0",
//                 borderRadius: "8px",
//               }}
//             >
//               <div className="text-white">
//                 <p>
//                   <strong>Name:</strong> {request.donorName}
//                 </p>
//                 <p>
//                   <strong>Organ:</strong> {request.donatedOrgan}
//                 </p>
//                 <p>
//                   <strong>Location:</strong> {request.location}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {request.status}
//                 </p>
//               </div>

//               {request.status === "Request Accepted" && (
//                 <button
//                   onClick={() => handleActivate(request)}
//                   style={{
//                     backgroundColor: "green",
//                     color: "white",
//                     padding: "10px 20px",
//                     borderRadius: "8px",
//                     marginTop: "10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Activate
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-400">No requests raised yet.</p>
//       )}

//       <button
//         onClick={onNavigate}
//         style={{
//           backgroundColor: "blue",
//           color: "white",
//           padding: "10px 20px",
//           borderRadius: "8px",
//           marginTop: "20px",
//           cursor: "pointer",
//         }}
//       >
//         Back to Donor Search
//       </button>

//       {/* Display Active Donor Details */}
//       {activeDonor && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "20px",
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             backgroundColor: "#f9f9f9",
//           }}
//         >
//           <h2 className="text-gray-800">Activated Donor Details</h2>
//           <p>
//             <strong>Name:</strong> {activeDonor.donorName}
//           </p>
//           <p>
//             <strong>Organ:</strong> {activeDonor.donatedOrgan}
//           </p>
//           <p>
//             <strong>Location:</strong> {activeDonor.location}
//           </p>
//           <p>
//             <strong>Status:</strong> {activeDonor.status}
//           </p>
//           <Link to="/paymentgatway">
//           <button
//             style={{
//               backgroundColor: "#f50057",
//               color: "white",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               marginTop: "20px",
//               cursor: "pointer",
//             }}
//             onClick={() => toast.success("Navigating to Payment Section")}
//           >
//             Go to Payment Section
//           </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestStatus;





import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RequestStatus = ({ requests, onNavigate }) => {
  const [updatedRequests, setUpdatedRequests] = useState(
    requests.map((request) => ({ ...request, status: "Request Raised" }))
  );
  const [activeDonor, setActiveDonor] = useState(null); // State to store activated donor details

  useEffect(() => {
    // Simulate "Request Accepted" status after 10 seconds
    const timer = setTimeout(() => {
      setUpdatedRequests((prevRequests) =>
        prevRequests.map((request) => ({
          ...request,
          status: "Request Accepted", // Update status to accepted
        }))
      );
    }, 10000); // 10 seconds

    // Clean up the timer when component unmounts or when requests change
    return () => clearTimeout(timer);
  }, []);

  const handleActivate = (request) => {
    setActiveDonor(request); // Save the selected donor's details
    toast.success(`Details saved for ${request.donorName}`);
  };

  const handleBackup = (request) => {
    toast.info(`Backup set for ${request.donorName}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-white text-3xl mb-6">Request Status</h1>

      {/* Donor Requests List */}
      {updatedRequests.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {updatedRequests.map((request, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "8px",
              }}
            >
              <div className="text-white">
                <p>
                  <strong>Name:</strong> {request.donorName}
                </p>
                <p>
                  <strong>Organ:</strong> {request.donatedOrgan}
                </p>
                <p>
                  <strong>Location:</strong> {request.location}
                </p>
                <p>
                  <strong>Status:</strong> {request.status}
                </p>
              </div>

              {request.status === "Request Accepted" &&
                (activeDonor && activeDonor.donorName === request.donorName ? (
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Activated
                  </button>
                ) : activeDonor ? (
                  <button
                    onClick={() => handleBackup(request)}
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Backup
                  </button>
                ) : (
                  <button
                    onClick={() => handleActivate(request)}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Activate
                  </button>
                ))}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No requests raised yet.</p>
      )}

      <button
        onClick={onNavigate}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Back to Donor Search
      </button>

      {/* Display Active Donor Details */}
      {activeDonor && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2 className="text-gray-800">Activated Donor Details</h2>
          <p>
            <strong>Name:</strong> {activeDonor.donorName}
          </p>
          <p>
            <strong>Organ:</strong> {activeDonor.donatedOrgan}
          </p>
          <p>
            <strong>Location:</strong> {activeDonor.location}
          </p>
          <p>
            <strong>Status:</strong> {activeDonor.status}
          </p>
          <Link to="/paymentgatway">
            <button
              style={{
                backgroundColor: "#f50057",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              onClick={() => toast.success("Navigating to Payment Section")}
            >
              Go to Payment Section
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RequestStatus;
