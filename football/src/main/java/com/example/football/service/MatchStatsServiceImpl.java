package com.example.football.service;

import com.example.football.dto.MatchStatsDTO;
import com.example.football.dto.TeamStatsDTO;
import com.example.football.entities.Match;
import com.example.football.entities.TeamStats;
import com.example.football.repository.MatchRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class MatchStatsServiceImpl implements MatchStatsService {

    private final MatchRepository matchRepository;

    public MatchStatsServiceImpl(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    @Override
    public MatchStatsDTO getMatchStatsByMatchId(String matchId) {
        Match match = matchRepository.findByMatchId(matchId)
                .orElseThrow(() -> new RuntimeException("Match not found"));

        MatchStatsDTO dto = new MatchStatsDTO();
        dto.setMatchId(match.getMatchId());
        dto.setDate(match.getDate());

        Map<String, TeamStatsDTO> statsMap = new HashMap<>();
        for (TeamStats team : match.getTeamStats()) {
            TeamStatsDTO teamDto = new TeamStatsDTO(
                    team.getGoals(),
                    team.getPossession(),
                    team.getPasses(),
                    team.getShots(),
                    team.getShotsOnTarget(),
                    team.getCorners()
            );
            statsMap.put(team.getTeamName(), teamDto);
        }

        dto.setStats(statsMap);
        return dto;
    }
}
