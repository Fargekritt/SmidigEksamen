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
     * Add stops to the journey for each field, differentiates on witch and quantity by a certain field value.
     * @return Journey
     */
    public Journey build() {
        Journey journey = new Journey();

        // 0-180
        if (time < 90) {
            journey.addStop(1,4);
        } else {
            journey.addStop(2,4);
            journey.addStop(3,4);
            journey.addStop(4,3);
            journey.addStop(17,0);
        }

        // 0-4
        if (familiarity < 2) {
            journey.addStop(5,3);
            journey.addStop(6,3);
        } else {
            journey.addStop(7,3);
            journey.addStop(8,3);
        }

        // Landscape , Interior, Portrait, Place, Nature, Love, Time, Family, Anxiety,Jealousy
        if (themes.contains("Landscape") || themes.contains("Interior") || themes.contains("Portrait") || themes.contains("Place") || themes.contains("Nature")) {
            journey.addStop(9,6);
            journey.addStop(10,3);
        } else {
            journey.addStop(11,0);
            journey.addStop(12,0);
        }

        if (interactive) {
            journey.addStop(13,0);
            journey.addStop(14,0);
        } else {
            journey.addStop(15,0);
            journey.addStop(16,0);
        }

        return journey;
    }
}
