package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Theme;
import org.springframework.data.repository.ListCrudRepository;

public interface ThemeRepository extends ListCrudRepository<Theme,Integer> {
}
