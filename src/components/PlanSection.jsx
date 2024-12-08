import React from "react";

const plans = [
	{name: "Arcade", price: "$9/mo", icon: "🎮"},
	{name: "Advanced", price: "$12/mo", icon: "🕹️"},
	{name: "Pro", price: "$15/mo", icon: "🎲"},
];

const PlanSelection = ({
	selectedPlan,
	setSelectedPlan,
	billingCycle,
	setBillingCycle,
	onNext,
	onBack,
}) => {
	return (
		<div className="flex h-full flex-col justify-between bg-white p-4 md:p-6 rounded-lg shadow-md">
			<div className="flex flex-col gap-4">
				<h2 className="text-lg md:text-xl font-bold text-gray-700">Select your plan</h2>
				<p className="text-sm md:text-base text-gray-500">
					You have the option of monthly or yearly billing.
				</p>

				{/* Plan Options */}
				<div className="flex flex-col md:flex-row gap-4">
					{plans.map((plan) => (
						<button
							key={plan.name}
							onClick={() => setSelectedPlan(plan.name)}
							className={`p-4 border rounded-lg flex-1 text-center ${selectedPlan === plan.name ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
						>
							<div className="text-2xl">{plan.icon}</div>
							<div className="font-bold text-gray-700">{plan.name}</div>
							<div className="text-gray-500">{plan.price}</div>
						</button>
					))}
				</div>

				{/* Billing Cycle Toggle */}
				<div className="flex items-center justify-center gap-5 bg-gray-100 p-2 rounded-lg">
					<span className="text-sm md:text-base text-gray-700">Monthly</span>
					<div
						className={`w-12 h-6 bg-blue-300 rounded-full p-1 flex cursor-pointer ${billingCycle === "Yearly" ? "justify-end" : ""
							}`}
						onClick={() =>
							setBillingCycle(billingCycle === "Monthly" ? "Yearly" : "Monthly")
						}
					>
						<div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
					</div>
					<span className="text-sm md:text-base text-gray-700">Yearly</span>
				</div>
			</div>

			{/* Navigation Buttons */}
			<div className="flex justify-between">
				<button onClick={onBack} className="text-sm md:text-base text-gray-500">
					Go Back
				</button>
				<button
					onClick={onNext}
					className="bg-blue-500 text-white px-4 py-2 rounded-lg"
				>
					Next Step
				</button>
			</div>
		</div>
	);
};

export default PlanSelection;
