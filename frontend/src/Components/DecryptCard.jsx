// src/components/DecryptCard.jsx
import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import { compareString } from "../services/bcryptApi";

const DecryptCard = () => {
  const [plain, setPlain] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (!plain.trim() || !hash.trim()) return alert("Fill both fields.");
    setLoading(true);
    try {
      const { data } = await compareString(plain, hash);
      setResult(data.match);
    } catch {
      alert("Error comparing strings.");
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
        <FaKey className="text-purple-500 text-3xl mr-3" />
        <h2 className="text-2xl font-semibold">Decrypt</h2>
      </div>
      <p className="text-gray-600 mb-4">
        Check your bcrypt hash against plaintext.
      </p>

      <input
        type="text"
        value={plain}
        onChange={(e) => setPlain(e.target.value)}
        placeholder="Plain text..."
        className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
      />

      <input
        type="text"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        placeholder="Bcrypt hash..."
        className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
      />

      <button
        onClick={handleCompare}
        disabled={loading}
        className="
          w-full py-3 rounded-lg
          bg-gradient-to-r from-purple-500 to-indigo-600
          text-white font-semibold
          hover:from-purple-600 hover:to-indigo-700
          transition
        "
      >
        {loading ? "Matching…" : "Decrypt"}
      </button>

      {result !== null && (
        <div
          className={`
            mt-6 p-4 rounded-lg border text-sm
            ${
              result
                ? "bg-green-50 border-green-300 text-green-800"
                : "bg-red-50 border-red-300 text-red-800"
            }
          `}
        >
          {result ? "✅ Matched!" : "❌ Not matched."}
        </div>
      )}
    </div>
  );
};

export default DecryptCard;
