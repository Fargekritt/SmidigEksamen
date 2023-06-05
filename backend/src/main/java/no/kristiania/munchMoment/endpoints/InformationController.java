package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.journey.Information;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/information")
public class InformationController {

        // This is used to handle a GET request on /api/information/{id}
        @GetMapping("/{id}")
        public Information getInformation(@PathVariable Long id) {
            return new Information(2L); // test value
        }

}
