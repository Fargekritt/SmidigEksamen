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

}
