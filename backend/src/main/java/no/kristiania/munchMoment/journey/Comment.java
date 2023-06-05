package no.kristiania.munchMoment.journey;

public class Comment {
    private Long id;

    public Comment(Long id){
        this.id = id;
    }
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
}
