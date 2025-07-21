import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMatch } from "../services/api";

const initialStats = {
  goals: "",
  possession: "",
  passes: "",
  shots: "",
  shotsOnTarget: "",
  corners: "",
};

const AddMatch = () => {
  const navigate = useNavigate();

  const [matchId, setMatchId] = useState("");
  const [date, setDate] = useState("");
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");

  const [stats, setStats] = useState({
    teamA: { ...initialStats },
    teamB: { ...initialStats },
  });

  const handleChange = (team, field, value) => {
    setStats((prev) => ({
      ...prev,
      [team]: {
        ...prev[team],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (teamA.trim() === "" || teamB.trim() === "") {
      alert("Both team names are required.");
      return;
    }

    if (teamA === teamB) {
      alert("Team A and Team B cannot be the same.");
      return;
    }

    const parsedStats = {
      [teamA]: Object.fromEntries(
        Object.entries(stats.teamA).map(([k, v]) => [k, isNaN(v) ? v : Number(v)])
      ),
      [teamB]: Object.fromEntries(
        Object.entries(stats.teamB).map(([k, v]) => [k, isNaN(v) ? v : Number(v)])
      ),
    };

    const matchData = {
      matchId,
      date,
      stats: parsedStats,
    };

    try {
      const response = await addMatch(matchData);
      console.log("Match submitted successfully:", response);
      navigate("/");
    } catch (err) {
      console.error("Error submitting match:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Add New Match
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            placeholder="Match ID"
            value={matchId}
            onChange={(e) => setMatchId(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-blue-500"
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-blue-500"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Team A */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Team A</h3>
            <input
              type="text"
              placeholder="Team A Name"
              value={teamA}
              onChange={(e) => setTeamA(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-4"
              required
            />
            {Object.keys(initialStats).map((field) => (
              <input
                key={`teamA-${field}`}
                type="number"
                placeholder={field}
                value={stats.teamA[field]}
                onChange={(e) => handleChange("teamA", field, e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-3"
                required
              />
            ))}
          </div>

          {/* Team B */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Team B</h3>
            <input
              type="text"
              placeholder="Team B Name"
              value={teamB}
              onChange={(e) => setTeamB(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-4"
              required
            />
            {Object.keys(initialStats).map((field) => (
              <input
                key={`teamB-${field}`}
                type="number"
                placeholder={field}
                value={stats.teamB[field]}
                onChange={(e) => handleChange("teamB", field, e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-3"
                required
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200"
          >
            Submit Match
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMatch;
