package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Painting;

import java.util.List;

public interface PaintingDao {


    Painting findOne(long paintingId);

    List<Painting> findAll();

    void create(Painting painting);

    Painting update(Painting painting);

    void delete(Painting painting);

    void deleteById(long paintingId);

}
