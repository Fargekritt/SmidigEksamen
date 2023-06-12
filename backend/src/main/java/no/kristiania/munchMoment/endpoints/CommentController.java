package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.database.CommentRepository;
import no.kristiania.munchMoment.dto.CommentDto;
import no.kristiania.munchMoment.entities.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

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
    public ResponseEntity<String> createComment(@RequestBody CommentDto commentDto) {
        Comment comment = new Comment();
        if (commentDto.text().equals("")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        comment.setText(commentDto.text());
        comment.setDate(LocalDateTime.now().toString());
        commentRepository.save(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body("Comment has been created");

    }

}
