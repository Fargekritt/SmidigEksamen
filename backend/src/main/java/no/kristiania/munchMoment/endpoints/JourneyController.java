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
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/journey") //map web requests onto specific handler classes and/or handler methods.
public class JourneyController {

    private static final Logger logger = LoggerFactory.getLogger(JourneyController.class);


    // endpoint for creating a new journey
    @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
    public Journey createJourney(@RequestBody JourneyDto journeyDto) {
        // create and return the new journey
        JourneyBuilder builder = new JourneyBuilder();
        builder.setFamiliarity(journeyDto.familiarity());
        builder.setThemes(List.of(journeyDto.themes()));
        builder.setInteractive(journeyDto.interactive());
        builder.setTime(journeyDto.time());
        logger.info("Creating journey");
        if(logger.isDebugEnabled()){
            logger.debug("Familiarity: " + journeyDto.familiarity());
            logger.debug("Themes: " + Arrays.toString(journeyDto.themes()));
            logger.debug("Interactive: " + journeyDto.interactive());
            logger.debug("Time: " + journeyDto.time());
        }
        return builder.build();
    }
}
