package no.kristiania.munchMoment.database.artistDao;

import no.kristiania.munchMoment.entities.Artist;

import java.util.List;

public interface ArtistDao {
    Artist findOne(long paintingId);

    List<Artist> findAll();

    void create(Artist artist);

    Artist update(Artist artist);

    void delete(Artist artist);

    void deleteById(long artistId);
}
