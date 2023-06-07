package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Painting;
import org.springframework.data.repository.ListCrudRepository;

public interface PaintingRepository extends ListCrudRepository<Painting, Integer> {

}
