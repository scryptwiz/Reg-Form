import React from "react";

const Summary = ({data, onBack, onSubmit}) => {
	return (
		<div className="h-full bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col justify-between">
			<div>
				<h2 className="text-lg md:text-xl font-bold text-gray-700">Summary</h2>
				<p className="text-sm md:text-base text-gray-500">
					Review your selections before confirming.
				</p>
				<div className="mt-4 text-black">
					<p>
						<strong>Name:</strong> {data.yourInfo.name}
					</p>
					<p>
						<strong>Email:</strong> {data.yourInfo.email}
					</p>
					<p>
						<strong>Phone:</strong> {data.yourInfo.phone}
					</p>
					<p>
						<strong>Plan:</strong> {data.selectedPlan.plan} (
						{data.selectedPlan.billingCycle})
					</p>
					<p>
						<strong>Add-Ons:</strong> {data.addOns.length > 0 ? data.addOns.join(", ") : "None"}
					</p>
				</div>
			</div>
			<div className="flex justify-between mt-4">
				<button onClick={onBack} className="text-sm text-gray-500">
					Go Back
				</button>
				<button
					onClick={onSubmit}
					className="bg-green-500 text-white px-4 py-2 rounded-lg"
				>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default Summary;
