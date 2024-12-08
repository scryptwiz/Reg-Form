import React from "react";

const addOnsList = [
	{id: 1, name: "Online Service", price: "$10/mo"},
	{id: 2, name: "Larger Storage", price: "$5/mo"},
	{id: 3, name: "Customizable Profile", price: "$2/mo"},
];

const AddOns = ({data, onChange, onNext, onBack}) => {
	const handleToggle = (id) => {
		const newAddOns = data.includes(id)
			? data.filter((addOnId) => addOnId !== id)
			: [...data, id];
		onChange(newAddOns);
	};

	return (
		<div className="bg-white h-full flex flex-col justify-between p-4 md:p-6 rounded-lg shadow-md">
			<div className="">
				<h2 className="text-lg md:text-xl font-bold text-gray-700">Add-Ons</h2>
				<p className="text-sm md:text-base text-gray-500">
					Add additional features to your plan.
				</p>
				<div className="flex flex-col gap-4 mt-4">
					{addOnsList.map((addOn) => (
						<div key={addOn.id} className="flex items-center gap-2 border rounded-lg border-gray-700 px-3 py-3">
							<input
								type="checkbox"
								checked={data.includes(addOn.id)}
								onChange={() => handleToggle(addOn.id)}
							/>
							<label className="text-gray-700">
								{addOn.name} - {addOn.price}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between mt-4">
				<button onClick={onBack} className="text-sm text-gray-500">
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

export default AddOns;
