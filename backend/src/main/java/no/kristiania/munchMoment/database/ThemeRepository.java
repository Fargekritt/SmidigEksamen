package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Theme;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThemeRepository extends ListCrudRepository<Theme,Long> {
}
