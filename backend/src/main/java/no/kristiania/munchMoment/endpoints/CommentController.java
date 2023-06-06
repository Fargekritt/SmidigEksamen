package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.dto.CommentDto;
import no.kristiania.munchMoment.entities.Comment;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/comment")
public class CommentController {

    // GET request for getting a comment
    @GetMapping("/{id}")
    public Comment getComment(@PathVariable long id) {
        return new Comment();
    }

    // POST request for posting a comment
    @PostMapping("/new")
    public Comment createComment(@RequestBody CommentDto commentDto){
        Comment comment = new Comment();
        comment.setText(commentDto.comment_text());
        return comment;
    }

}
