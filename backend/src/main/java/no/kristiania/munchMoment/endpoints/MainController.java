package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.database.ArtistRepository;
import no.kristiania.munchMoment.entities.Artist;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller // This means that this class is a Controller
@RequestMapping(path = "/demo")
public class MainController {
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);
    @Autowired
    private ArtistRepository userRepository;

    @GetMapping(path = "/add/{name}") // Map ONLY POST Requests
    public @ResponseBody String addNewUser(@PathVariable String name) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        List<Artist> artists = userRepository.findArtistsByArtistName(name);
//        artist.setArtistName(name);
        userRepository.deleteById(1);
        logger.info(artists.toString());
//        userRepository.save(artist);
        return "Found";
    }

}
