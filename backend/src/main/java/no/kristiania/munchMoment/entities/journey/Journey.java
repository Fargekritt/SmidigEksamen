package no.kristiania.munchMoment.entities.journey;

import java.util.HashMap;
import java.util.Map;

public class Journey {
    private final Map<Integer, Integer> stops;

    // Constructor.
    public Journey() {
        stops = new HashMap<>();
    }

    //Getter/Setters.

    public Map<Integer, Integer> getStops() {
        return stops;
    }

    public void addStop(int id, int exhibitionId) {
        stops.put(id, exhibitionId);
    }


}
