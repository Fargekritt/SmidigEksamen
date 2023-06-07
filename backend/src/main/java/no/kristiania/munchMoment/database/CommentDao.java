package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Comment;

import java.util.List;

public interface CommentDao {

    Comment findOne(long commentId);

    List<Comment> findAll();

    void create(Comment comment);

    Comment update(Comment comment);

    void delete(Comment comment);

    void deleteById(long commentId);
}
