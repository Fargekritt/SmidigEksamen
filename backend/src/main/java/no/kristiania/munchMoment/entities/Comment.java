package no.kristiania.munchMoment.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
public class Comment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_ID")
    private long id;

    @ManyToOne
    @JoinColumn(name = "painting_ID", nullable = false)
    private Painting painting;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "comment_text")
    private String text;

    @Column(name = "comment_date")
    private String date;

    @Column(name = "likes")
    private int likes;


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

    public Painting getPainting() {
        return painting;
    }

    public void setPainting(Painting painting) {
        this.painting = painting;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }
}
