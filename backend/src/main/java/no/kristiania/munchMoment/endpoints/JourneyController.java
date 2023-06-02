package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.Main;
import no.kristiania.munchMoment.dto.JourneyDto;
import no.kristiania.munchMoment.journey.Journey;
import no.kristiania.munchMoment.journey.JourneyBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/journey") //map web requests onto specific handler classes and/or handler methods.
public class JourneyController {

    private static final Logger logger = LoggerFactory.getLogger(JourneyController.class);

    // endpoint for getting a journey based on id
    @GetMapping("/{id}")  // This is used to handle a GET request on /api/journey/{id}
    public Journey getJourney(@PathVariable Long id) {
        // fetch and return journey based on id
        logger.info("Get journey ID:" + id);
        return new Journey(10L);
    }

    // endpoint for creating a new journey
    @PostMapping("/new") // This is used to handle a POST request on /api/journey
    public Journey createJourney(@RequestBody JourneyDto journeyDto) {
        // create and return the new journey
        JourneyBuilder builder = new JourneyBuilder();
        builder.setFamiliarity(journeyDto.getFamiliarity());
        builder.setThemes(List.of(journeyDto.getThemes()));
        builder.setInteractive(journeyDto.isInteractive());
        builder.setTime(journeyDto.getTime());
        logger.info("Creating journey");
        logger.debug("Familiarty: " + journeyDto.getFamiliarity());
        logger.debug("Themes: " + Arrays.toString(journeyDto.getThemes()));
        logger.debug("Interactive: " + journeyDto.isInteractive());
        logger.debug("Time: " + journeyDto.getTime());
        return builder.build();
    }
}
