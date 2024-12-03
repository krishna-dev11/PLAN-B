// import React, { useState } from "react";
// import {toast} from "react-hot-toast"

// import "react-toastify/dist/ReactToastify.css";
// import { IoSearch } from "react-icons/io5";
// import "./DonorSearch.css"





// const DonorSearch = ({ onSendRequest, onNavigate }) => {
  
//   const donors = [

//       { _id: 1, donorName: "Krishna Gothwal", status: "dead", patientId: "R-2001-KRISHNA-Lungs", donatedOrgan: "Lungs", location: "Ujjain", distance: "45km", gender: "male", timeSinceDeath: "6 hours", bloodGroup: "O+" },
//       { _id: 2, donorName: "Anita Sharma", status: "live", patientId: "R-2002-ANITA-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "80km", gender: "female", bloodGroup: "A-" },
//       { _id: 3, donorName: "Ravi Jain", status: "dead", patientId: "R-2003-RAVI-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "200km", gender: "male", timeSinceDeath: "24 hours", bloodGroup: "B+" },
//       { _id: 4, donorName: "Sneha Verma", status: "live", patientId: "R-2004-SNEHA-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "50km", gender: "female", bloodGroup: "O-" },
//       { _id: 5, donorName: "Mohit Gupta", status: "dead", patientId: "R-2005-MOHIT-Liver", donatedOrgan: "Liver", location: "Neemuch", distance: "150km", gender: "male", timeSinceDeath: "18 hours", bloodGroup: "AB+" },
//       { _id: 6, donorName: "Pooja Mishra", status: "dead", patientId: "R-2006-POOJA-Kidney", donatedOrgan: "Kidney", location: "Sagar", distance: "180km", gender: "female", timeSinceDeath: "12 hours", bloodGroup: "A+" },
//       { _id: 7, donorName: "Rahul Meena", status: "live", patientId: "R-2007-RAHUL-Lungs", donatedOrgan: "Lungs", location: "Gwalior", distance: "250km", gender: "male", bloodGroup: "B-" },
//       { _id: 8, donorName: "Vikas Dubey", status: "dead", patientId: "R-2008-VIKAS-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "200km", gender: "male", timeSinceDeath: "36 hours", bloodGroup: "O+" },
//       { _id: 9, donorName: "Kavita Solanki", status: "live", patientId: "R-2009-KAVITA-Liver", donatedOrgan: "Liver", location: "Dewas", distance: "70km", gender: "female", bloodGroup: "AB-" },
//       { _id: 10, donorName: "Ramesh Tiwari", status: "dead", patientId: "R-2010-RAMESH-Eyes", donatedOrgan: "Eyes", location: "Ujjain", distance: "12km", gender: "male", timeSinceDeath: "42 hours", bloodGroup: "O-" },
//       { _id: 11, donorName: "Meera Joshi", status: "live", patientId: "R-2011-MEERA-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "85km", gender: "female", bloodGroup: "A+" },
//       { _id: 12, donorName: "Ajay Pawar", status: "dead", patientId: "R-2012-AJAY-Lungs", donatedOrgan: "Lungs", location: "Indore", distance: "85km", gender: "female", bloodGroup: "A+"},
//     { _id: 13, donorName: "Sunita Devi", status: "dead", patientId: "R-2013-SUNITA-Liver", donatedOrgan: "Liver", location: "Rewa", distance: "350km", gender: "female", timeSinceDeath: "30 hours", bloodGroup: "O+" },
//   { _id: 14, donorName: "Prakash Singh", status: "live", patientId: "R-2014-PRAKASH-Heart", donatedOrgan: "Heart", location: "Ujjain", distance: "12km", gender: "male", bloodGroup: "AB+" },
//   { _id: 15, donorName: "Neha Kapoor", status: "live", patientId: "R-2015-NEHA-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "45km", gender: "female", bloodGroup: "B-" },
//   { _id: 16, donorName: "Rohit Patil", status: "dead", patientId: "R-2016-ROHIT-Kidney", donatedOrgan: "Kidney", location: "Bhopal", distance: "220km", gender: "male", timeSinceDeath: "16 hours", bloodGroup: "A-" },
//   { _id: 17, donorName: "Geeta Saxena", status: "dead", patientId: "R-2017-GEETA-Eyes", donatedOrgan: "Eyes", location: "Indore", distance: "90km", gender: "female", timeSinceDeath: "10 hours", bloodGroup: "O-" },
//   { _id: 18, donorName: "Kunal Deshmukh", status: "live", patientId: "R-2018-KUNAL-Lungs", donatedOrgan: "Lungs", location: "Gwalior", distance: "240km", gender: "male", bloodGroup: "B+" },
//   { _id: 19, donorName: "Priya Yadav", status: "live", patientId: "R-2019-PRIYA-Liver", donatedOrgan: "Liver", location: "Jabalpur", distance: "320km", gender: "female", bloodGroup: "AB+" },
//   { _id: 20, donorName: "Arun Kulkarni", status: "dead", patientId: "R-2020-ARUN-Heart", donatedOrgan: "Heart", location: "Sagar", distance: "175km", gender: "male", timeSinceDeath: "40 hours", bloodGroup: "O+" },
//   { _id: 21, donorName: "Ashok Patel", status: "dead", patientId: "R-2021-ASHOK-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "100km", gender: "male", timeSinceDeath: "10 hours", bloodGroup: "B-" },
//   { _id: 22, donorName: "Manju Mehta", status: "live", patientId: "R-2022-MANJU-Liver", donatedOrgan: "Liver", location: "Ratlam", distance: "30km", gender: "female", bloodGroup: "O-" },
//   { _id: 23, donorName: "Nisha Patel", status: "dead", patientId: "R-2023-NISHA-Eyes", donatedOrgan: "Eyes", location: "Khandwa", distance: "120km", gender: "female", timeSinceDeath: "48 hours", bloodGroup: "A+" },
//   { _id: 24, donorName: "Sandeep Sharma", status: "live", patientId: "R-2024-SANDEEP-Kidney", donatedOrgan: "Kidney", location: "Gwalior", distance: "160km", gender: "male", bloodGroup: "AB-" },
//   { _id: 25, donorName: "Priya Rani", status: "dead", patientId: "R-2025-PRIYA-Liver", donatedOrgan: "Liver", location: "Rewa", distance: "190km", gender: "female", timeSinceDeath: "45 hours", bloodGroup: "O+" },
//   { _id: 26, donorName: "Vijay Kumar", status: "live", patientId: "R-2026-VIJAY-Lungs", donatedOrgan: "Lungs", location: "Jabalpur", distance: "220km", gender: "male", bloodGroup: "A-" },
//   { _id: 27, donorName: "Rupal Singh", status: "dead", patientId: "R-2027-RUPAL-Kidney", donatedOrgan: "Kidney", location: "Ujjain", distance: "50km", gender: "female", timeSinceDeath: "18 hours", bloodGroup: "B+" },
//   { _id: 28, donorName: "Ajit Patil", status: "dead", patientId: "R-2028-AJIT-Heart", donatedOrgan: "Heart", location: "Indore", distance: "90km", gender: "male", timeSinceDeath: "20 hours", bloodGroup: "A+" },
//   { _id: 29, donorName: "Rajesh Gupta", status: "live", patientId: "R-2029-RAJESH-Eyes", donatedOrgan: "Eyes", location: "Sagar", distance: "200km", gender: "male", bloodGroup: "O-" },
//   { _id: 30, donorName: "Suman Verma", status: "dead", patientId: "R-2030-SUMAN-Kidney", donatedOrgan: "Kidney", location: "Dewas", distance: "80km", gender: "female", timeSinceDeath: "15 hours", bloodGroup: "AB+" },
//   { _id: 31, donorName: "Seema Jain", status: "dead", patientId: "R-2031-SEEMA-Liver", donatedOrgan: "Liver", location: "Ujjain", distance: "30km", gender: "female", timeSinceDeath: "28 hours", bloodGroup: "B+" },
//   { _id: 32, donorName: "Niraj Joshi", status: "live", patientId: "R-2032-NIRAJ-Liver", donatedOrgan: "Liver", location: "Indore", distance: "140km", gender: "male", bloodGroup: "A+" },
//   { _id: 33, donorName: "Anil Meena", status: "dead", patientId: "R-2033-ANIL-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "75km", gender: "male", timeSinceDeath: "12 hours", bloodGroup: "O+" },
//   { _id: 34, donorName: "Kavita Gupta", status: "dead", patientId: "R-2034-KAVITA-Kidney", donatedOrgan: "Kidney", location: "Sagar", distance: "190km", gender: "female", timeSinceDeath: "40 hours", bloodGroup: "B-" },
//   { _id: 35, donorName: "Manoj Pawar", status: "dead", patientId: "R-2035-MANOJ-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "180km", gender: "male", timeSinceDeath: "35 hours", bloodGroup: "A-" },
//   { _id: 36, donorName: "Rekha Tiwari", status: "live", patientId: "R-2036-REKHA-Liver", donatedOrgan: "Liver", location: "Gwalior", distance: "200km", gender: "female", bloodGroup: "O+" },
//   { _id: 37, donorName: "Ankur Yadav", status: "dead", patientId: "R-2037-ANKUR-Lungs", donatedOrgan: "Lungs", location: "Jabalpur", distance: "250km", gender: "male", timeSinceDeath: "48 hours", bloodGroup: "O-" },
//   { _id: 38, donorName: "Alok Joshi", status: "live", patientId: "R-2038-ALOK-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "120km", gender: "male", bloodGroup: "AB+" },
//   { _id: 39, donorName: "Neelam Patel", status: "dead", patientId: "R-2039-NEELAM-Liver", donatedOrgan: "Liver", location: "Sagar", distance: "180km", gender: "female", timeSinceDeath: "34 hours", bloodGroup: "A-" }
// ];
  

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredDonors, setFilteredDonors] = useState([]);
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setHasSearched(false);
//   };

