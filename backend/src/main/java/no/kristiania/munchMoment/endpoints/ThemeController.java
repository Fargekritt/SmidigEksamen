package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.database.ThemeRepository;
import no.kristiania.munchMoment.entities.Theme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/theme")
public class ThemeController {

    @Autowired
    ThemeRepository themeRepository;
    @GetMapping("/{id}")
    public ResponseEntity<Theme> getTheme (@PathVariable long id){
        Optional<Theme> optionalTheme = themeRepository.findById(id);
        return optionalTheme
                .map(theme -> ResponseEntity.status(HttpStatus.OK).body(theme))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());

    }
    @GetMapping("/")
    public List<Theme> getAll(){
        List<Theme> themeList = themeRepository.findAll();
        return themeList;
    }
}
