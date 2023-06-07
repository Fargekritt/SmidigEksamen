package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Artist;

public class ArtistDaoImpl extends AbstractJpaDAO<Artist> implements ArtistDao {

    public ArtistDaoImpl(){
        super();
        setClazz(Artist.class);
    }

}
