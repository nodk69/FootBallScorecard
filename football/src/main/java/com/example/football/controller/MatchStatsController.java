package com.example.football.controller;

import com.example.football.dto.MatchStatsDTO;
import com.example.football.entities.Match;
import com.example.football.entities.TeamStats;
import com.example.football.repository.MatchRepository;
import com.example.football.service.MatchStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping
public class MatchStatsController {

    @Autowired
    private MatchStatsService matchStatsService;

    @Autowired
    private MatchRepository matchRepository;

    @GetMapping("/getMatchStats")
    public MatchStatsDTO getMatchStats(@RequestParam String matchId) {
        return matchStatsService.getMatchStatsByMatchId(matchId);
    }

    @GetMapping
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    @PostMapping("/addMatch")
    public Match addMatch(@RequestBody MatchStatsDTO dto) {
        Match match = new Match();
        match.setMatchId(dto.getMatchId());
        match.setDate(dto.getDate());

        List<TeamStats> teamStatsList = new ArrayList<>();
        dto.getStats().forEach((teamName, statsDTO) -> {
            TeamStats teamStats = new TeamStats();
            teamStats.setTeamName(teamName);
            teamStats.setGoals(statsDTO.getGoals());
            teamStats.setPossession(statsDTO.getPossession());
            teamStats.setPasses(statsDTO.getPasses());
            teamStats.setShots(statsDTO.getShots());
            teamStats.setShotsOnTarget(statsDTO.getShotsOnTarget());
            teamStats.setCorners(statsDTO.getCorners());
            teamStats.setMatch(match);
            teamStatsList.add(teamStats);
        });

        match.setTeamStats(teamStatsList);
        return matchRepository.save(match);
    }

}
