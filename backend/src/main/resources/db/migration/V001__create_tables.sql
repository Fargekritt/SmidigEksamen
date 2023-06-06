CREATE TABLE artist
(
    artist_ID   INT AUTO_INCREMENT PRIMARY KEY,
    artist_name VARCHAR(100)
);

CREATE TABLE exhibition
(
    exhibition_ID   INT AUTO_INCREMENT PRIMARY KEY,
    exhibition_name VARCHAR(100),
    floor           INT
);
CREATE TABLE painting
(
    painting_ID   INT AUTO_INCREMENT PRIMARY KEY,
    painting_name VARCHAR(50),
    date_created  VARCHAR(20),
    description   TEXT,
    image_path    VARCHAR(250),
    painter_ID    INT,
    exhibition_ID INT,
    FOREIGN KEY (painter_ID) REFERENCES artist (artist_ID),
    FOREIGN KEY (exhibition_ID) REFERENCES exhibition (exhibition_ID)
);

CREATE TABLE comment
(
    comment_ID   INT AUTO_INCREMENT PRIMARY KEY,
    nickname     VARCHAR(30),
    comment_text VARCHAR(2000),
    comment_date DATE,
    likes        INT,
    painting_ID  INT,
    FOREIGN KEY (painting_ID) REFERENCES painting (painting_ID)
);


CREATE TABLE theme
(
    theme_ID   INT AUTO_INCREMENT PRIMARY KEY,
    theme_name VARCHAR(50)
);

CREATE TABLE painting_theme
(
    painting_ID INT,
    theme_ID    INT,
    FOREIGN KEY (painting_ID) REFERENCES painting (painting_ID),
    FOREIGN KEY (theme_ID) REFERENCES theme (theme_ID)
);
