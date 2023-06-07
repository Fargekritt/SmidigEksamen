package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Painting;
import org.springframework.stereotype.Repository;

@Repository
public class PaintingDaoImpl extends AbstractJpaDAO<Painting> implements PaintingDao {

public PaintingDaoImpl(){
    super();
    setClazz(Painting.class);
}

}
