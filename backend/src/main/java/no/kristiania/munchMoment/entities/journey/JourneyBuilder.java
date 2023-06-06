package no.kristiania.munchMoment.entities.journey;

import java.util.List;

public class JourneyBuilder {

    private int time;

    private int familiarity;

    private boolean interactive;

    private List<String> themes;

    // Getters/Setters.

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


    // Methods
    public Journey build(){
        Journey journey = new Journey(1L);
        if(interactive){
            journey.addStop(10);
        }

        if(themes.contains("Landscape")){
            journey.addStop(2);
        }

        journey.addStop(1);
        journey.addStop(3);
        journey.addStop(5);
        return journey;
    }
}
