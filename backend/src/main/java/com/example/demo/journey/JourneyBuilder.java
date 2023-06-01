package com.example.demo.journey;

import java.util.List;

public class JourneyBuilder {

    private int time;

    private int familiarity;

    private boolean interactive;
    private List<String> themes;

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getFamiliarity() {
        return familiarity;
    }

    public void setFamiliarity(int familiarity) {
        this.familiarity = familiarity;
    }

    public boolean isInteractive() {
        return interactive;
    }

    public void setInteractive(boolean interactive) {
        this.interactive = interactive;
    }

    public List<String> getThemes() {
        return themes;
    }

    public void setThemes(List<String> themes) {
        this.themes = themes;
    }

    public Journey build() {
        Journey journey = new Journey(1L);
        if (interactive) {
            journey.addStop(10);
        }

        if (themes.contains("Landscape")) {
            journey.addStop(2);
        }

        if (familiarity > 10) {
            journey.addStop(1);
            journey.addStop(3);
            journey.addStop(5);

        } else {
            journey.addStop(1);
            journey.addStop(4);
            journey.addStop(8);

        }

        if (time > 100) {
            journey.addStop(40);
            journey.addStop(45);
            journey.addStop(55);
        }


        return journey;
    }
}
