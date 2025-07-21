package com.example.football.service;

import com.example.football.dto.MatchStatsDTO;

public interface MatchStatsService {

    MatchStatsDTO getMatchStatsByMatchId(String matchId);
}