//   const handleSearch = () => {
//     const filtered = donors.filter((donor) =>
//       donor.donatedOrgan.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredDonors(filtered);
//     setHasSearched(true);
//   };

//   const handleRequest = (donor) => {
//     onSendRequest(donor);
//     toast.success(`Request raised for ${donor.donorName} (${donor.donatedOrgan})!`, {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };

//   return (
//     <div style={{ padding: "20px" }}>

     
      
//       <div className="flex justify-evenly items-center ">

  
//       <input
//   type="text"
//   className="w-[40%] h-[2.5rem] bg-white rounded-3xl text-center placeholder-gray-500 text-sm px-4"
//   placeholder="Enter Patient ID" required
// />


// <input
//   id="organSearch"
//   type="text"
//   placeholder="Type organ name (e.g., Kidney)"
//   value={searchTerm}
//   onChange={handleSearchChange}
//   className="w-[40%] h-[2.5rem] bg-white rounded-3xl text-center placeholder-gray-500 text-sm px-4"
//  />



//       <button  onClick={handleSearch}
//       >
//       <div className="h-[3rem] w-[3rem] flex justify-center items-center rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
//              <IoSearch fontSize={26} fill='black'/>
//       </div>
//       </button>
//       </div>


//       {hasSearched && (
//         <>
//           {filteredDonors.length > 0 ? (
//             <>
//               <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
//                 {filteredDonors.map((donor) => (
//                   <li
//                     key={donor._id}
//                     style={{
//                       border: "1px solid #ccc",
//                       padding: "10px",
//                       margin: "10px 0",
//                       borderRadius: "8px",
//                       position: "relative",
//                     }}
//                   >
//                     <div className="">
//                     <p className="text-white"><strong>Name:</strong> {donor.donorName}</p>
//                     <p className="text-white"><strong>Organ:</strong> {donor.donatedOrgan}</p>
//                     <p className="text-white"><strong>Location:</strong> {donor.location}</p>
//                     <p className="text-white"><strong>Distance:</strong> {donor.distance}</p>
//                     <p className="text-white"><strong>Status:</strong> {donor.status}</p>
//                     {donor.status === "dead" && (
//                       <p className="text-white"><strong>Time Since Death:</strong> {donor.timeSinceDeath}</p>
//                     )}
//                     </div>

