package no.kristiania.munchMoment.entities.journey;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Journey {
    private final List<JourneyStop> stops = new ArrayList<>();

    public List<JourneyStop>  getStops() {
        return stops;
    }

    public void addStop(int id, int exhibitionId) {
        stops.add(new JourneyStop(id, exhibitionId));
    }


}
