package no.kristiania.munchMoment.journey;

import java.util.ArrayList;
import java.util.List;

public class Journey {
    private List<Integer> stops;

    // Constructor.
    public Journey() {
        stops = new ArrayList<>();
    }

    //Getter/Setters.

    public List<Integer> getStops() {
        return stops;
    }

    public void setStops(List<Integer> stops) {
        this.stops = stops;
    }

    public void addStop(int id) {
        stops.add(id);
    }


}
