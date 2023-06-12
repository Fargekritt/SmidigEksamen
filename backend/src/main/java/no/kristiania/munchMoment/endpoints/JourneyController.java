package no.kristiania.munchMoment.endpoints;


import no.kristiania.munchMoment.dto.JourneyDto;
import no.kristiania.munchMoment.entities.journey.Journey;
import no.kristiania.munchMoment.entities.journey.JourneyBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/journey") //map web requests onto specific handler classes and/or handler methods.
public class JourneyController {

    private static final Logger logger = LoggerFactory.getLogger(JourneyController.class);


    // endpoint for creating a new journey
    @PostMapping("/new") // This is used to handle a POST request on /api/journey
    public Journey createJourney(@RequestBody JourneyDto journeyDto) {
        // create and return the new journey
        JourneyBuilder builder = new JourneyBuilder();
        builder.setFamiliarity(journeyDto.familiarity());
        builder.setThemes(List.of(journeyDto.themes()));
        builder.setInteractive(journeyDto.interactive());
        builder.setTime(journeyDto.time());
        logger.info("Creating journey");
        logger.debug("Familiarity: " + journeyDto.familiarity());
        logger.debug("Themes: " + Arrays.toString(journeyDto.themes()));
        logger.debug("Interactive: " + journeyDto.interactive());
        logger.debug("Time: " + journeyDto.time());
        return builder.build();
    }
}
