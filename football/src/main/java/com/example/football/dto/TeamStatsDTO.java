package com.example.football.dto;

public class TeamStatsDTO {
    private String goals;
    private String possession;
    private String passes;
    private String shots;
    private String shotsOnTarget;
    private String corners;

    public TeamStatsDTO() {}

    public TeamStatsDTO(String goals, String possession, String passes,
                        String shots, String shotsOnTarget, String corners) {
        this.goals = goals;
        this.possession = possession;
        this.passes = passes;
        this.shots = shots;
        this.shotsOnTarget = shotsOnTarget;
        this.corners = corners;
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
}
