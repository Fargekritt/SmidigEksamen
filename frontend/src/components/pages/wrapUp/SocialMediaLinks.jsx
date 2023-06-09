import React from "react";
import Instagram from "../../../assets/images/instagram.png";
import Twitter from "../../../assets/images/twitter.png";
import Facebook from "../../../assets/images/facebook.png";
import YouTube from "../../../assets/images/youtube.png";
import TikTok from "../../../assets/images/tiktok.png";

const links = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/munchmuseet.no/",
    image: Instagram,
  },
  {
    name: "TikTok",
    url: "http://www.tiktok.com/@munchmuseet.no",
    image: TikTok,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/user/themunchmuseum",
    image: YouTube,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/munchmuseet",
    image: Facebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/munchmuseet",
    image: Twitter,
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="social-media-wrapper">
      {links.map(link => (
        <a key={link.name} href={link.url}>
          <img src={link.image} alt={link.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
