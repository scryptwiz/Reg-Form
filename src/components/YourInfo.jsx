import React, {useState} from "react";

const YourInfo = ({data, onChange, onNext}) => {
	const [formData, setFormData] = useState(data);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
		onChange({...formData, [name]: value});
	};

	return (
		<div className="h-full bg-white p-4 md:p-6 rounded-lg shadow-md">
			<h2 className="text-lg md:text-xl font-bold text-gray-700">Your Info</h2>
			<p className="text-sm md:text-base text-gray-500">
				Please provide your name, email address, and phone number.
			</p>
			<div className="flex flex-col gap-5 mt-4 text-gray-700">
				<div className="flex flex-col gap-3">
					<h5 className="font-semibold">Name</h5>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="John Doe"
						className="p-2 rounded-lg bg-white border border-gray-300"
					/>
				</div>
				<div className="flex flex-col gap-3">
					<h5 className="font-semibold">Email Address</h5>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="example@mail.com"
						className="p-2 rounded-lg bg-white border border-gray-300"
					/>
				</div>
				<div className="flex flex-col gap-3">
					<h5 className="font-semibold">Phone Number</h5>
					<input
						type="text"
						name="phone"
						value={formData.phone}
						onChange={handleInputChange}
						placeholder="Phone"
						className="p-2 rounded-lg bg-white border border-gray-300"
					/>
				</div>
			</div>
			<div className="flex justify-end mt-4">
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

export default YourInfo;
