package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Comment;
import no.kristiania.munchMoment.entities.Exhibition;

public class ExhibitionDaoImpl extends AbstractJpaDAO<Exhibition> implements ExhibitionDao {
    public ExhibitionDaoImpl() {
        super();
        setClazz(Exhibition.class);
    }
}