//                     <button
//                       onClick={() => handleRequest(donor)}
//                       style={{
//                         backgroundColor: "green",
//                         color: "white",
//                         border: "none",
//                         padding: "8px 12px",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                         position: "absolute",
//                         right: "10px",
//                         bottom: "10px",
//                       }}
//                     >
//                       Request
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={onNavigate}
//                 style={{
//                   backgroundColor: "orange",
//                   color: "white",
//                   padding: "10px 20px",
//                   borderRadius: "8px",
//                   marginTop: "20px",
//                   cursor: "pointer",
//                 }}
//               >
//                 View Requests
//               </button>
//             </>
//           ) : (
//             <div className="h-full w-full justify-center items-center text-white text-xl translate-x-[14rem] translate-y-[8rem]">
//               <p>No Donor Found Match With you</p>
//             </div>
//           )}
//         </>
//       )}
     
//     </div>
//   );
// };

// export default DonorSearch;











// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";
// import { IoSearch } from "react-icons/io5";
// import "./DonorSearch.css";

// const DonorSearch = ({ onSendRequest, onNavigate }) => {
//   const donors = [
//           { _id: 1, donorName: "Krishna Gothwal", status: "dead", patientId: "R-2001-KRISHNA-Lungs", donatedOrgan: "Lungs", location: "Ujjain", distance: "45km", gender: "male", timeSinceDeath: "6 hours", bloodGroup: "O+" },
//       { _id: 2, donorName: "Anita Sharma", status: "live", patientId: "R-2002-ANITA-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "80km", gender: "female", bloodGroup: "A-" },
//       { _id: 3, donorName: "Ravi Jain", status: "dead", patientId: "R-2003-RAVI-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "200km", gender: "male", timeSinceDeath: "24 hours", bloodGroup: "B+" },
//       { _id: 4, donorName: "Sneha Verma", status: "live", patientId: "R-2004-SNEHA-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "50km", gender: "female", bloodGroup: "O-" },
//       { _id: 5, donorName: "Mohit Gupta", status: "dead", patientId: "R-2005-MOHIT-Liver", donatedOrgan: "Liver", location: "Neemuch", distance: "150km", gender: "male", timeSinceDeath: "18 hours", bloodGroup: "AB+" },
//       { _id: 6, donorName: "Pooja Mishra", status: "dead", patientId: "R-2006-POOJA-Kidney", donatedOrgan: "Kidney", location: "Sagar", distance: "180km", gender: "female", timeSinceDeath: "12 hours", bloodGroup: "A+" },
//       { _id: 7, donorName: "Rahul Meena", status: "live", patientId: "R-2007-RAHUL-Lungs", donatedOrgan: "Lungs", location: "Gwalior", distance: "250km", gender: "male", bloodGroup: "B-" },
//       { _id: 8, donorName: "Vikas Dubey", status: "dead", patientId: "R-2008-VIKAS-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "200km", gender: "male", timeSinceDeath: "36 hours", bloodGroup: "O+" },
//       { _id: 9, donorName: "Kavita Solanki", status: "live", patientId: "R-2009-KAVITA-Liver", donatedOrgan: "Liver", location: "Dewas", distance: "70km", gender: "female", bloodGroup: "AB-" },
//       { _id: 10, donorName: "Ramesh Tiwari", status: "dead", patientId: "R-2010-RAMESH-Eyes", donatedOrgan: "Eyes", location: "Ujjain", distance: "12km", gender: "male", timeSinceDeath: "42 hours", bloodGroup: "O-" },
//       { _id: 11, donorName: "Meera Joshi", status: "live", patientId: "R-2011-MEERA-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "85km", gender: "female", bloodGroup: "A+" },
//       { _id: 12, donorName: "Ajay Pawar", status: "dead", patientId: "R-2012-AJAY-Lungs", donatedOrgan: "Lungs", location: "Indore", distance: "85km", gender: "female", bloodGroup: "A+"},
//     { _id: 13, donorName: "Sunita Devi", status: "dead", patientId: "R-2013-SUNITA-Liver", donatedOrgan: "Liver", location: "Rewa", distance: "350km", gender: "female", timeSinceDeath: "30 hours", bloodGroup: "O+" },
//   { _id: 14, donorName: "Prakash Singh", status: "live", patientId: "R-2014-PRAKASH-Heart", donatedOrgan: "Heart", location: "Ujjain", distance: "12km", gender: "male", bloodGroup: "AB+" },
//   { _id: 15, donorName: "Neha Kapoor", status: "live", patientId: "R-2015-NEHA-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "45km", gender: "female", bloodGroup: "B-" },
//   { _id: 16, donorName: "Rohit Patil", status: "dead", patientId: "R-2016-ROHIT-Kidney", donatedOrgan: "Kidney", location: "Bhopal", distance: "220km", gender: "male", timeSinceDeath: "16 hours", bloodGroup: "A-" },
//   { _id: 17, donorName: "Geeta Saxena", status: "dead", patientId: "R-2017-GEETA-Eyes", donatedOrgan: "Eyes", location: "Indore", distance: "90km", gender: "female", timeSinceDeath: "10 hours", bloodGroup: "O-" },
//   { _id: 18, donorName: "Kunal Deshmukh", status: "live", patientId: "R-2018-KUNAL-Lungs", donatedOrgan: "Lungs", location: "Gwalior", distance: "240km", gender: "male", bloodGroup: "B+" },
//   { _id: 19, donorName: "Priya Yadav", status: "live", patientId: "R-2019-PRIYA-Liver", donatedOrgan: "Liver", location: "Jabalpur", distance: "320km", gender: "female", bloodGroup: "AB+" },
//   { _id: 20, donorName: "Arun Kulkarni", status: "dead", patientId: "R-2020-ARUN-Heart", donatedOrgan: "Heart", location: "Sagar", distance: "175km", gender: "male", timeSinceDeath: "40 hours", bloodGroup: "O+" },
//   { _id: 21, donorName: "Ashok Patel", status: "dead", patientId: "R-2021-ASHOK-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "100km", gender: "male", timeSinceDeath: "10 hours", bloodGroup: "B-" },
//   { _id: 22, donorName: "Manju Mehta", status: "live", patientId: "R-2022-MANJU-Liver", donatedOrgan: "Liver", location: "Ratlam", distance: "30km", gender: "female", bloodGroup: "O-" },
//   { _id: 23, donorName: "Nisha Patel", status: "dead", patientId: "R-2023-NISHA-Eyes", donatedOrgan: "Eyes", location: "Khandwa", distance: "120km", gender: "female", timeSinceDeath: "48 hours", bloodGroup: "A+" },
//   { _id: 24, donorName: "Sandeep Sharma", status: "live", patientId: "R-2024-SANDEEP-Kidney", donatedOrgan: "Kidney", location: "Gwalior", distance: "160km", gender: "male", bloodGroup: "AB-" },
//   { _id: 25, donorName: "Priya Rani", status: "dead", patientId: "R-2025-PRIYA-Liver", donatedOrgan: "Liver", location: "Rewa", distance: "190km", gender: "female", timeSinceDeath: "45 hours", bloodGroup: "O+" },
//   { _id: 26, donorName: "Vijay Kumar", status: "live", patientId: "R-2026-VIJAY-Lungs", donatedOrgan: "Lungs", location: "Jabalpur", distance: "220km", gender: "male", bloodGroup: "A-" },
//   { _id: 27, donorName: "Rupal Singh", status: "dead", patientId: "R-2027-RUPAL-Kidney", donatedOrgan: "Kidney", location: "Ujjain", distance: "50km", gender: "female", timeSinceDeath: "18 hours", bloodGroup: "B+" },
//   { _id: 28, donorName: "Ajit Patil", status: "dead", patientId: "R-2028-AJIT-Heart", donatedOrgan: "Heart", location: "Indore", distance: "90km", gender: "male", timeSinceDeath: "20 hours", bloodGroup: "A+" },
//   { _id: 29, donorName: "Rajesh Gupta", status: "live", patientId: "R-2029-RAJESH-Eyes", donatedOrgan: "Eyes", location: "Sagar", distance: "200km", gender: "male", bloodGroup: "O-" },
//   { _id: 30, donorName: "Suman Verma", status: "dead", patientId: "R-2030-SUMAN-Kidney", donatedOrgan: "Kidney", location: "Dewas", distance: "80km", gender: "female", timeSinceDeath: "15 hours", bloodGroup: "AB+" },
//   { _id: 31, donorName: "Seema Jain", status: "dead", patientId: "R-2031-SEEMA-Liver", donatedOrgan: "Liver", location: "Ujjain", distance: "30km", gender: "female", timeSinceDeath: "28 hours", bloodGroup: "B+" },
//   { _id: 32, donorName: "Niraj Joshi", status: "live", patientId: "R-2032-NIRAJ-Liver", donatedOrgan: "Liver", location: "Indore", distance: "140km", gender: "male", bloodGroup: "A+" },
//   { _id: 33, donorName: "Anil Meena", status: "dead", patientId: "R-2033-ANIL-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "75km", gender: "male", timeSinceDeath: "12 hours", bloodGroup: "O+" },
//   { _id: 34, donorName: "Kavita Gupta", status: "dead", patientId: "R-2034-KAVITA-Kidney", donatedOrgan: "Kidney", location: "Sagar", distance: "190km", gender: "female", timeSinceDeath: "40 hours", bloodGroup: "B-" },
//   { _id: 35, donorName: "Manoj Pawar", status: "dead", patientId: "R-2035-MANOJ-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "180km", gender: "male", timeSinceDeath: "35 hours", bloodGroup: "A-" },
//   { _id: 36, donorName: "Rekha Tiwari", status: "live", patientId: "R-2036-REKHA-Liver", donatedOrgan: "Liver", location: "Gwalior", distance: "200km", gender: "female", bloodGroup: "O+" },
//   { _id: 37, donorName: "Ankur Yadav", status: "dead", patientId: "R-2037-ANKUR-Lungs", donatedOrgan: "Lungs", location: "Jabalpur", distance: "250km", gender: "male", timeSinceDeath: "48 hours", bloodGroup: "O-" },
//   { _id: 38, donorName: "Alok Joshi", status: "live", patientId: "R-2038-ALOK-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "120km", gender: "male", bloodGroup: "AB+" },
//   { _id: 39, donorName: "Neelam Patel", status: "dead", patientId: "R-2039-NEELAM-Liver", donatedOrgan: "Liver", location: "Sagar", distance: "180km", gender: "female", timeSinceDeath: "34 hours", bloodGroup: "A-" }
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredDonors, setFilteredDonors] = useState([]);
//   const [hasSearched, setHasSearched] = useState(false);
//   const [requestsSent, setRequestsSent] = useState(0); // Track number of requests

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setHasSearched(false);
//   };

