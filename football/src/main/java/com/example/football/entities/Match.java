package com.example.football.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String matchId;
    private String date;

    @JsonIgnore
    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL)
    private List<TeamStats> teamStats;

    public Match() {}

    public Match(Long id, String matchId, String date, List<TeamStats> teamStats) {
        this.id = id;
        this.matchId = matchId;
        this.date = date;
        this.teamStats = teamStats;
    }

    public Long getId() {
        return id;
    }

    public String getMatchId() {
        return matchId;
    }

    public String getDate() {
        return date;
    }

    public List<TeamStats> getTeamStats() {
        return teamStats;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setMatchId(String matchId) {
        this.matchId = matchId;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTeamStats(List<TeamStats> teamStats) {
        this.teamStats = teamStats;
    }
}
