package no.kristiania.munchMoment.journey;

import java.util.ArrayList;
import java.util.List;

public class Journey {


    private List<Integer> stops;

    public Journey(Long i) {
        this.id = i;
        stops = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Integer> getStops() {
        return stops;
    }

    public void setStops(List<Integer> stops) {
        this.stops = stops;
    }

    public void addStop(int id) {
        stops.add(id);
    }

    private Long id;
    // something more here


}
