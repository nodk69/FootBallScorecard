import React, { useEffect, useState } from "react";
import { getAllMatches } from "../services/api";
import MatchCard from "../components/MatchCard";
import Header from "../components/Header";

const Home = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getAllMatches().then((data) => {
      const sortedMatches = [...data].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setMatches(sortedMatches);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto py-14 px-6">
        
        <section className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            🏟 Completed Matches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into recent football matches and view detailed team statistics,
            performance breakdowns, and more.
          </p>
        </section>

        <div className="flex flex-col items-center space-y-8">
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <div key={match.id} className="w-full flex justify-center">
                <MatchCard match={match} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">No matches found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
