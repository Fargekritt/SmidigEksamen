package no.kristiania.munchMoment.entities;

import jakarta.persistence.*;

@Entity
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artist_ID")
    private long id;

    @Column(name = "artist_name")
    private String artistName;

}
