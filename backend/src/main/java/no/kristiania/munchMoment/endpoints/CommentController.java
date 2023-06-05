package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.journey.Comment;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/comment")
public class CommentController {

    // This is used to handle a GET request on /api/comment/{id}
    @GetMapping("/{id}")
    public Comment getComment(@PathVariable Long id) {
        return new Comment(2L); // test value
    }
   /* Need a method to create comments
    @PostMapping("/new")
    public Comment createComment(@RequestBody)
        */
}