//   const handleSearch = () => {
//     const filtered = donors.filter((donor) =>
//       donor.donatedOrgan.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredDonors(filtered);
//     setHasSearched(true);
//   };

//   const handleRequest = (donor) => {
//     if (requestsSent < 3) {
//       onSendRequest(donor);
//       setRequestsSent(requestsSent + 1); // Increment the request count
//       toast.success(`Request raised for ${donor.donorName} (${donor.donatedOrgan})!`, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } else {
//       toast.error("You can only send up to 3 requests!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <div className="flex justify-evenly items-center ">
//         <input
//           type="text"
//           className="w-[40%] h-[2.5rem] bg-white rounded-3xl text-center placeholder-gray-500 text-sm px-4"
//           placeholder="Enter Patient ID"
//           required
//         />
//         <input
//           id="organSearch"
//           type="text"
//           placeholder="Type organ name (e.g., Kidney)"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="w-[40%] h-[2.5rem] bg-white rounded-3xl text-center placeholder-gray-500 text-sm px-4"
//         />
//         <button onClick={handleSearch}>
//           <div className="h-[3rem] w-[3rem] flex justify-center items-center rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
//             <IoSearch fontSize={26} fill="black" />
//           </div>
//         </button>
//       </div>

//       {hasSearched && (
//         <>
//           {filteredDonors.length > 0 ? (
//             <>
//               <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
//                 {filteredDonors.map((donor) => (
//                   <li
//                     key={donor._id}
//                     style={{
//                       border: "1px solid #ccc",
//                       padding: "10px",
//                       margin: "10px 0",
//                       borderRadius: "8px",
//                       position: "relative",
//                     }}
//                   >
//                     <div className="">
//                       <p className="text-white"><strong>Name:</strong> {donor.donorName}</p>
//                       <p className="text-white"><strong>Organ:</strong> {donor.donatedOrgan}</p>
//                       <p className="text-white"><strong>Location:</strong> {donor.location}</p>
//                       <p className="text-white"><strong>Distance:</strong> {donor.distance}</p>
//                       <p className="text-white"><strong>Status:</strong> {donor.status}</p>
//                       {donor.status === "dead" && (
//                         <p className="text-white"><strong>Time Since Death:</strong> {donor.timeSinceDeath}</p>
//                       )}
//                     </div>

