package no.kristiania.munchMoment.database.artistDao;

import no.kristiania.munchMoment.database.AbstractJpaDAO;
import no.kristiania.munchMoment.entities.Artist;

public class ArtistDaoImpl extends AbstractJpaDAO<Artist> implements ArtistDao {

    public ArtistDaoImpl(){
        super();
        setClazz(Artist.class);
    }

}
