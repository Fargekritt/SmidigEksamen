package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Exhibition;
import org.springframework.data.repository.ListCrudRepository;

public interface ExhibitionRepository extends ListCrudRepository<Exhibition, Integer> {
}