//                     <button
//                       onClick={() => handleRequest(donor)}
//                       style={{
//                         backgroundColor: "green",
//                         color: "white",
//                         border: "none",
//                         padding: "8px 12px",
//                         borderRadius: "5px",
//                         cursor: requestsSent < 3 ? "pointer" : "not-allowed", // Disable button after 3 requests
//                         position: "absolute",
//                         right: "10px",
//                         bottom: "10px",
//                       }}
//                       disabled={requestsSent >= 3} // Disable button if 3 requests are sent
//                     >
//                       Request
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={onNavigate}
//                 style={{
//                   backgroundColor: "orange",
//                   color: "white",
//                   padding: "10px 20px",
//                   borderRadius: "8px",
//                   marginTop: "20px",
//                   cursor: "pointer",
//                 }}
//               >
//                 View Requests
//               </button>
//             </>
//           ) : (
//             <div className="h-full w-full justify-center items-center text-white text-xl translate-x-[14rem] translate-y-[8rem]">
//               <p>No Donor Found Match With you</p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default DonorSearch;










import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { IoSearch } from "react-icons/io5";
import "./DonorSearch.css";

const DonorSearch = ({ onSendRequest, onNavigate }) => {
  
  const donors = [
              { _id: 1, donorName: "Krishna Gothwal", status: "dead", patientId: "R-2001-KRISHNA-Lungs", donatedOrgan: "Lungs", location: "Ujjain", distance: "45km", gender: "male", timeSinceDeath: "6 hours", bloodGroup: "O+" },
          { _id: 2, donorName: "Anita Sharma", status: "live", patientId: "R-2002-ANITA-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "80km", gender: "female", bloodGroup: "A-" },
          { _id: 3, donorName: "Ravi Jain", status: "dead", patientId: "R-2003-RAVI-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "200km", gender: "male", timeSinceDeath: "24 hours", bloodGroup: "B+" },
          { _id: 4, donorName: "Sneha Verma", status: "live", patientId: "R-2004-SNEHA-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "50km", gender: "female", bloodGroup: "O-" },
          { _id: 5, donorName: "Mohit Gupta", status: "dead", patientId: "R-2005-MOHIT-Liver", donatedOrgan: "Liver", location: "Neemuch", distance: "150km", gender: "male", timeSinceDeath: "18 hours", bloodGroup: "AB+" },
          { _id: 6, donorName: "Pooja Mishra", status: "dead", patientId: "R-2006-POOJA-Kidney", donatedOrgan: "Kidney", location: "Sagar", distance: "180km", gender: "female", timeSinceDeath: "12 hours", bloodGroup: "A+" },
          { _id: 7, donorName: "Rahul Meena", status: "live", patientId: "R-2007-RAHUL-Lungs", donatedOrgan: "Lungs", location: "Gwalior", distance: "250km", gender: "male", bloodGroup: "B-" },
          { _id: 8, donorName: "Vikas Dubey", status: "dead", patientId: "R-2008-VIKAS-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "200km", gender: "male", timeSinceDeath: "36 hours", bloodGroup: "O+" },
          { _id: 9, donorName: "Kavita Solanki", status: "live", patientId: "R-2009-KAVITA-Liver", donatedOrgan: "Liver", location: "Dewas", distance: "70km", gender: "female", bloodGroup: "AB-" },
          { _id: 10, donorName: "Ramesh Tiwari", status: "dead", patientId: "R-2010-RAMESH-Eyes", donatedOrgan: "Eyes", location: "Ujjain", distance: "12km", gender: "male", timeSinceDeath: "42 hours", bloodGroup: "O-" },
          { _id: 11, donorName: "Meera Joshi", status: "live", patientId: "R-2011-MEERA-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "85km", gender: "female", bloodGroup: "A+" },
          { _id: 12, donorName: "Ajay Pawar", status: "dead", patientId: "R-2012-AJAY-Lungs", donatedOrgan: "Lungs", location: "Indore", distance: "85km", gender: "female", bloodGroup: "A+"},
        { _id: 13, donorName: "Sunita Devi", status: "dead", patientId: "R-2013-SUNITA-Liver", donatedOrgan: "Liver", location: "Rewa", distance: "350km", gender: "female", timeSinceDeath: "30 hours", bloodGroup: "O+" },
      { _id: 14, donorName: "Prakash Singh", status: "live", patientId: "R-2014-PRAKASH-Heart", donatedOrgan: "Heart", location: "Ujjain", distance: "12km", gender: "male", bloodGroup: "AB+" },
      { _id: 15, donorName: "Neha Kapoor", status: "live", patientId: "R-2015-NEHA-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "45km", gender: "female", bloodGroup: "B-" },
      { _id: 16, donorName: "Rohit Patil", status: "dead", patientId: "R-2016-ROHIT-Kidney", donatedOrgan: "Kidney", location: "Bhopal", distance: "220km", gender: "male", timeSinceDeath: "16 hours", bloodGroup: "A-" },
      { _id: 17, donorName: "Geeta Saxena", status: "dead", patientId: "R-2017-GEETA-Eyes", donatedOrgan: "Eyes", location: "Indore", distance: "90km", gender: "female", timeSinceDeath: "10 hours", bloodGroup: "O-" },
      { _id: 18, donorName: "Kunal Deshmukh", status: "live", patientId: "R-2018-KUNAL-Lungs", donatedOrgan: "Lungs", location: "Gwalior", distance: "240km", gender: "male", bloodGroup: "B+" },
      { _id: 19, donorName: "Priya Yadav", status: "live", patientId: "R-2019-PRIYA-Liver", donatedOrgan: "Liver", location: "Jabalpur", distance: "320km", gender: "female", bloodGroup: "AB+" },
      { _id: 20, donorName: "Arun Kulkarni", status: "dead", patientId: "R-2020-ARUN-Heart", donatedOrgan: "Heart", location: "Sagar", distance: "175km", gender: "male", timeSinceDeath: "40 hours", bloodGroup: "O+" },
      { _id: 21, donorName: "Ashok Patel", status: "dead", patientId: "R-2021-ASHOK-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "100km", gender: "male", timeSinceDeath: "10 hours", bloodGroup: "B-" },
      { _id: 22, donorName: "Manju Mehta", status: "live", patientId: "R-2022-MANJU-Liver", donatedOrgan: "Liver", location: "Ratlam", distance: "30km", gender: "female", bloodGroup: "O-" },
      { _id: 23, donorName: "Nisha Patel", status: "dead", patientId: "R-2023-NISHA-Eyes", donatedOrgan: "Eyes", location: "Khandwa", distance: "120km", gender: "female", timeSinceDeath: "48 hours", bloodGroup: "A+" },
      { _id: 24, donorName: "Sandeep Sharma", status: "live", patientId: "R-2024-SANDEEP-Kidney", donatedOrgan: "Kidney", location: "Gwalior", distance: "160km", gender: "male", bloodGroup: "AB-" },
      { _id: 25, donorName: "Priya Rani", status: "dead", patientId: "R-2025-PRIYA-Liver", donatedOrgan: "Liver", location: "Rewa", distance: "190km", gender: "female", timeSinceDeath: "45 hours", bloodGroup: "O+" },
      { _id: 26, donorName: "Vijay Kumar", status: "live", patientId: "R-2026-VIJAY-Lungs", donatedOrgan: "Lungs", location: "Jabalpur", distance: "220km", gender: "male", bloodGroup: "A-" },
      { _id: 27, donorName: "Rupal Singh", status: "dead", patientId: "R-2027-RUPAL-Kidney", donatedOrgan: "Kidney", location: "Ujjain", distance: "50km", gender: "female", timeSinceDeath: "18 hours", bloodGroup: "B+" },
      { _id: 28, donorName: "Ajit Patil", status: "dead", patientId: "R-2028-AJIT-Heart", donatedOrgan: "Heart", location: "Indore", distance: "90km", gender: "male", timeSinceDeath: "20 hours", bloodGroup: "A+" },
      { _id: 29, donorName: "Rajesh Gupta", status: "live", patientId: "R-2029-RAJESH-Eyes", donatedOrgan: "Eyes", location: "Sagar", distance: "200km", gender: "male", bloodGroup: "O-" },
      { _id: 30, donorName: "Suman Verma", status: "dead", patientId: "R-2030-SUMAN-Kidney", donatedOrgan: "Kidney", location: "Dewas", distance: "80km", gender: "female", timeSinceDeath: "15 hours", bloodGroup: "AB+" },
      { _id: 31, donorName: "Seema Jain", status: "dead", patientId: "R-2031-SEEMA-Liver", donatedOrgan: "Liver", location: "Ujjain", distance: "30km", gender: "female", timeSinceDeath: "28 hours", bloodGroup: "B+" },
      { _id: 32, donorName: "Niraj Joshi", status: "live", patientId: "R-2032-NIRAJ-Liver", donatedOrgan: "Liver", location: "Indore", distance: "140km", gender: "male", bloodGroup: "A+" },
      { _id: 33, donorName: "Anil Meena", status: "dead", patientId: "R-2033-ANIL-Eyes", donatedOrgan: "Eyes", location: "Ratlam", distance: "75km", gender: "male", timeSinceDeath: "12 hours", bloodGroup: "O+" },
      { _id: 34, donorName: "Kavita Gupta", status: "dead", patientId: "R-2034-KAVITA-Kidney", donatedOrgan: "Kidney", location: "Sagar", distance: "190km", gender: "female", timeSinceDeath: "40 hours", bloodGroup: "B-" },
      { _id: 35, donorName: "Manoj Pawar", status: "dead", patientId: "R-2035-MANOJ-Heart", donatedOrgan: "Heart", location: "Bhopal", distance: "180km", gender: "male", timeSinceDeath: "35 hours", bloodGroup: "A-" },
      { _id: 36, donorName: "Rekha Tiwari", status: "live", patientId: "R-2036-REKHA-Liver", donatedOrgan: "Liver", location: "Gwalior", distance: "200km", gender: "female", bloodGroup: "O+" },
      { _id: 37, donorName: "Ankur Yadav", status: "dead", patientId: "R-2037-ANKUR-Lungs", donatedOrgan: "Lungs", location: "Jabalpur", distance: "250km", gender: "male", timeSinceDeath: "48 hours", bloodGroup: "O-" },
      { _id: 38, donorName: "Alok Joshi", status: "live", patientId: "R-2038-ALOK-Kidney", donatedOrgan: "Kidney", location: "Indore", distance: "120km", gender: "male", bloodGroup: "AB+" },
      { _id: 39, donorName: "Neelam Patel", status: "dead", patientId: "R-2039-NEELAM-Liver", donatedOrgan: "Liver", location: "Sagar", distance: "180km", gender: "female", timeSinceDeath: "34 hours", bloodGroup: "A-" }
      ];
    

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [requests, setRequests] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setHasSearched(false);
  };

  const handleSearch = () => {
    const filtered = donors.filter((donor) =>
      donor.donatedOrgan.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDonors(filtered);
    setHasSearched(true);
  };

  const handleRequest = (donor) => {
    onSendRequest(donor);
    toast.success(`Request raised for ${donor.donorName} (${donor.donatedOrgan})!`, {
      position: "top-right",
      autoClose: 3000,
    });

    // Simulate the request acceptance after 30 seconds
    setTimeout(() => {
      setRequests((prevRequests) => [
        ...prevRequests,
        { ...donor, status: "Request Accepted" },
      ]);
    }, 30000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-evenly items-center">
        <input
          type="text"
          className="w-[40%] h-[2.5rem] bg-white rounded-3xl text-center placeholder-gray-500 text-sm px-4"
          placeholder="Enter Patient ID"
          required
        />
        <input
          id="organSearch"
          type="text"
          placeholder="Type organ name (e.g., Kidney)"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-[40%] h-[2.5rem] bg-white rounded-3xl text-center placeholder-gray-500 text-sm px-4"
        />
        <button onClick={handleSearch}>
          <div className="h-[3rem] w-[3rem] flex justify-center items-center rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
            <IoSearch fontSize={26} fill="black" />
          </div>
        </button>
      </div>

      {hasSearched && (
        <>
          {filteredDonors.length > 0 ? (
            <div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {filteredDonors.map((donor) => (
                  <li
                    key={donor._id}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      margin: "10px 0",
                      borderRadius: "8px",
                      position: "relative",
                    }}
                  >
                    <div className="">
                      <p className="text-white"><strong>Name:</strong> {donor.donorName}</p>
                      <p className="text-white"><strong>Organ:</strong> {donor.donatedOrgan}</p>
                      <p className="text-white"><strong>Location:</strong> {donor.location}</p>
                      <p className="text-white"><strong>Distance:</strong> {donor.distance}</p>
                      <p className="text-white"><strong>Status:</strong> {donor.status}</p>
                      {donor.status === "dead" && (
                        <p className="text-white"><strong>Time Since Death:</strong> {donor.timeSinceDeath}</p>
                      )}
                    </div>

                    <button
                      onClick={() => handleRequest(donor)}
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        bottom: "10px",
                      }}
                    >
                      Request
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={onNavigate}
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                View Requests
              </button>
            </div>
          ) : (
            <div className="h-full w-full justify-center items-center text-white text-xl translate-x-[14rem] translate-y-[8rem]">
              <p>No Donor Found Match With you</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DonorSearch;
