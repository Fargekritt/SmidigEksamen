package com.example.demo.endpoints;

import com.example.demo.items.Journey;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/journey") //map web requests onto specific handler classes and/or handler methods.
public class JourneyController {

    // endpoint for getting a journey based on id
    @GetMapping("/{id}")  // This is used to handle a GET request on /api/journey/{id}
    public Journey getJourney(@PathVariable Long id){
        // fetch and return journey based on id
        return new Journey(10L);
    }
    // endpoint for creating a new journey
    @PostMapping // This is used to handle a POST request on /api/journey
    public Journey createJourney(@RequestBody Journey journey){
        // create and return the new journey
        return null;
    }
}
