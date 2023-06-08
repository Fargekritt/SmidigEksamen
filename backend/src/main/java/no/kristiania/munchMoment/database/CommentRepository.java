package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Comment;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface CommentRepository extends ListCrudRepository<Comment,Long> {


    List<Comment> findCommentsByPainting_Id(long id);
}
