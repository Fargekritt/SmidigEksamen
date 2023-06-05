package no.kristiania.munchMoment.journey;

import java.util.List;

public class JourneyBuilder {

    private int time;

    private int familiarity;

    private boolean interactive;

    private List<String> themes;

    ///////////////////////////////// Getters/Setters. /////////////////////////////////

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


    ///////////////////////////////// Methods /////////////////////////////////

    /**
     * Builds a journey with the correct stops determined by the field values.
     * Add two stops to the journey for each field differentiates on witch two by a certain value.
     * @return Journey
     */
    public Journey build() {
        Journey journey = new Journey();

        // 0-180
        if (time < 90) {
            journey.addStop(1);
            journey.addStop(2);
        } else {
            journey.addStop(3);
            journey.addStop(4);
        }

        // 0-4
        if (familiarity < 2) {
            journey.addStop(5);
            journey.addStop(6);
        } else {
            journey.addStop(7);
            journey.addStop(8);
        }

        // Landscape , Interior, Portrait, Place, Nature, Love, Time, Family, Anxiety,Jealousy
        if (themes.contains("Landscape") || themes.contains("Interior") || themes.contains("Portrait") || themes.contains("Place") || themes.contains("Nature")) {
            journey.addStop(9);
            journey.addStop(10);
        } else {
            journey.addStop(11);
            journey.addStop(12);
        }

        if (interactive) {
            journey.addStop(13);
            journey.addStop(14);
        } else {
            journey.addStop(15);
            journey.addStop(16);
        }

        return journey;
    }
}
