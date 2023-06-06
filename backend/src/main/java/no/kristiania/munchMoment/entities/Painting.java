package no.kristiania.munchMoment.entities;

public class Painting {

    private long id;
    private long painterId;
    private long exhibitionId;
    private String paintingName;
    private String dateCreated;
    private String imagePath;
    private String description;

    public Painting(long id){
        this.id = id;
    }

    /*
        Getters and Setters
    */
    public long getId(){
        return id;
    }
    public void setId(long id){
        this.id = id;
    }

    public long getPainterId() {
        return painterId;
    }

    public void setPainterId(long painterId) {
        this.painterId = painterId;
    }

    public long getExhibitionId() {
        return exhibitionId;
    }

    public void setExhibitionId(long exhibitionId) {
        this.exhibitionId = exhibitionId;
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
