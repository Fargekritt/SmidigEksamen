package no.kristiania.munchMoment.database.exhibitionDao;

import no.kristiania.munchMoment.entities.Exhibition;


import java.util.List;

public interface ExhibitionDao {

    Exhibition findOne(long exhibitionId);

    List<Exhibition> findAll();

    void create(Exhibition exhibition);

    Exhibition update(Exhibition exhibition);

    void delete(Exhibition exhibition);

    void deleteById(long exhibitionId);
}
