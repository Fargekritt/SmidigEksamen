package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.database.ArtistRepository;
import no.kristiania.munchMoment.database.ExhibitionRepository;
import no.kristiania.munchMoment.entities.Exhibition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/exhibition")
public class ExhibitionController {

    @Autowired
    ExhibitionRepository exhibitionRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Exhibition> getExhibition(@PathVariable long id) {
        Optional<Exhibition> optionalExhibition = exhibitionRepository.findById(id);

        return optionalExhibition
                .map(exhibition -> ResponseEntity.status(HttpStatus.OK).body(exhibition))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/")
    public ResponseEntity<List<Exhibition>> getAll() {
        List<Exhibition> exhibitionList = exhibitionRepository.findAll();

        if (exhibitionList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(exhibitionList);
    }
}
