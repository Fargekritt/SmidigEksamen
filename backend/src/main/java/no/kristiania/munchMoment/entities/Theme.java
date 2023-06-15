package no.kristiania.munchMoment.entities;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Theme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "theme_ID")
    private long id;

    @Column(name = "theme_name")
    private String themeName;

    @ManyToMany
    @JoinTable( name = "painting_theme",
            joinColumns = @JoinColumn(name = "painting_ID"),
            inverseJoinColumns = @JoinColumn(name = "theme_ID"))
    private Set<Painting> paintings;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getThemeName() {
        return themeName;
    }

    public void setThemeName(String themeName) {
        this.themeName = themeName;
    }
}
