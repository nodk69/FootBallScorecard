import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMatchStats } from "../services/api";
import Header from "../components/Header";

const MatchDetails = () => {
  const { matchId } = useParams();
  const [matchStats, setMatchStats] = useState(null);

  useEffect(() => {
    getMatchStats(matchId).then(setMatchStats);
  }, [matchId]);

  if (!matchStats)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading match details...
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Match Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">
            Match Details
          </h1>
          <p className="text-lg text-gray-600">
            Match : <span className="font-medium">{matchStats.matchId}</span>
          </p>
          <p className="text-gray-500">Date: {matchStats.date}</p>
        </div>

        {/* Team Stats */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(matchStats.stats).map(([team, stats]) => (
            <div
              key={team}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {team}
              </h2>
              <ul className="divide-y divide-gray-200">
                {Object.entries(stats).map(([key, value]) => (
                  <li key={key} className="py-2 flex justify-between">
                    <span className="text-gray-600 capitalize">{key}</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
