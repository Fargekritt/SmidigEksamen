package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.entities.Painting;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/painting")
public class PaintingController {

    // This is used to handle a GET request on /api/painting/{id}
    @GetMapping("/{id}")
    public Painting getPainting(@PathVariable long id) {
        return new Painting(2L); // test value
    }

    @GetMapping("/information")
    public Painting getDescription(@PathVariable long id){
        return new Painting(3L); // test value
    }
}
