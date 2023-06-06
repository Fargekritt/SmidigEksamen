package no.kristiania.munchMoment.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
/*
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
 */
public class Painting implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "painting_ID")
    private long id;


    @ManyToOne
    private Artist artist;

    @ManyToOne
    private Exhibition exhibition;

    @Column(name = "painting_name")
    private String paintingName;

    @Column(name = "date_created")
    private String dateCreated;

    @Column(name = "description")
    private String description;

    @Column(name = "image_path")
    private String imagePath;

    /*
        Getters and Setters
    */
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Exhibition getExhibition() {
        return exhibition;
    }

    public void setExhibition(Exhibition exhibition) {
        this.exhibition = exhibition;
    }

    public String getPaintingName() {
        return paintingName;
    }

    public void setPaintingName(String paintingName) {
        this.paintingName = paintingName;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
