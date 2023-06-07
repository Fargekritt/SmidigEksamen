package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Comment;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends ListCrudRepository<Comment,Long> {
}
