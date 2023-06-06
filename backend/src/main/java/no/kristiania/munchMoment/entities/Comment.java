package no.kristiania.munchMoment.entities;

import java.time.LocalDateTime;

public class Comment {
    private long id;
    private long paintingId;
    private String nickname;
    private String text;
    private LocalDateTime date;

    /*
    Getters and Setters
    */
    public long getId(){
        return id;
    }
    public void setId(long id){
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getPaintingId() {
        return paintingId;
    }

    public void setPaintingId(long paintingId) {
        this.paintingId = paintingId;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
