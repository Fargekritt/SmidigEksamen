package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.database.CommentRepository;
import no.kristiania.munchMoment.database.PaintingRepository;
import no.kristiania.munchMoment.entities.Comment;
import no.kristiania.munchMoment.entities.Painting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/painting")
public class PaintingController {

    @Autowired
    PaintingRepository paintingRepository;

    @Autowired
    CommentRepository commentRepository;

    // GET request for getting the painting id
    @GetMapping("/{id}")
    public ResponseEntity<Painting> getPainting(@PathVariable long id) {
        Optional<Painting> optionalPainting = paintingRepository.findById(id);
        return optionalPainting
                .map(painting -> ResponseEntity.status(HttpStatus.OK).body(painting))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // GET request for getting all information regarding a painting
    @GetMapping("/")
    public  ResponseEntity<List<Painting>> getAllInfo() {
        List<Painting> paintings = paintingRepository.findAll();
        if(paintings.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(paintings);
    }

    // GET request for getting the painting name
    @GetMapping("/{id}/name")
    public ResponseEntity<String> getPaintingName(@PathVariable long id) {
        Optional<Painting> optionalPainting = paintingRepository.findById(id);
        return optionalPainting
                .map(painting -> ResponseEntity.status(HttpStatus.OK).body(painting.getPaintingName()))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // GET request for getting the date created
    @GetMapping("/{id}/date")
    public ResponseEntity<String> getDateCreated(@PathVariable long id) {
        Optional<Painting> optionalPainting = paintingRepository.findById(id);
        return optionalPainting
                .map(painting -> ResponseEntity.status(HttpStatus.OK).body(painting.getDateCreated()))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // GET request for getting the image path
    @GetMapping("/{id}/path")
    public ResponseEntity<String> getImagePath(@PathVariable long id) {
        Optional<Painting> optionalPainting = paintingRepository.findById(id);
        return optionalPainting
                .map(painting -> ResponseEntity.status(HttpStatus.OK).body(painting.getImagePath()))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // GET request for getting the image description
    @GetMapping("/{id}/description")
    public ResponseEntity<String> getDescription(@PathVariable long id) {
        Optional<Painting> optionalPainting = paintingRepository.findById(id);
        return optionalPainting
                .map(painting -> ResponseEntity.status(HttpStatus.OK).body(painting.getDescription()))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/{id}/comments")
    public  ResponseEntity<List<Comment>> getAllComments(@PathVariable long id) {
        List<Comment> comments = commentRepository.findCommentsByPainting_Id(id);
        if(comments.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(comments);
    }
}
