import React, { useState } from "react";

const VotingEligibility = () => {
  const [age, setAge] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Voting Eligibility
        </h2>

        <input
          type="number"
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <h2
          className={`text-center text-lg font-semibold ${
            age >= 18 ? "text-green-600" : "text-red-600"
          }`}
        >
          {age >= 18
            ? "You are eligible to vote"
            : "You are not eligible to vote"}
        </h2>
      </div>
    </div>
  );
};

export default VotingEligibility;
