package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Artist;
import org.springframework.stereotype.Repository;


public class ArtistDaoImpl extends AbstractJpaDAO<Artist> implements ArtistDao{

    public ArtistDaoImpl(){
        super();
        setClazz(Artist.class);
    }

}
