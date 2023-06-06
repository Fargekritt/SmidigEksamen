package no.kristiania.munchMoment.endpoints;
import no.kristiania.munchMoment.entities.Painting;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/painting")
public class PaintingController {

    // GET request for getting the painting id
    @GetMapping("/{id}")
    public Painting getPainting(@PathVariable long id) {
        return new Painting();
    }

    // GET request for getting all information regarding a painting
    @GetMapping("/{id}/all")
    public Painting getAllInfo(@PathVariable long id){
        Painting painting = new Painting();
        painting.getPaintingName();
        painting.getDateCreated();
        painting.getImagePath();
        painting.getDescription();
        return painting;
    }

    // GET request for getting the painting name
    @GetMapping("/{id}/name")
    public String getPaintingName(@PathVariable long id){
        return new Painting().getPaintingName();
    }

    // GET request for getting the date created
    @GetMapping("/{id}/date")
    public String getDateCreated(@PathVariable long id){
        return new Painting().getDateCreated();
    }

    // GET request for getting the image path
    @GetMapping("/{id}/path")
    public String getImagePath(@PathVariable long id){
        return new Painting().getImagePath();
    }

    // GET request for getting the image description
    @GetMapping("/{id}/description")
    public String getDescription(@PathVariable long id){
        return new Painting().getDescription();
    }
}
