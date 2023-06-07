package no.kristiania.munchMoment.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Exhibition implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exhibition_ID")
    private long id;

    @Column(name = "exhibition_name")
    private String exhibitionName;

    @Column(name = "floor")
    private int floor;

}
