package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.journey.Painting;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/paining")
public class PaintingController {

    // This is used to handle a GET request on /api/painting/{id}
    @GetMapping("/{id}")
    public Painting getPainting(@PathVariable Long id) {
        return new Painting(2L); // test value
    }
    /*// This is used to handle a POST request on /api/painting/{id}
    @PostMapping("/new") // new?
    Do we need a POST ?
    */
}
