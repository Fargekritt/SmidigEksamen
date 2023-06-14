package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.database.CommentRepository;
import no.kristiania.munchMoment.database.PaintingRepository;
import no.kristiania.munchMoment.dto.CommentDto;
import no.kristiania.munchMoment.entities.Comment;
import no.kristiania.munchMoment.entities.Painting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    PaintingRepository paintingRepository;

    // GET request for getting a comment
    @GetMapping("/{id}")
    public ResponseEntity<Comment> getComment(@PathVariable long id) {
        Optional<Comment> optionalComment = commentRepository.findById(id);
        return optionalComment
                .map(comment -> ResponseEntity.status(HttpStatus.OK).body(comment))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // POST request for posting a comment
    @PostMapping("/new")
    public ResponseEntity<Comment> createComment(@RequestBody CommentDto commentDto) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        Comment comment = new Comment();
        if (commentDto.text().equals("")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        Optional<Painting> optionalPainting = paintingRepository.findById(commentDto.paintingId());
        if (optionalPainting.isPresent()) {
            comment.setPainting(optionalPainting.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        comment.setText(commentDto.text());
        comment.setDate(LocalDateTime.now().format(formatter));
        comment.setNickname("Jens Jensen");
        comment.setLikes(0);
        commentRepository.save(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(comment);
    }
}
