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
// Open up for port 3000 to connect.
@CrossOrigin(origins = "http://localhost:3000")
// Map web requests to JourneyController class.
@RequestMapping("/api/journey")
public class JourneyController {
    private static final Logger logger = LoggerFactory.getLogger(JourneyController.class);

    // Endpoint for getting a journey based on id.
    @GetMapping("/{id}")
    public Journey getJourney(@PathVariable Long id) {
        logger.info("Get journey ID:" + id);
        return new Journey(10L);
    }

    // Endpoint for creating a new journey.
    @PostMapping("/new")
    public Journey createJourney(@RequestBody JourneyDto journeyDto) {
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
