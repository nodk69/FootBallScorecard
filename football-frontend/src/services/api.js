const BASE_URL = "http://localhost:8080";

export const getAllMatches = async () => {
  const res = await fetch(`${BASE_URL}`);
  return await res.json();
};

export const getMatchStats = async (matchId) => {
  const res = await fetch(`${BASE_URL}/getMatchStats?matchId=${matchId}`);
  return await res.json();
};

export const addMatch = async (matchData) => {
  const res = await fetch(`${BASE_URL}/addMatch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(matchData),
  });
  return await res.json();
};
