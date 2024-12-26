import React, { useState } from "react";
import "./SubscriptionPlans.css";

function SubscriptionPlans() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handlePayClick = () => {
        // Implement payment logic here
        alert(`Proceeding to payment for the ${selectedPlan} plan.`);
    };

    return (
        <div className="subscription_plans">
            <h2>Choose Your Plan</h2>
            <div className={`plan_item ${selectedPlan === 'Basic' ? 'selected' : ''}`}
                onClick={() => handlePlanSelect('Basic')}
                role="button"
                tabIndex="0"
                aria-pressed={selectedPlan === 'Basic'}>
                <h3>Basic Plan</h3>
                <p>₹499/month</p>
                <p>Access to all content in HD</p>
            </div>
            <div className={`plan_item ${selectedPlan === 'Standard' ? 'selected' : ''}`}
                onClick={() => handlePlanSelect('Standard')}
                role="button"
                tabIndex="0"
                aria-pressed={selectedPlan === 'Standard'}>
                <h3>Standard Plan</h3>
                <p>₹799/month</p>
                <p>Access to all content in HD and 4K</p>
                <p>Watch on 2 devices simultaneously</p>
            </div>
            <div className={`plan_item ${selectedPlan === 'Premium' ? 'selected' : ''}`}
                onClick={() => handlePlanSelect('Premium')}
                role="button"
                tabIndex="0"
                aria-pressed={selectedPlan === 'Standard'}>
                <h3>Premium Plan</h3>
                <p>₹999/month</p>
                <p>Access to all content in HD and 4K</p>
                <p>Watch on 4 devices simultaneously</p>
            </div>
            {selectedPlan && (
                <button className="pay_button" onClick={handlePayClick}>
                    Pay for {selectedPlan} Plan
                </button>
            )}
        </div>
    );
}

export default SubscriptionPlans;