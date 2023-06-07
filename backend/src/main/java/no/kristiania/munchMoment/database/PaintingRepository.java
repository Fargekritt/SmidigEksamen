package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Painting;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaintingRepository extends ListCrudRepository<Painting, Long> {

}
