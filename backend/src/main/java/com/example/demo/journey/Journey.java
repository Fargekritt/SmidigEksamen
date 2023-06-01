package com.example.demo.journey;

import java.util.List;

public class Journey {

    private List<Integer> stops;
    public Journey(Long i) {
        this.id = i;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void addStop(int id){
        stops.add(id);
    }

    private Long id;
    // something more here
    

}
