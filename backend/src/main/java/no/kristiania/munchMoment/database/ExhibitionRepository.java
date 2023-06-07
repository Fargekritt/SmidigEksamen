package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Exhibition;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExhibitionRepository extends ListCrudRepository<Exhibition, Long> {
}
