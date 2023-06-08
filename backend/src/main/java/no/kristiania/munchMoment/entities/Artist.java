package no.kristiania.munchMoment.entities;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
public class Artist implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artist_ID")
    private long id;

    @Column(name = "artist_name")
    private String artistName;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }
}
