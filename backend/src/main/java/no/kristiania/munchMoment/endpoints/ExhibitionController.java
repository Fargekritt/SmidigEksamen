package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.entities.Exhibition;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/exhibition")
public class ExhibitionController {

    @GetMapping("/{id}")
    public Exhibition getExhibition(@PathVariable long id) {
        return new Exhibition();
    }

    @GetMapping("/{id}/all")
    public Exhibition getAllInfo(@PathVariable long id){
        Exhibition exhibition = new Exhibition();
        exhibition.getExhibitionName();
        exhibition.getFloor();
        return exhibition;
    }
}
