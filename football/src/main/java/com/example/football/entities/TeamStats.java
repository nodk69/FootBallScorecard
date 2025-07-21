package com.example.football.entities;

import jakarta.persistence.*;

@Entity
public class TeamStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String teamName;
    private String goals;
    private String possession;
    private String passes;
    private String shots;
    private String shotsOnTarget;
    private String corners;

    @ManyToOne
    @JoinColumn(name = "match_id")
    private Match match;

    public TeamStats() {}

    public TeamStats(Long id, String teamName, String goals, String possession,
                     String passes, String shots, String shotsOnTarget,
                     String corners, Match match) {
        this.id = id;
        this.teamName = teamName;
        this.goals = goals;
        this.possession = possession;
        this.passes = passes;
        this.shots = shots;
        this.shotsOnTarget = shotsOnTarget;
        this.corners = corners;
        this.match = match;
    }

    public Long getId() {
        return id;
    }

    public String getTeamName() {
        return teamName;
    }

    public String getGoals() {
        return goals;
    }

    public String getPossession() {
        return possession;
    }

    public String getPasses() {
        return passes;
    }

    public String getShots() {
        return shots;
    }

    public String getShotsOnTarget() {
        return shotsOnTarget;
    }

    public String getCorners() {
        return corners;
    }

    public Match getMatch() {
        return match;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public void setGoals(String goals) {
        this.goals = goals;
    }

    public void setPossession(String possession) {
        this.possession = possession;
    }

    public void setPasses(String passes) {
        this.passes = passes;
    }

    public void setShots(String shots) {
        this.shots = shots;
    }

    public void setShotsOnTarget(String shotsOnTarget) {
        this.shotsOnTarget = shotsOnTarget;
    }

    public void setCorners(String corners) {
        this.corners = corners;
    }

    public void setMatch(Match match) {
        this.match = match;
    }
}
