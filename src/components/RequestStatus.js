import React from "react";

const RequestStatus = ({ requests, onNavigate }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-white text-3xl" >Request Status</h1>
      {requests.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {requests.map((request, index) => (
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
              <p><strong>Name:</strong> {request.donorName}</p>
              <p><strong>Organ:</strong> {request.donatedOrgan}</p>
              <p><strong>Location:</strong> {request.location}</p>
              <p><strong>Status:</strong> Request Raised</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No requests raised yet.</p>
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
    </div>
  );
};

export default RequestStatus;
