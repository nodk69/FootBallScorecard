import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const MatchCard = ({ match }) => {
  const navigate = useNavigate();
  console.log("Match object:", match);

  const handleClick = () => {
    navigate(`/match/${match.matchId}`);
  };

  // Extract teams
  const statEntries = Object.entries(match?.stats || {});
  const [teamAKey, teamA] = statEntries[0] || [];
  const [teamBKey, teamB] = statEntries[1] || [];

  console.log("teamA key",teamAKey);
  console.log("team B key",teamBKey);
  
  

  return (
    <div
      onClick={handleClick}
      className="w-[80%] bg-gradient-to-r from-white via-blue-50 to-white hover:shadow-2xl shadow-md transition-all duration-300 rounded-2xl p-6 cursor-pointer border border-blue-200 group"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-blue-600 font-medium">
          Match: {match.matchId}
        </div>
        <div className="text-xs text-gray-500 font-medium">{match.date}</div>
      </div>

      {/* Match Info */}
      <div className="flex items-center justify-between">
        {/* Team A */}
        <div className="flex items-center space-x-3 w-1/3 justify-end">
          <img
            src="/team-a-logo.png"
            alt={teamAKey || "Team A"}
            className="w-12 h-12 rounded-full bg-gray-200 object-cover shadow"
          />
          <h3 className="text-lg font-semibold text-gray-800 text-right">
            {teamAKey || "Team A"}
          </h3>
        </div>

        {/* Score */}
        <div className="text-4xl font-bold text-blue-700 w-1/3 text-center tracking-wide">
          {teamA?.goals ?? "-"} <span className="text-gray-600">:</span>{" "}
          {teamB?.goals ?? "-"}
        </div>

        {/* Team B */}
        <div className="flex items-center space-x-3 w-1/3 justify-start">
          <h3 className="text-lg font-semibold text-gray-800">
            {teamBKey || "Team B"}
          </h3>
          <img
            src="/team-b-logo.png"
            alt={teamBKey || "Team B"}
            className="w-12 h-12 rounded-full bg-gray-200 object-cover shadow"
          />
        </div>
      </div>

      <div className="mt-4 text-right">
        <span className="text-blue-600 font-medium text-sm inline-flex items-center group-hover:underline">
          View Stats <FaChevronRight className="ml-1 text-xs" />
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
