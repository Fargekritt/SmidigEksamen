package no.kristiania.munchMoment.endpoints;

import no.kristiania.munchMoment.entities.Theme;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api/theme")
public class ThemeController {

    @GetMapping("/{id}")
    public List<Theme> getTheme (@PathVariable long id){
        List<Theme> themeList = new ArrayList<>();
        return themeList;
    }
}
