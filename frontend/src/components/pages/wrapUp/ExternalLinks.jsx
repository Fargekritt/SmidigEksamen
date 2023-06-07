import React from "react";

const links = [
  {
    description: "Mat & drikke på MUNCH",
    url: "https://www.munchmuseet.no/besok-oss/mat-drikke-MUNCH/",
  },
  {
    description: "Nettbutikk",
    url: "https://shop.munchmuseet.no/?___store=no",
  },
  {
    description: "Kontakt oss",
    url: "https://www.munchmuseet.no/om-oss/kontakt/",
  },
];

const ExternalLinks = () => {
  return (
    <div className="external-links">
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.description}
        </a>
      ))}
    </div>
  );
};

export default ExternalLinks;
