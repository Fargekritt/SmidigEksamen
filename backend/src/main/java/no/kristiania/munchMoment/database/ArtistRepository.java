package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Artist;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends ListCrudRepository<Artist, Long> {

    List<Artist> findArtistsByArtistName(String name);

}
