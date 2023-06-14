package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.database.ArtistRepository;
import no.kristiania.munchMoment.entities.Artist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/artist")
public class ArtistController {

    @Autowired
    ArtistRepository artistRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Artist> getArtist(@PathVariable long id) {
        Optional<Artist> optionalArtist = artistRepository.findById(id);
        return optionalArtist
                .map(artist -> ResponseEntity.status(HttpStatus.OK).body(artist))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());

    }


}
