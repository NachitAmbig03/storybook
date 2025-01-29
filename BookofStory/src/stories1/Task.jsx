// import React, { useState } from "react";
// import "./Task.css";

// const Features = () => {
//   const [showAll, setShowAll] = useState(false);

//   const features = [
//     "Engine",
//     "998cc",
//     "Power",
//     "65.71bhp",
//     "Transmission",
//     "Manual",

//   ];

//   const additionalCategories = [
//     "Comfort",
//     "Interior",
//     "Exterior",
//     "Safety",
//     "Entertainment",
//   ];

//   return (
//     <div className="features-container">
//       <h2 className="features-title">Features</h2>
//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div key={index} className="feature-item">
//             <span className="check-icon">✔</span>
//             <span>{feature}</span>
//           </div>
//         ))}
//       </div>
//       <button
//         className="toggle-button"
//         onClick={() => setShowAll((prev) => !prev)}
//       >
//         {showAll ? "Hide Features ▲" : "View all Features ▼"}
//       </button>
//       {showAll && (
//         <div className="additional-features">
//           {additionalCategories.join(" | ")}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Features;
import React from 'react';
import './Task.css';

const Specifications = () => {
    return (
        <div className="specifications-container">
            <h2 className="specifications-title">Specifications</h2>
            <div className="specifications-grid">
                <div className="spec-item">
                    <span className="spec-label">Engine</span>
                    <span className="spec-value">998 cc</span>
                </div>
                <div className="spec-item1">
                    <span className="spec-label">Power</span>
                    <span className="spec-value">65.71 bhp</span>
                </div>
                <div className="spec-item">
                    <span className="spec-label">Transmission</span>
                    <span className="spec-value">Manual</span>
                </div>
                <div className="spec-item1">
                    <span className="spec-label">Mileage</span>
                    <span className="spec-value">24.39 kmpl</span>
                </div>
                <div className="spec-item">
                    <span className="spec-label">Fuel</span>
                    <div className='pet'>
                    <span className="spec-value">Petrol</span>
                    </div>
                </div>
                <div className="spec-item1">
                    <span className="spec-label">Boot Space</span>
                    <span className="spec-value">214 Litres</span>
                </div>
            </div>
            <div className="view-more">
                <br></br>
                <a href="#" className="view-more-link">View all Specifications ▼</a>
                <div className="categories">Engine | Fuel | Suspension | Dimensions</div>
            </div>
        </div>
    );
}

export default Specifications;