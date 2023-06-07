package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Artist;
import no.kristiania.munchMoment.entities.Painting;

import java.util.List;

public interface IArtistDao {
    Artist findOne(long paintingId);

    List<Artist> findAll();

    void create(Artist artist);

    Artist update(Artist artist);

    void delete(Artist artist);

    void deleteById(long artistId);
}
