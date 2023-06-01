package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.dto.JourneyDto;
import no.kristiania.munchMoment.journey.Journey;
import no.kristiania.munchMoment.journey.JourneyBuilder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
    public Journey createJourney(@RequestBody JourneyDto journeyDto){
        // create and return the new journey
        JourneyBuilder builder = new JourneyBuilder();
        builder.setFamiliarity(journeyDto.getFamiliarity());
        builder.setThemes(List.of(journeyDto.getThemes()));
        return null;
    }
}
