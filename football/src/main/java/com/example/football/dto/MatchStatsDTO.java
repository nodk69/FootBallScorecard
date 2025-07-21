package com.example.football.dto;

import java.util.Map;

public class MatchStatsDTO {

    private String matchId;
    private String date;
    private Map<String, TeamStatsDTO> stats;

    public MatchStatsDTO() {}

    public MatchStatsDTO(String matchId, String date, Map<String, TeamStatsDTO> stats) {
        this.matchId = matchId;
        this.date = date;
        this.stats = stats;
    }

    public String getMatchId() {
        return matchId;
    }

    public String getDate() {
        return date;
    }

    public Map<String, TeamStatsDTO> getStats() {
        return stats;
    }

    public void setMatchId(String matchId) {
        this.matchId = matchId;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setStats(Map<String, TeamStatsDTO> stats) {
        this.stats = stats;
    }
}
