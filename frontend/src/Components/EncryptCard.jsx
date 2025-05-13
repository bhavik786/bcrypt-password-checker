// src/components/EncryptCard.jsx
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { hashString } from "../services/bcryptApi";

const EncryptCard = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEncrypt = async () => {
    if (!input.trim()) return alert("Please enter text to encrypt.");
    setLoading(true);
    try {
      const { data } = await hashString(input);
      setOutput(data.hash);
    } catch {
      alert("Error hashing string.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        bg-white shadow-2xl rounded-3xl
        transform hover:scale-105 transition
        p-8 w-full sm:w-80 md:w-96 lg:w-1/3
        flex flex-col
      "
    >
      <div className="flex items-center mb-4">
        <FaLock className="text-indigo-500 text-3xl mr-3" />
        <h2 className="text-2xl font-semibold">Encrypt</h2>
      </div>
      <p className="text-gray-600 mb-4">
        Turn any text into a secure bcrypt hash.
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text..."
        className="
          w-full mb-4 px-4 py-3
          border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-300
        "
      />

      <button
        onClick={handleEncrypt}
        disabled={loading}
        className="
          w-full py-3 rounded-lg 
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white font-semibold
          hover:from-indigo-600 hover:to-purple-700
          transition
        "
      >
        {loading ? "Hashing…" : "Encrypt"}
      </button>

      {output && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm break-words">
          {output}
        </div>
      )}

      <p className="mt-auto pt-6 text-xs text-gray-400">
        Note: Salt rounds = 12.
      </p>
    </div>
  );
};

export default EncryptCard;
