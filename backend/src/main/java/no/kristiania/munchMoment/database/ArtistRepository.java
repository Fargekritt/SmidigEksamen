package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Artist;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface ArtistRepository extends ListCrudRepository<Artist, Long> {

    List<Artist> findArtistsByArtistName(String name);

}
