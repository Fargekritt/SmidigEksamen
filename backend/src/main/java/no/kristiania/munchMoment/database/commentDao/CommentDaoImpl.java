package no.kristiania.munchMoment.database.commentDao;

import no.kristiania.munchMoment.database.AbstractJpaDAO;
import no.kristiania.munchMoment.entities.Comment;

public class CommentDaoImpl extends AbstractJpaDAO<Comment> implements CommentDao {

    public CommentDaoImpl(){
        super();
        setClazz(Comment.class);
    }
}
