package no.kristiania.munchMoment.database.exhibitionDao;

import no.kristiania.munchMoment.database.AbstractJpaDAO;
import no.kristiania.munchMoment.entities.Exhibition;

public class ExhibitionDaoImpl extends AbstractJpaDAO<Exhibition> implements ExhibitionDao {
    public ExhibitionDaoImpl() {
        super();
        setClazz(Exhibition.class);
    }
}
