
import React from 'react';
import './Tracking.css';

const Tracking = ({ currentStep }) => {
    
    const steps = ["Request Submitted", "E-Waste Collected", "In Progress", "Recycled"];
    const getProgressPercentage = () => {
        return ((currentStep - 1) / (steps.length - 1)) * 100;
    };

    return (
        <div className="stepper">
            <div className="progress-bar">
                <div className="progress" style={{ width: `${getProgressPercentage()}%` }}></div>
            </div>
            <div className="steps">
                {steps.map((step, index) => (
                    <div key={index} className={`step ${index + 1 === currentStep ? 'active' : ''}`}>
                        {step}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Tracking;
