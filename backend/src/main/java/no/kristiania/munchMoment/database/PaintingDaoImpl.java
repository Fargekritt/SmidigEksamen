package no.kristiania.munchMoment.database;

import no.kristiania.munchMoment.entities.Painting;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;
@Component
public class PaintingDaoImpl implements Dao<Painting> {

    @Override
    public Optional<Painting> get(int id) {
        return Optional.empty();
    }

    @Override
    public Collection<Painting> getAll() {
        return null;
    }

    @Override
    public int save(Painting painting) {
        return 0;
    }

    @Override
    public void update(Painting painting) {

    }

    @Override
    public void delete(Painting painting) {

    }
}
