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
import React, { useState } from 'react';
import './Task.css';

const Specifications = () => {
    const [showAll, setShowAll ]=
    useState(false);
    const [showOne, setShowOne ]=
    useState(false);
    const [showTwo, setShowTwo ]=
    useState(false);
    return (
        <div className="specifications-container">
            <h2 className="specifications-title">Specifications</h2>
            <br></br>
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
        
                 {/* <a href="#" className="view-more-link">View all Specifications <button>▼</button></a> */}
                  <div className="categories">Engine | Fuel | Suspension | Dimensions</div>
                  {/* <button className='eng-btn' onClick={() => setShowOne(!showOne)}>
                   {showOne ? "Hide Engine" : "Engine"} 
                   </button>
                   {showOne && (
                    <div className='add-eng'>
                        <p><strong>Engine:</strong>Flat engine, V engine</p>
                        <p><strong>Engine-Cylender:</strong>Twin-engne Cylender,three Cylender engine</p>
                        <p><strong>Engine Fuel Type:</strong>Petrol, Diesel</p>
                        </div>
                     )} */}

                     </div>
                    {/* <div className='Spc-dtl'>  */}
                    <button className='togl-btn' onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Hide Specification ᐃ" : "View all Specification ᐁ"}
                    </button>
                    {/* <div className="categories">Engine | Fuel | Suspension | Dimensions</div> */}
                    {showAll && (
                    <div
                        className='additionl-spec'>
                        <h3>Engine & Transmission{}</h3>
                        
                        <button className='u-btn' onClick={() => setShowTwo(!showTwo)}>
                                {showTwo ? "ᐃ" : "ᐁ"}
                        </button>
                        
                        {showTwo && (
                            <div
                            className='u-spec'>
                               <h4>Engine Type</h4>
                               <h4>Max Power</h4>
                               <h4>Displacement</h4>
                               <h4>998cc</h4>
                        
                            <div
                                className='u1-spec'>
                                <h4>Max Power</h4>
                                <h4>65Hp 5kRpm</h4>
                                <h4>Max Torque</h4>
                                <h4>89nm 3k rpm</h4>
                            </div>
                            </div>
                        )}
                        <h3>Fuel & Performance</h3>
                        <h3>Suspension,Steering & Breaks</h3>
                        <h3>Dimension & Capacity</h3>
                        </div>
                    )}
                    </div>            
                    
    );
}

export default Specifications;