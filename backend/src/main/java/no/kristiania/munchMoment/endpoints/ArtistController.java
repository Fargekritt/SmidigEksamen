package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.entities.Painting;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/artist")
public class ArtistController {

    @GetMapping("/{id}")
    public Artist getArtist(@PathVariable long id) {
        return new Artist();
    }


}
