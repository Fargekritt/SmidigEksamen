package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.dto.CommentDto;
import no.kristiania.munchMoment.entities.Comment;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/comment")
public class CommentController {

    // This is used to handle a GET request on /api/comment/{id}
    @GetMapping("/{id}")
    public Comment getComment(@PathVariable Long id) {
        return new Comment();
    }

    // This is used to handle a POST request on /api/comment/new
    @PostMapping("/new")
    public Comment createComment(@RequestBody CommentDto commentDto){
        Comment comment = new Comment();
        comment.setText(commentDto.comment_text());
        return comment;
    }

}
