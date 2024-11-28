import React, { useState } from "react";
import DonorSearch from "./DonorSearch";
import RequestStatus from "./RequestStatus";

const InitiateSearch = () => {
  const [currentView, setCurrentView] = useState("search"); // Default view is DonorSearch
  const [requests, setRequests] = useState([]); // Stores all raised requests

  const handleSendRequest = (donor) => {
    setRequests((prevRequests) => [...prevRequests, donor]);
  };

  return (
    <div>
      {currentView === "search" && (
        <DonorSearch
          onSendRequest={handleSendRequest}
          onNavigate={() => setCurrentView("requests")}
        />
      )}
      {currentView === "requests" && (
        <RequestStatus
          requests={requests}
          onNavigate={() => setCurrentView("search")}
        />
      )}
    </div>
  );
};

export default InitiateSearch;
